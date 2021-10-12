import React, { useEffect } from 'react'
import { useCartActions, useCartState } from 'frontend-checkout'
import SacheuButtonComponent from './SacheuButtonComponent'

const PRODUCT_AVAILABLE_TEXT = 'Add to Cart'
const SOLD_OUT_PRODUCT_TEXT = 'Sold out'

const SacheuAddToCartButtonComponent = React.forwardRef((props, ref) => {
    const { productId, quantity, ...rest } = props
    const { addItems, showCart } = useCartActions()
    const { inventory } = useCartState()
    const [isLoading, setLoading] = React.useState(true)
    const [disable, setDisable] = React.useState(false)
    const [availableForSale, setAvailableForSale] = React.useState(false)

    useEffect(() => {
        setLoading(inventory.status === 'loading')
        if (!inventory.productVariants || !productId) return setDisable(true)
        const { availableForSale } = inventory.productVariants[productId]
        setAvailableForSale(availableForSale)
        setDisable(!availableForSale)
    }, [inventory, productId])

    const clickHandler = () => {
        if (!productId) return
        addItems({ id: productId, quantity })
        showCart()
    }
    //console.log(productId)

    return (
        <>
            <SacheuButtonComponent
                ref={ref}
                disabled={disable}
                onClick={clickHandler}
                isFullWidth={true}
                isLoading={isLoading}
                {...rest}
            >
                {availableForSale ? PRODUCT_AVAILABLE_TEXT : SOLD_OUT_PRODUCT_TEXT}
            </SacheuButtonComponent>
        </>
    )
})

export default SacheuAddToCartButtonComponent