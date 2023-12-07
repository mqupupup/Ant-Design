import React, {ReactNode, CSSProperties, useState, useRef} from 'react';
import classNames from 'classnames';

import './index.scss';
import Radio from "./Radio";

export interface  RadioGroupProps extends React.HTMLAttributes<HTMLInputElement>{
    value ?: string;
    checked ?: boolean;
    defaultChoice ?: boolean;
    onChange ?:  (event: React.FormEvent<HTMLInputElement>) => void;
    disabled ?: boolean;
    className ?: string;
    children ?: ReactNode;
    style ?: CSSProperties;
};
const RadioGroup =  (props:RadioGroupProps) => {
    const {className,  children,style
        ,checked,value,disabled,onChange ,...others} = props;

    const [selectedValue, setSelectedValue] = useState(props.value || props.defaultChoice);
    const inputEle = useRef(null);

    const cls = classNames({
        'ant-radio-group': true,
    });

    const wrapperCls = classNames({
        'ant-radio-wrapper': true,
        'ant-radio-disabled': disabled,
    });

    const handleClick = (e) => {
        if(selectedValue || disabled) return;
        if(!('checked' in props)) {
            setSelectedValue(true);
        }
        setSelectedValue(true);
        if(typeof onChange === 'function'){
            e.target = inputEle.current;
            onChange(e);
        }

    }

    React.useEffect(() => {
        // 增加一条判断逻辑：当不可选时，即便调整checked状态也不能修改radio状态
        if('checked' in props && props.checked !== checked){
            setSelectedValue(props.checked);
        }
    },[props.checked]);

    const renderChildren = React.Children.map(children,(child:any) => {
        if(child.type !== RadioGroup)return null;
        return React.cloneElement(child,{
            selectedValue: child.props.value === selectedValue,
            disable: disabled,
            onChange:handleClick,
        })
        }

    )

    return (
           <div className={cls}>
               {renderChildren}
           </div>
    );
}
export default RadioGroup;
