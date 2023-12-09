import React, {ReactNode, CSSProperties, useCallback, useState, useEffect, useRef} from 'react';
import classNames from 'classnames';

import './index.scss';

export interface  AffixProps extends React.HTMLAttributes<HTMLInputElement>{
    className ?: string;
    children ?: ReactNode;
    offsetTop ?: number;
    style ?: CSSProperties;
};
const Affix2 =  (props:AffixProps) => {
    const {className,style,children,offsetTop
        ,...others} = props;
    const [wraperStyle, setWraperStyle] = useState(null);
    const [affixed, setAffixed] = useState(false);

    const wraperRef = useRef(null);
    const fixedRef = useRef(null);

    function updatePosition() {
        const {top, width, height} = wraperRef.current.getBoundingClientRect();
        if(top <= offsetTop && !affixed){
            setWraperStyle({
                position:'fixed',
                width,height
            });
            setAffixed(true);
        }else if(top > offsetTop){
            setAffixed(false);
        }

    }

    useEffect(() => {
        const wraperNode = wraperRef.current;
        if(!wraperNode) {
            return;
        }

        window.addEventListener('scroll',updatePosition,false);
        return() => {
            window.removeEventListener('scroll', updatePosition, false)
        }
    },[]);


    const cls = classNames({
        'ant-affix':true,
        [className as string]: !!className,
    })
    return <div ref={wraperRef}>
        {affixed ? <div style={wraperStyle}/> : null}
        <div  style={affixed ? {
            position:'fixed',
            top: offsetTop,
            ...wraperStyle
        }: null} ref={fixedRef} className={cls}>
            { children}
        </div>
    </div>

}
export default Affix2;