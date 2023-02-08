import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, List, Storefront, X } from "phosphor-react";

import { useState } from 'react';
import { useSelector } from 'react-redux'

import ButtonProfile from '../ButtonProfile/ButtonProfile';
import ButtonCart from '../ButtonCart/ButtonCart';

const Header = () => {

  const totalQuantity = useSelector(state=> state.cart.totalQuantity)

  const [ToggleNav, setToggleNav] = useState(false)
  const HandleToggleNav = () => setToggleNav(!ToggleNav);

  const Links =[
    {name:"Home", link:"/Home"},
    {name:"Shop", link:"/Shop"},
    {name:"Cart", link:"/Cart"}, 
  ]

  const [headerSticky, setHeaderSticky] = useState(false)
  const headerRef = useRef(null)
  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        setHeaderSticky(true)
      }else{
        setHeaderSticky(false)
      }
    })
  }
  useEffect(() =>{
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  return (
    <div className={`sticky top-0 left-0 w-full z-50 ${headerSticky ? 'bg-white shadow-sm' : 'bg-white'} `} ref={headerRef}>
      <div className='w-[100%] flex items-center justify-between h-20 px-6 max-w-7xl m-auto'>

        <div className='flex items-center gap-2'>
          <Storefront size={32} />
          <h1 className='font-black'>MultiMart</h1>
        </div>

        <div onClick={()=>HandleToggleNav()} className={`fixed top-0 left-0 z-10 w-screen h-screen bg-gradient-to-b from-transparent via-[#7a7a7a28] to-[#00000061] ${ToggleNav ? 'block' : 'hidden'}`}></div>
        <div className={`'flex w-[100%] z-20 absolute top-20 left-0 md:flex md:relative md:top-0 md:w-auto lg:bg-none md:bg-transparent bg-white md:shadow-none shadow-md ${ToggleNav ? 'visible' : 'hidden'} `}>
        {Links.map((Link)=>(
            <NavLink key={Link.link} end to={Link.link}>
              <div className='flex md:m-3 items-center justify-center text-black w-[100%] md:w-24 md:h-10 h-16 hover:font-bold duration-150'>
                {Link.name}
              </div>
            </NavLink>
            ))}
        </div>

        <div className='flex it gap-5'>

          <div className='cursor-pointer relative p-1'>
            <span className='absolute -top-1 -right-1 bg-black w-4 text-center rounded-full text-[11px] text-white'>2</span>
            <Heart size={24}/>
          </div>

          <div className='cursor-pointer relative'>
            <span className='absolute -top-1 -right-1 bg-black w-4 text-center rounded-full text-[11px] text-white'>
              {totalQuantity}</span>
            <ButtonCart/>
          </div>

          <div className='cursor-pointer relative'>
            <ButtonProfile/>
          </div>
          
          <div onClick={()=>HandleToggleNav()} className='md:hidden visible p-1 rounded cursor-pointer'>
            {ToggleNav 
            ?
            <X size={24}/>
            :
            <List size={24}/>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header