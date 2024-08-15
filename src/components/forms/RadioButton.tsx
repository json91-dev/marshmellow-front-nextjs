import React, { CSSProperties } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import styles from './RadioButton.module.scss';

interface RadioButtonProps<T extends FieldValues> {
  value: string;
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  required?: boolean;
  customStyle?: CSSProperties;
}

const RadioButton = <T extends FieldValues>({
  value,
  label,
  register,
  name,
  required = false,
  customStyle,
}: RadioButtonProps<T>) => (
  <div className={styles.radioButton} style={customStyle}>
    <label className={styles.radioLabel}>
      <input type="radio" value={value} {...register(name, { required })} />
      <span className={styles.radioInnerCircle}></span>
      <p>{label}</p>
    </label>
  </div>
);

export default RadioButton;
