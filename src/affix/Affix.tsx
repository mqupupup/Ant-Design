import React, {ReactNode, CSSProperties, useCallback, useState} from 'react';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';

import './index.scss';

export interface  AffixProps extends React.HTMLAttributes<HTMLInputElement>{
    className ?: string;
    children ?: ReactNode;
    offsetTop ?: number;
    style ?: CSSProperties;
};
const Affix =  (props:AffixProps) => {
    const {className,style,children,offsetTop
        ,...others} = props;
    const [wraperStyle, setWraperStyle] = useState(null);
    const [affixed, setAffixed] = useState(false);

    const waperRefCB = useCallback(node => {
        if(!node)return;
        function updatePosition() {
            const {top, width, height} = node.getBoundingClientRect();
            if(top <= offsetTop && !affixed || (affixed &&
                (width !== wraperStyle.width || height !== wraperStyle.height))){
                setWraperStyle({
                    position:'fixed',
                    width,height
                });
                setAffixed(true);
            }else if(top > offsetTop){
                setAffixed(false);
            }

        }
        window.addEventListener('scroll',updatePosition,false);

        const ob = new ResizeObserver(updatePosition);
        ob.observe(node);

    },[])
    const clc = classNames({
        'ant-affix':true,
        [className as string]: !!className,
    })
    return <div ref={waperRefCB}>
        {affixed ? <div style={wraperStyle}/> : null}
        <div  style={affixed ? {
            position:'fixed',
            top: offsetTop,
            ...wraperStyle
        }: null}>
            { children}
        </div>
    </div>

}
export default Affix;