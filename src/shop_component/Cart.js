import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid, Box, Text, Flex, Image
} from "@chakra-ui/react"
import { IoMdTrash } from "react-icons/io";
import { ShopContext } from '../context/ShopContext';
import NumberInput from './NumberInput';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)
  //console.log({checkout})
  return (
    <div className="maincartDrawer">
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm">

        <DrawerOverlay className="mainDrwaerOverlay" />
        <div className="cartOverlay"></div>
        <DrawerContent className="mainDrwaerContent">
          <DrawerCloseButton className="cartClose" />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>
          <DrawerBody>
            {checkout.lineItems ? checkout.lineItems.map(item => (
              <Grid templateColumns="repeat(1, 1fr)" gap={1} key={item.id} className="minicartlist">
                <div className="fulldrawer">
                  <div className="maincartdrawerone">
                    <Flex alignItems="center" justifyContent="center">
                      <Image src={item.variant.image.src} className="minicartImage" />
                    </Flex>
                    {/* <div className="cartQty">
                  <NumberInput />
                </div> */}
                  </div>
                  <div className="maincartdrawertwo">
                    <Flex alignItems="center" justifyContent="center">
                      <Text><Link to={`/products/${item.variant.product.handle}`} className="minicartName">{item.title}</Link></Text>
                    </Flex>
                    <Flex className="minicartPrice">
                      <Text>${item.variant.price}</Text>
                    </Flex>
                    <Flex>
                      <IoMdTrash height={90} width={90} cursor="pointer" onClick={() => removeLineItem(item.id)} className="minicartTrash" />
                    </Flex>
                  </div>
                </div>
              </Grid>

            )) : <Box h="100%" w="100%">
              <Text h="100%" w="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center"> Your Cart is Empty!</Text>
            </Box>
            }
          </DrawerBody>

          {checkout.lineItems?.length ?
            <DrawerFooter>
              <Button w="100%" className="checkoutButton">
                <a w="100%" href={checkout?.webUrl}> Checkout</a>
              </Button>
            </DrawerFooter>
            :
            <DrawerFooter>
              <Button w="100%" className="checkoutButton">
                <a w="100%" href='/shop'> Continue Shopping</a>
              </Button>
            </DrawerFooter>
          }
        </DrawerContent>
      </Drawer>
    </div>
  )
}
export default Cart
