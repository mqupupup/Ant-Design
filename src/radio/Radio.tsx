import React, {ReactNode, CSSProperties, useState, useRef} from 'react';
import classNames from 'classnames';

import './index.scss';


export interface  RadioProps extends React.HTMLAttributes<HTMLInputElement>{
    checked ?: boolean;
    defaultChecked ?: boolean;
    onChange ?:  (event: React.FormEvent<HTMLInputElement>) => void;
    disabled ?: boolean;
    className ?: string;
    children ?: ReactNode;
    style ?: CSSProperties;
    value ?: string;
};
const Radio =  (props:RadioProps) => {
    const {className,  children,style
       ,disabled,onChange ,...others} = props;

    const [checked, setChecked] = useState(false);
    const inputEle = useRef(null);
    const cls = classNames({
        'ant-radio': true,
        'ant-radio-checked': checked,
    });
    const wrapperCls = classNames({
        'ant-radio-wrapper': true,
        'ant-radio-disabled': disabled,
    });

    React.useEffect(() => {
        // 增加一条判断逻辑：当不可选时，即便调整checked状态也不能修改radio状态
        if('checked' in props && props.checked !== checked && disabled !== true){
            setChecked(props.checked);
        }
    },[props.checked]);
    const handleClick = (e) => {
        if(checked || disabled) return;
        if(!('checked' in props)) {
            setChecked(true);
        }
        setChecked(true);
        if(typeof onChange === 'function'){
            e.target = inputEle.current;
            onChange(e);
        }
    }

    return (
        <span className={wrapperCls} onClick = {handleClick}>
            <span  className={cls} >
                <input type="radio" className="ant-radio-input" ref={inputEle}/>
                <span className="ant-radio-inner"></span>
            </span>
            <span>{props.children}</span>
        </span>

    );
}
export default Radio;
