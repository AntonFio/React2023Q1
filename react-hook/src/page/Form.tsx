import './Form.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CartForm from '../components/CartForm';

enum GenderEnum {
  Minsk = 'Minsk',
  Russia = 'Russia',
  Ukraine = 'Ukraine',
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
  const [item, setItem] = useState<IFormInput[]>([]);
  const [blok, setBlock] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const value = {
      ...data,
      image: URL.createObjectURL(data.image[0] as unknown as Blob),
    };
    setItem([...item, value]);
    setBlock(true);
    setTimeout(() => {
      setBlock(false);
    }, 2000);
    reset();
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
          <select className="Selrct-form" {...register('valueSelect', { required: true })}>
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
          <input type="file" accept="image/*" {...register('image', { required: true })} />
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
      {item.map((item, index) => (
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
