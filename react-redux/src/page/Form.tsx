import './Form.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CartForm from '../components/CartForm';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/store';
import { addCard } from '../store/reduser/formSlice';

enum GenderEnum {
  Minsk = 'Minsk',
  Russia = 'Russia',
  Ukraine = 'Ukraine',
  Default = 'Default',
}

interface IFormInput {
  valueName: string;
  valueDate: string;
  valueSelect: GenderEnum;
  valueCheckbox: boolean;
  valueRadio: boolean;
  image: string;
}

const Form = () => {
  const [blok, setBlock] = useState(false);
  const [img, setImg] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const newDataUser: Array<IFormInput> = useAppSelector((state) => state.form.cards);
  const dispatch = useDispatch();

  const onSubmit = (data: IFormInput) => {
    data.image = img;
    dispatch(addCard({ card: data }));
    setBlock(true);
    setTimeout(() => {
      setBlock(false);
    }, 2000);
    reset();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Имя:</span>
          <input
            {...register('valueName', { required: true, pattern: /^(([A-Za-z]|[А-Яа-я]){3,})*$/ })}
          />
          <div>
            {errors?.valueName && (
              <p style={{ margin: '0', padding: '0 0 10px 0', color: '#af0606' }}>
                Введите имя(мин 3 буквы)
              </p>
            )}
          </div>
        </div>
        <div>
          <span>Дата:</span>
          <input
            type="date"
            {...register('valueDate', {
              required: 'Введите дату',
              validate: (value) => {
                const currentDate = new Date();
                const inputDate = new Date(value);
                if (inputDate > currentDate) {
                  return 'Введите корректную дату';
                }
              },
            })}
          />
          <div>
            {errors.valueDate && (
              <p style={{ margin: '0', padding: '0 0 10px 0', color: '#af0606' }}>
                {errors.valueDate.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <span>Город:</span>
          <select
            className="Selrct-form"
            {...register('valueSelect', { required: true })}
            defaultValue={'Default'}
          >
            <option value="Default" disabled>
              ...
            </option>
            <option value="Minsk">Minsk</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
          <div>
            {errors?.valueSelect && (
              <p style={{ margin: '0', padding: '0 0 10px 0', color: '#af0606' }}>
                Выбирите страну
              </p>
            )}
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <span>согласиться:</span>
          <input
            style={{ width: '4%', margin: '0px' }}
            type="checkbox"
            {...register('valueCheckbox', { required: true })}
          />
        </div>
        <div>
          {errors?.valueCheckbox && (
            <p style={{ margin: '0', padding: '0 0 10px 0', color: '#af0606' }}>
              Выбирите согласиться
            </p>
          )}
        </div>
        <div style={{ display: 'flex' }}>
          <label className="label-pol">
            <span>м:</span>
            <input
              style={{ width: '100%', marginTop: '5px' }}
              type="radio"
              {...register('valueRadio', { required: true })}
            />
          </label>

          <label style={{ marginLeft: '10px' }} className="label-pol">
            <span>ж: </span>
            <input
              style={{ width: '100%', marginTop: '5px' }}
              type="radio"
              {...register('valueRadio', { required: true })}
            />
          </label>
        </div>
        {errors?.valueRadio && (
          <p style={{ margin: '0', padding: '0 0 10px 0', color: '#af0606' }}>Выбирите пол</p>
        )}
        <div>
          <input
            type="file"
            accept="image/*"
            {...register('image', { required: true })}
            onChange={handleFileChange}
          />
          {errors?.image && (
            <p style={{ margin: '0', padding: '0 0 10px 0', color: '#af0606' }}>
              Выбирите картинку
            </p>
          )}
        </div>
        <div>
          <input className="Btn-form" type="submit" value="Submit" />
        </div>
      </form>
      {newDataUser.map((item, index) => (
        <CartForm
          key={index}
          name={item.valueName}
          date={item.valueDate}
          city={item.valueSelect}
          img={item.image}
        />
      ))}
      {blok ? (
        <div className="block-ok">
          <span>Успешно!</span>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Form;
