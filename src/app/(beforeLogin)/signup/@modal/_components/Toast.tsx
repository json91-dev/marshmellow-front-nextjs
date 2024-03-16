'use client';
import style from './toast.module.scss';

type Props = {
  text: string;
};

export default function Toast({ text }: Props) {
  return <div>{text}</div>;
}
