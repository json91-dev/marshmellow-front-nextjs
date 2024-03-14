import style from './confirmButton.module.scss';
import React, { CSSProperties } from 'react';

type Props = {
  text: string;
  customStyle?: CSSProperties;
};
export default function ConfirmButton(props: Props) {
  const { customStyle, text } = props;
  return (
    <div className={style.confirmButton} style={customStyle}>
      {text}
    </div>
  );
}
