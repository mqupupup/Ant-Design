import React, {ReactNode} from 'react';
import classNames from 'classnames';

import './index.css';

interface buttonProps {
  className ?: string;
  type ?: 'normal' | 'primary' |'text'|'link'|'dashed';
  children ?: ReactNode;
  style ?: React.CSSProperties;
};
const Button =  (props:buttonProps) => {
  const {className, type, children,style
  } = props;
  const clc = classNames({
    'ant-btn':true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  })
  return <button className={clc} style={style}>{props.children}</button>

}
export default Button;
