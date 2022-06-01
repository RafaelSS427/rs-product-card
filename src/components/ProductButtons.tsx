import React, { useCallback, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
    className?: string;
    style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    // TODO: maxCount - puede que venga y puede que no
    const { counter, increaseBy, maxCount } = useContext(ProductContext)

    const isMaxReached = useCallback(
      () => maxCount !== null && counter === maxCount,
      [counter, maxCount],
    )
    
    // Todo isMaxReached = useCallback, dependencias [counter, maxCount]
    // true si el counter === maxCount
    // false si no lo es
    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={ style }
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            > - </button>

            <div className={styles.countLabel}>{counter}</div>

            <button
                className={`${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }`}
                onClick={() => increaseBy(1)}
            > + </button>
        </div>
    )
}