import React, { CSSProperties } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import styles from './TextInput.module.scss';

interface TextInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  required?: boolean;
  placeholder?: string;
  customStyle?: CSSProperties;
}

const TextInput = <T extends FieldValues>({
  placeholder,
  register,
  name,
  required = false,
  customStyle,
}: TextInputProps<T>) => (
  <div className={styles.textInput} style={customStyle}>
    <input type="text" placeholder={placeholder} {...register(name, { required })} />
  </div>
);

export default TextInput;
