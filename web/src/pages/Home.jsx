import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Bag } from 'phosphor-react';

import InfoBanner from '../assets/data/InfoBanner'
import CardServices from '../assets/data/CardServices';

import ProductList from '../components/CardProduct/ProductList';
import products from '../assets/data/products';

import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/Clock/Clock';

const Home = () => {

  const[trendingProducts, setTrendingProducts] = useState([])
  const[bestSalesProducts, setBestSalesProducts] = useState([])
  const[mobileProducts, setmobileProducts] = useState([])
  const[wirelessProducts, setWirelessProducts] = useState([])
  const[popularProducts, setPopularProducts] = useState([])
  
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
    (item)=> item.category === 'chair')

    const filteredBestSalesProducts = products.filter(
    (item)=> item.category === 'sofa')

    const filteredMobileProducts = products.filter(
    (item)=> item.category === 'mobile')

    const filteredWirelessProducts = products.filter(
    (item)=> item.category === 'wireless')

    const filteredPopularProducts = products.filter(
    (item)=> item.category === 'watch')


    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setmobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  },[])


  return (
    <div className='w-full relative flex items-center justify-center'>
     <div className='w-full max-w-7xl min-h-screen m-auto p-3'>

     <Carousel className='overflow-hidden rounded-lg bg-slate-800' emulateTouch autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {InfoBanner.map((InfoBanner, index)=>(
            <div key={index} className='h-[70vh] flex md:justify-end items-end justify-center'>
              <LazyLoadImage className='w-full h-full object-cover opacity-20' height='100%' width='100%' effect='blur'src={InfoBanner.imageBanner}/>
              <div className='absolute text-left w-72 text-white drop-shadow-sm md:mr-8 mr-0 mb-10'>
                <h2 className='text-3xl font-semibold '>{InfoBanner.titleBanner}</h2>
                <h2 className='text-3xl font-semibold'>{InfoBanner.subtitleBanner}</h2>
                <p className='text-lg my-5'>{InfoBanner.textBanner}</p>
                <button className='h-12 w-full bg-black rounded-md flex items-center justify-center gap-2 text-white'>
                  Ver mais
                  <Bag size={24} />
                </button>
              </div>
            </div>
            ))}
      </Carousel>

      <div className='flex flex-1 flex-wrap  gap-2 px-2 mb-6' style={{ background:`${CardServices.bg}` }}>
          { CardServices.map(( CardServices, index) =>( 
            <div key={index} className='hover:scale-95 duration-75 rounded-md flex flex-1 p-4 gap-4 w-full min-w-[280px] mt-5 items-center' style={{ background:`${CardServices.bg}`}}>
              < CardServices.icon className='bg-[#081b32] text-white w-12 h-12 p-2 rounded-full'/>
              <div className='flex-col'>
                <h1 className='font-semibold text-lg'>{ CardServices.Title}</h1>
                { CardServices.description}
              </div>
            </div>
          ))}
      </div>

      <div className='flex justify-center'>
        <div>
          <h1 className='w-full relative text-center py-10 text-[#061a33] font-semibold text-4xl 
          before:w-24
          before:h-1
          before:bg-zinc-500
          before:absolute
          before:bottom-7
          '>
            Trending Products
          </h1>
          <div className='flex justify-center'>
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
            <ProductList data={trendingProducts}/>
          </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div>
        <h1 className='w-full relative text-center py-10 text-[#061a33] font-semibold text-4xl 
          before:w-24
          before:h-1
          before:bg-zinc-500
          before:absolute
          before:bottom-7
          '>
            Best Sales
          </h1>
          <div className='flex justify-center'>
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
            <ProductList data={bestSalesProducts}/>
          </div>
          </div>
        </div>
      </div>

    
    <div className='w-full flex items-center justify-around bg-[#061a33] p-5 my-10 flex-wrap rounded-md'>
    <div className='flex-col text-white'>  
        <div className='flex-col gap-1'>
          <h1 className='text-xl'>Limited Offers</h1>
          <h1 className='text-2xl'>Quality Armchair</h1>
        </div>
        <Clock/>
        <button className='h-10 w-40 bg-slate-50 text-black rounded-md mt-3'>Visite Store</button>
      </div>
      <div>
        <img src={counterImg} alt="" className='w-full max-w-xs'/>
      </div>
    </div>

    <div className='flex justify-center'>
        <div>
        <h1 className='w-full relative text-center py-10 text-[#061a33] font-semibold text-4xl 
          before:w-24
          before:h-1
          before:bg-zinc-500
          before:absolute
          before:bottom-7
          '>
            New Arrivals
          </h1>
          <div className='flex justify-center'>
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
            <ProductList data={mobileProducts}/>
            <ProductList data={wirelessProducts}/>
          </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div>
        <h1 className='w-full relative text-center py-10 text-[#061a33] font-semibold text-4xl 
          before:w-24
          before:h-1
          before:bg-zinc-500
          before:absolute
          before:bottom-7
          '>
            Popular in Category
          </h1>
          <div className='flex justify-center'>
            <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
              <ProductList data={popularProducts}/>
            </div>
          </div>
        </div>
      </div>
      
     </div>
    </div>
  )
}

export default Home