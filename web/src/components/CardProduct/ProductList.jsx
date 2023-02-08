import React from 'react'
import CardProduct from './CardProduct'

const ProductList = ({data}) => {
  return (
    <>
        {data?.map((item, index) =>(
            <CardProduct key={index} item={item}/>
        ))}
    </>
  )
}

export default ProductList