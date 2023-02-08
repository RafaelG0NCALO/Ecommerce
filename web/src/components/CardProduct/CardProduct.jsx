import { Star } from 'phosphor-react'
import { Link } from 'react-router-dom'
import ButtonAnimateCart from '../ButtonAnimateCart/ButtonAnimateCart'

import { toast } from 'react-toastify';

import { useDispatch } from "react-redux"
import { cartActions } from "../../redux/slices/cartSlice"
import ButtonHeart from '../ButtonHeart/ButtonHeart';

const CardProduct = ({item}) => {

  const dispatch = useDispatch()
  const addToCart = () =>{
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
        }));
    toast.success('Product Added Successfully')
  }

  return (
<>
    <div className='w-full max-w-[300px] bg-white overflow-hidden rounded-lg shadow-sm mt-4 border-solid border-2 border-gray-100'>
        <div className='h-64 flex shadow-sm overflow-hidden relative'>

            <div className='absolute z-10 top-1 right-1'>
                <ButtonHeart/>  
            </div>

            <img src={item.imgUrl} alt="" className='object-cover w-full hover:scale-125 duration-150 cursor-pointer' />
        </div>

        <div className='p-2'>

            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <h1 className='mr-1'>Reviews</h1>
                    <Star />
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <h1 className='font-bold text-black text-lg mr-2'>R${item.price}</h1>
            </div>

            <div className='py-3 text-zinc-700'>
                
                <h1 className='flex justify-between items-center font-bold text-black text-xl pb-1'>
                    <Link to={`/shop/${item.id}`} className='truncate w-52'>
                        {item.productName}
                    </Link>
                    <span className='font-normal text-sm'>{item.category}</span>
                </h1>
               
                <div className='h-12 overflow-hidden'>
                    {item.description}
                </div>
            </div>

            <div onClick={addToCart}>
                <ButtonAnimateCart/>
            </div>
        </div>
        
    </div>

    </>
  )
}

export default CardProduct