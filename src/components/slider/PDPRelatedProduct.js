import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Image, Button } from "@chakra-ui/react"
import '../../assets/CSS/productpage.css'
import './relatedproduct.css'
import Slider from "react-slick"
import Skeleton from 'react-loading-skeleton'
import { ShopContext } from "../../context/ShopContext"
import ReactTooltip from "react-tooltip";

const PDPRelatedProduct = (props) => {

  const [loading, setLoading] = useState(true)
  const { fetchAllProducts, products, addItemToCheckout, product } = useContext(ShopContext)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
    fetchAllProducts()
  }, [fetchAllProducts])

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  let extractedInfo = ""
  if (product.id) {
    const buff = Buffer.from(product?.id, 'base64')
    const decodedId = buff.toString('ascii')
    extractedInfo = decodedId.split(/[\s/]+/).pop()
  }
  //console.log({ products })

  return (
    <div id="wrapper" className="pdprelatedprodsection">
      <div className="inner">
        <div className="relatedProduct">
          <div className="Container">
            {/* <div class="relatedProductTitle">
              <h2>Related Sacheu Products</h2>
            </div> */}
            <div class="instaTitle">
              <h2>{props.title}</h2>
              {/* <h2>Related Sacheu Products</h2> */}
            </div>
            <div className="relatedproductContainer">
              <div className="product-listing">
                <Slider infinite={products && products.length > 3} {...settings}>
                  {products.map((product) => (
                    <div className="itemBox" key={product.id}>
                      <div className="item">
                        {product.variants[0].compareAtPrice > product.variants[0].price ? (<span className="sale">SALE</span>) : (<span></span>)}
                        <div className="imageContainer">
                          <Link to={`/products/${product.handle}`} key={product.id} aria-label={`Navigate to ${product.title} product page`}>
                            {loading && <Skeleton height={306} />}
                            {!loading && <Image src={product.images[0].src} />}
                          </Link>
                        </div>
                        <div className="productInfo">
                          <Link to={`/products/${product.handle}`} data-tip="Product">
                            {loading && <Skeleton height={30} />}
                            {!loading && <h3 className="itemName">{product.title}</h3>}
                          </Link>
                          <ReactTooltip globalEventOff="click" />
                          <p className="relatedProPrice">
                            {loading ? <Skeleton height={30} /> : `${product.variants[0].price}`}
                          </p>
                          <div style={{ textAlign: 'center' }} className="">
                            <div class="yotpo bottomLine" data-product-id={extractedInfo} style={{ display: 'inline-block' }}></div>
                          </div>
                          {loading ? <Skeleton height={42} /> : <Button mt="3%" className="cartButton" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDPRelatedProduct
