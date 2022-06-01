# RS-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Rafael Sequeira

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'rs-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ isMaxCountReached, reset, increaseBy, count }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```