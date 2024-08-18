import styles from './TextAreaInput.module.scss';
import React, { CSSProperties, useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface TextAreaInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  maxLength: number;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  customStyle?: CSSProperties;
}

const TextAreaInput = <T extends FieldValues>({
  placeholder,
  register,
  name,
  maxLength,
  required = false,
  disabled = false,
  customStyle,
}: TextAreaInputProps<T>) => {
  const [charCount, setCharCount] = useState(0);
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length);
  };

  return (
    <div className={styles.textAreaInput} style={customStyle}>
      <textarea
        {...register(name, { required, disabled, onChange: handleTextChange })}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <div className={styles.charCount}>
        <p>
          {charCount}/{maxLength}
        </p>
      </div>
    </div>
  );
};

export default TextAreaInput;
