import style from './checkbox.module.scss';
import { ChangeEventHandler } from 'react';

type Props = {
  disabled: boolean;
  checked: boolean;
  onChange: ChangeEventHandler;
};
export default function Checkbox({ disabled, checked, onChange }: Props) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
      </label>
    </div>
  );
}
