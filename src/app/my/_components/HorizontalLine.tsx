import { CSSProperties } from 'react';

type Props = {
  color?: string;
  height?: string;
  customStyle?: CSSProperties;
};

const HorizontalLine = ({ color = 'black', height = '1px', customStyle = {} }) => {
  const style = {
    width: '100%',
    border: `${height} solid ${color}`,
    ...customStyle,
  };

  return <div style={style}></div>;
};

export default HorizontalLine;
