import { CheckCircle, Package, ShoppingCart } from 'phosphor-react'
import React, { useState } from 'react'

const ButtonAnimateCart = () => {

  const [toggleCart, setToggleCart] = useState(true)
  function HandleToggleCart(){
    setToggleCart(false)
      setTimeout(() =>{
        setToggleCart(true)
    }, 2000)
  }

  return (
    <>
        {toggleCart
        ? 
        <button onClick={HandleToggleCart} 
        className="relative p-2 w-full max-w-xs h-11 rounded-lg bg-black cursor-pointer text-white transition ease-in-out delay-75 overflow-hidden active:scale-90">
            <span className="add-to-cart">Add to cart</span>
        </button>
            :
       <button className="relative max-w-xs p-2 w-full h-11 rounded-lg bg-black cursor-pointer text-white transition ease-in-out delay-75 overflow-hidden active:scale-90">
            <span className="absolute z-30 left-[44%] top-[15%] text-lg animate-txt2">
              <CheckCircle size={32}/>
            </span>
            <ShoppingCart className='absolute z-20 top-[16%] -left-[10%] text-3xl animate-cart translate-x-1/2 ' />
            <Package className='absolute z-30 -top-[-20%] left-[52%] text-lg translate-x-1/2 animate-box '/>
        </button>
        }
    </>
  )
}

export default ButtonAnimateCart