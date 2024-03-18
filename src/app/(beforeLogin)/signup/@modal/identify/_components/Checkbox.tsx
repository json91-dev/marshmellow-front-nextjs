import style from './checkbox.module.scss';
import { ChangeEventHandler } from 'react';

type Props = {
  disabled: boolean;
  checked: boolean;
  onChange: ChangeEventHandler;
};
export default function Checkbox({ disabled, checked, onChange }: Props) {
  return (
    <label className={style.label}>
      <input type="checkbox" />
      <p></p>
    </label>
  );
}
