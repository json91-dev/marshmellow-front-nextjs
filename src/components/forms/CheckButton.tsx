import styles from './CheckButton.module.scss';
import { ChangeEventHandler, CSSProperties } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface CheckButtonProps<T extends FieldValues> {
  checked?: boolean;
  onChange?: ChangeEventHandler;
  label?: string;
  name: Path<T>;
  required?: boolean;
  customStyle?: CSSProperties;
  value: string;
  register: UseFormRegister<T>;
}

export default function CheckButton<T extends FieldValues>({ label, register, name, value, required }: CheckButtonProps<T>) {
  return (
    <div className={styles.checkButton}>
      <label htmlFor={value}>
        <input id={value} type="checkbox" value={value} {...register(name, { required })} />
        <p className={styles.text}>{label}</p>
      </label>
    </div>
  );
}
