import * as React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

const SacheuButtonComponent = React.forwardRef((props, buttonRef) => {
  const { variant, children, ...rest } = props
  //console.log(props)
  return (
    <ChakraButton ref={buttonRef} variant="primary" {...rest}>
      {children}
    </ChakraButton>
  )
})

export default SacheuButtonComponent