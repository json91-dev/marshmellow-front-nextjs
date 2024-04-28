import style from './checkbox.module.scss';
import { ChangeEventHandler } from 'react';

type Props = {
  checked: boolean;
  onChange: ChangeEventHandler;
  labelId?: string;
};
export default function Checkbox({ checked, onChange, labelId }: Props) {
  return (
    <label className={style.label}>
      <input id={labelId ? labelId : ''} type="checkbox" onChange={onChange} checked={checked} />
      <p className={style.text}></p>
    </label>
  );
}
