import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
//import './../assets/CSS/productpage.css'
import { ShopContext } from '../context/ShopContext'
import { Grid, Image, Text, Heading, Flex } from '@chakra-ui/react'
import Skeleton from 'react-loading-skeleton'
import NumberInput from './NumberInput'
import Slider from "react-slick"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import '../components/slider/relatedproduct.css'


const ProductPage = () => {
    const width = window.innerWidth
    //console.log(width)
    const { handle } = useParams()
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    const [imageclick, setImageclick] = useState(0)
    const [loading, setLoading] = useState(true)
    const [productQuantity, setProductQuantity] = React.useState(1)
    const handleProductQuantity = (quantityAsString, quantityAsNumber) => {
        setProductQuantity(quantityAsNumber)
    }

    let extractedInfo = "";
    if (product.id) {
        const buff = Buffer.from(product?.id, 'base64');
        const decodedId = buff.toString('ascii');
        extractedInfo = decodedId.split(/[\s/]+/).pop();
    }
    //console.log('review-->', product)

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 500,
        focusOnSelect: true,
    }
    const mobsettings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
        speed: 5000,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }


    if (!product.title) return <div><div class="loading">Loading&#8230;</div></div>
    //if (!product.title) return <div><div class="spinner"><div class="spinner spinner2"><div class="spinner spinner3"></div></div></div></div>

    return (
        <>
            <div id="wrapper">
                <section id="two">
                    <div className="inner pdppage">
                        <div class="box alt">

                            <Grid className="productMobile" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">

                                <div className="proLeft productImage">
                                    <div className="imageThumbnail">
                                        {/* {product.images && product.images.map((item, i) => {
                                            return loading ? <Skeleton width={90} height={70} /> : <Image key={i} onClick={() => setImageclick(i)} className="productMainImage" src={item && item.src} width="10%" height="auto" />
                                        })} */}

                                        <Slider {...settings}>
                                            {product.images && product.images.map((item, index) => {
                                                return loading ? <Skeleton width={90} height={70} /> : <Image key={index} src={item && item.src} alt="sacheu" onClick={() => setImageclick(index)} className="prodmetaImages" />
                                            })}
                                        </Slider>
                                    </div>
                                    <Flex className="productImg" justifyContent="center" alignItems="center">
                                        {width < 767 ? (loading ? <Skeleton width={343} height={365} /> : <Image src={product.images[imageclick].src} />)
                                            : (loading ? <Skeleton width={650} height={600} /> : <Zoom zoomMargin={6} isZoomed={true} overlayBgColorStart={'rgba(36, 41, 67, 0.15)'} overlayBgColorEnd={'rgba(36, 41, 67, 0.85)'}><Image src={product.images[imageclick].src} /></Zoom>)
                                        }
                                    </Flex>
                                    {/* <div>
                                        {width > 767
                                            ?
                                            (
                                                <>
                                                    <Flex className="productImg" justifyContent="center" alignItems="center">
                                                        {width < 767 ? (loading ? <Skeleton width={343} height={365} /> : <Image src={product.images[imageclick].src} />)
                                                            : (loading ? <Skeleton width={650} height={600} /> : <Zoom zoomMargin={6} isZoomed={true} overlayBgColorStart={'rgba(36, 41, 67, 0.15)'} overlayBgColorEnd={'rgba(36, 41, 67, 0.85)'}><Image src={product.images[imageclick].src} /></Zoom>)
                                                        }
                                                    </Flex>
                                                    <div className="bigprolist">
                                                        {product.images && product.images.map((item, index) => {
                                                            return loading ? <Skeleton width={90} height={70} /> : <Image key={index} src={item && item.src} alt="sacheu" onClick={() => setImageclick(index)} className="prodmetaImages" />
                                                        })}
                                                    </div>
                                                </>
                                            )
                                            :
                                            <>
                                                <div className="relatedProduct relapro">
                                                    <div className="product-listing">
                                                        <Slider infinite={product && product.length > 3} {...mobsettings}>
                                                            {product.images && product.images.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <div className='itemBox' key={index}>
                                                                            <div className='item'>
                                                                                {loading
                                                                                    ? <Skeleton width={90} height={70} />
                                                                                    : <Zoom overlayBgColorStart={'rgba(36, 41, 67, 0.15)'} overlayBgColorEnd={'rgba(36, 41, 67, 0.85)'}>
                                                                                        <Image key={index} src={item && item.src} alt="sacheu" onClick={() => setImageclick(index)} className="prodmetaImages" />
                                                                                    </Zoom>}
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div> */}
                                </div>


                                <Flex flexDirection="column" justifyContent="center" px="2rem" className="pdpmeta">
                                    <Heading pb="2rem" className="PDP_productTitle">
                                        {width < 767
                                            ? (loading ? <Skeleton width={365} height={70} /> : `${product.title}`)
                                            : (loading ? <Skeleton width={650} height={70} /> : `${product.title}`)
                                        }
                                    </Heading>

                                    {/* <Heading pb="2rem" className="PDP_productTitle">{product.id}</Heading> */}
                                    <Text className="PDP_cartprice" fontWeight="bold" pb="1rem">{loading ? <Skeleton width={75} height={70} /> : `$${product.variants[0].price}`}</Text>

                                    <Text>{extractedInfo} <br /> {product.id}
                                        <div style={{ textAlign: 'center' }} className="prosreview">
                                            <div class="yotpo bottomLine" data-product-id={extractedInfo} style={{ display: 'inline-block' }}></div>
                                        </div>
                                    </Text>

                                    <Text pb="2rem" color="gray.500" className="propagedesc">
                                        {width < 767
                                            ? (loading ? <Skeleton width={365} height={200} /> : <div dangerouslySetInnerHTML={{ __html: product.description }}></div>)
                                            : (loading ? <Skeleton width={650} height={200} /> : <div dangerouslySetInnerHTML={{ __html: product.description }}></div>)
                                        }
                                    </Text>

                                    <div className="klarnaText">
                                        4 interest-free payments of $6.00. <strong>Klarna</strong> Learn more
                                    </div>

                                    <div className="cartgroup">
                                        <div className="Container cartInput">
                                            <NumberInput inputProps={{ 'aria-label': 'Product quantity' }} onChange={handleProductQuantity} />
                                        </div>
                                        <div className="Container cart-btn cartsize">
                                            {loading ? <Skeleton height={42} /> : <button className=" animate__zoomIn animate__animated" onClick={() => addItemToCheckout(product.variants[0].id, 1)} quantity={productQuantity}>Add To Cart</button>}
                                        </div>
                                    </div>
                                </Flex>
                            </Grid>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductPage
