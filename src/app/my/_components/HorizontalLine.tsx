import { CSSProperties } from 'react';

type Props = {
  color?: string;
  height?: string;
  width?: string;
  customStyle?: CSSProperties;
};

const HorizontalLine = ({ color = 'black', height = '1px', customStyle = {}, width = '100%' }: Props) => {
  const style = {
    width: width,
    border: `${height} solid ${color}`,
    ...customStyle,
  };

  return <div style={style}></div>;
};

export default HorizontalLine;
