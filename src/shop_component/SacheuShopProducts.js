import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { Box, Image } from '@chakra-ui/react'
import '../assets/CSS/shoppage.css'
import sacheuProducts from '../allproducts.json'
import SacheuAddToCartButtonComponent from './CartComponent/SacheuAddToCartButtonComponent'
import { ShopContext } from '../context/ShopContext'

const SacheuShopProducts = () => {
    //const { fetchAllProducts, products, addItemToCheckout, product } = useContext(ShopContext)
    const [loading, setLoading] = useState(true);
    const [productQuantity, setProductQuantity] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [])
    console.log('Shop-SacheuProducts', sacheuProducts)

    /*let extractedInfo = "";
    if (products.id) {
        const buff = Buffer.from(products?.id, 'base64');
        const decodedId = buff.toString('ascii');
        extractedInfo = decodedId.split(/[\s/]+/).pop();
    }*/
    //console.log(products[0].id)

    //if (!products) return <div><div class="loading">Loading&#8230;</div></div>

    return (
        <>
            <div id="wrapper">
                <section id="two">
                    <div className="inner">
                        <div class="box alt">
                            <div class="gtr-50 gtr-uniform">
                                <Box>
                                    <div className="product-listing">
                                        {sacheuProducts.allproducts.map((product, i) => (
                                            <>
                                                <div className="itemBox">
                                                    <div className="item">
                                                        {product.variants[0].originalPrice > product.variants[0].price ? (<span className="sale">SALE</span>) : (<span></span>)}
                                                        <div className="imageContainer">
                                                            <Link to={`/products/${product.slug}`} aria-label={`Navigate to ${product.name} product page`}>
                                                                {loading && <Skeleton height={316} />}
                                                                {!loading && <Image src={product.media[0].details.src} height={316} />}
                                                            </Link>
                                                        </div>
                                                        <div className="productInfo">
                                                            <Link to={`/products/${product.slug}`}>
                                                                {loading && <Skeleton height={30} />}
                                                                {!loading && <h3 className="itemName">{product.name}</h3>}
                                                            </Link>
                                                            <p className="relatedProPrice">
                                                                {loading ? <Skeleton height={30} /> : `$${product.variants[0].price}`}
                                                            </p>
                                                            <div style={{ textAlign: 'center' }}>
                                                                <div class="yotpo bottomLine" data-product-id={product.variants[0].externalId} style={{ display: 'inline-block' }}></div>
                                                            </div>
                                                            {/* <a href="#" className="button small fit" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                                            Buy Now
                                        </a> */}
                                                            <SacheuAddToCartButtonComponent className='button small fit'
                                                                productId={product.variants[0].storefrontId}
                                                                quantity={productQuantity} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default SacheuShopProducts
