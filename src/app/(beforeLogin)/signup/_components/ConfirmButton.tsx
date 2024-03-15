import style from './confirmButton.module.scss';
import React, { CSSProperties, useCallback } from 'react';

type Props = {
  text: string;
  onClick: () => void;
  customStyle?: CSSProperties;
};
export default function ConfirmButton(props: Props) {
  const { customStyle, text, onClick } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div className={style.confirmButton} style={customStyle} onClick={handleClick}>
      {text}
    </div>
  );
}
