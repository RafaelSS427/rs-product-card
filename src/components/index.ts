import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductCardHOCProps } from '../interfaces/interfaces'

import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'

export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'

// Con assing asignamnos nuevas propiedades a un objeto
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard