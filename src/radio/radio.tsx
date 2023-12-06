import React, {ReactNode, CSSProperties} from 'react';
import classNames from 'classnames';

import './index.scss';

export interface  RadioProps extends React.HTMLAttributes<HTMLDivElement>{
    className ?: string;
    type ?: 'normal' | 'primary' |'text'|'link'|'dashed';
    size ?: 'small' | 'medium' | 'large';
    children ?: ReactNode;
    style ?: CSSProperties;
};
const Radio =  (props:RadioProps) => {
    const {className, type = 'normal', size = "medium", children,style
        ,...others} = props;
    const clc = classNames({
        'ant-btn':true,
        [`ant-btn-${type}`]: type,
        [`ant-btn-${size}`]: size,
        [className as string]: !!className,
    })
    return <Radio {...others} className={clc} style={style} >{props.children}</Radio>

}
export default Radio;
