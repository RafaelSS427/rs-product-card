import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        //Forma en la que resolví el problema
        // const temp = initialValues?.maxCount ? [counter + value, initialValues?.maxCount] : [counter + value];
        // const newValue = Math.sign(value) === 1 
        //     ? Math.min(...temp)
        //     : Math.max(counter + value, 0)

        //counter = 2
        // value = 1
        //Forma del instructor
        let newValue = Math.max(counter + value, 0) // 3 
        if(initialValues?.maxCount){ // si existe esta propiedad
            newValue = Math.min(newValue, initialValues.maxCount) // 3, 10 => 3
        }

        setCounter(newValue)

        // Si existe la funcion, ejecutala
        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])


    // Utilizar un objeto en caso de que el orden no importe
    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}