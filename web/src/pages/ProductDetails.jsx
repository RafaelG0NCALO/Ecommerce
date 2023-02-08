import { Star } from 'phosphor-react'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonAnimateCart from '../components/ButtonAnimateCart/ButtonAnimateCart'
import ButtonHeart from '../components/ButtonHeart/ButtonHeart'

import products from '../assets/data/products'
import phone01 from '../assets/images/phone-01.jpg'

import ProductList from '../components/CardProduct/ProductList';

import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetails = () => {

  const [ tab, setTab ] = useState('desc')

  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()

  const [ rating, setRating ] = useState(null)

  const { id } = useParams()
  const product = products.find( (item) => item.id === id )
  const { 
  imgUrl,
  productName,
  price,
  avgRating,
  reviews,
  description,
  shortDesc,
  category 
  } = product

  const relatedProducts = products.filter( (item) => item.category === category)

  const submitHandler = (e) =>{
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value
    
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    console.log(reviewObj)
    toast.success('Review sumitted')
  }

  const addTocart = () =>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    }))
    toast.success('Product added successfully')
  }

  useEffect(() =>{
    window.scrollTo(0,0)
  },[product])

  return (
    
    <div className='flex relative justify-center w-full max-w-7xl m-auto px-2 py-4 min-h-screen'>
      <title>MultiMart - {productName}</title>
      <div className='w-full'>
        <div className='flex max-md:flex-wrap justify-evenly items-center gap-10'>
          <div className='flex w-full max-w-md h-96 '>
            <img src={imgUrl} alt="" className='w-full object-cover'/>
          </div>
          <div className='w-full max-w-xl'>
              <div className='border-b-2 border-gray-100'>
                <h1 className='font-bold text-xl'>{productName}</h1>
                <div className='flex items-center gap-1'>
                  <h1 className='mr-1'>Reviews</h1>
                    <Star color='#a19c13' />
                    <Star color='#a19c13'/>
                    <Star color='#a19c13'/>
                    <Star color='#a19c13'/>
                    <Star color='#a19c13'/>
                    <span>{avgRating}</span>
                    <p className='ml-2'>({reviews.length} Review)</p>
                </div>
                <h1 className='my-2 text-xl font-bold'>
                  R${price}
                </h1>
              </div>
              <div className='py-2 border-b-2 border-gray-100'>
              {shortDesc}
              </div>
              <div className='py-3 border-b-2 border-gray-100'>
                <div className='flex gap-3'>
                  <input type="number" className='w-16 border-2 border-black p-2 rounded-md' />
                  <span onClick={addTocart} className='w-full'>
                    <ButtonAnimateCart/>
                  </span>
                </div>
                <div className='pt-2 flex items-center gap-2'>
                  <ButtonHeart/>
                  <h1 className='font-semibold'>Add to favorite</h1>
                </div>
              </div>
              <div>
                <h1 className='font-semibold'>Category</h1>
                {category}
              </div>
          </div>
        </div>

      <div>
        <div className='flex gap-3 justify-center mt-8 pb-2'>
          <h1 className={`${tab === "desc" ? "font-semibold text-red-600 cursor-pointer" : "cursor-pointer font-semibold" }`} onClick={() => setTab('desc')}>
            Description
          </h1>
          <h1 className={`${tab === "rev" ? "font-semibold text-red-600 cursor-pointer" : "font-semibold cursor-pointer" }`} onClick={() => setTab('rev')}>
            Reviews({reviews.length})
          </h1>
        </div>

        <div className='w-full p-4 text-gray-600 border-y-2 border-gray-100'>
          {tab === 'desc'?
            <p>{description}</p>
          :
          <>
            {reviews?.map((item, index) => (
              <div key={index} className='my-4'>
                <div className='flex gap-2'>
                    <img src={phone01} alt="" className='w-12 h-12 rounded-full border-2 border-gray-100' />
                    <div className='w-full'>
                      <div className='flex justify-between'>
                        <h1 className='font-bold'>Robert Carlos</h1>
                        <h1 className='text-gray-400'>12/05/22 12:00</h1>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Star color='#a19c13' />
                        <Star color='#a19c13'/>
                        <Star color='#a19c13'/>
                        <Star color='#a19c13'/>
                        <Star color='#a19c13'/>
                        <span className='font-bold ml-1'>{item.rating}</span>
                      </div>
                    </div>
                </div>
                <p>{item.text}</p>
                
              </div>
              ))}
              <div className='w-full mt-8'>
                <h1 className='my-3 text-center text-2xl font-semibold'>Leave your experience</h1>
                <form onSubmit={submitHandler} action='' className='flex-col flex relative items-end'>

                    <input type="text" ref={reviewUser} className='w-full h-9 p-2 outline-none resize-none border-2 border-gray-200 rounded-md' />

                    <div className='flex w-full gap-4 my-4'>
                      <span onClick={() => setRating(1)} className={`${rating === 1 ? 'flex items-center gap-1 cursor-pointer text-yellow-400' : 'flex items-center gap-1 cursor-pointer'}`}><Star/>1</span>
                      <span onClick={() => setRating(2)} className={`${rating === 2 ? 'flex items-center gap-1 cursor-pointer text-yellow-400' : 'flex items-center gap-1 cursor-pointer'}`}><Star/>2</span>
                      <span onClick={() => setRating(3)} className={`${rating === 3 ? 'flex items-center gap-1 cursor-pointer text-yellow-400' : 'flex items-center gap-1 cursor-pointer'}`}><Star/>3</span>
                      <span onClick={() => setRating(4)} className={`${rating === 4 ? 'flex items-center gap-1 cursor-pointer text-yellow-400' : 'flex items-center gap-1 cursor-pointer'}`}><Star/>4</span>
                      <span onClick={() => setRating(5)} className={`${rating === 5 ? 'flex items-center gap-1 cursor-pointer text-yellow-400' : 'flex items-center gap-1 cursor-pointer'}`}><Star/>5</span>
                    </div>

                    <textarea ref={reviewMsg} placeholder='Faça uma avaliação sobre o produto' type="text" name="" id="" 
                    className='w-full  rounded-md h-36 p-2 outline-none resize-none border-2 border-gray-200'/>
                    <p className=' bg-white px-2 whitespace-nowrap text-end mb-4'> 0 / 300</p>

                    <button type='submit' className='w-full h-10 bg-[#0f172a] text-white rounded-md'>
                      Enviar
                    </button>
                </form>
                
              </div>
          </>
          }
        </div>
      </div>

      <div className='flex justify-center'>
        <div>
          <div className='flex justify-center my-8'>
            <h1 className=' relative text-2xl font-semibold 
            before:w-10 
            before:h-1 
            before:bg-red-500 
            before:absolute
            before:-bottom-1'>
              You migth also like
            </h1>
          </div>
          
          <div className='flex justify-center'>
            <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
              <ProductList data={relatedProducts}/>
            </div>
          </div>
        </div>
      </div>

     </div>
    </div>
  )
}

export default ProductDetails