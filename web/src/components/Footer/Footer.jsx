import { Copyright, FacebookLogo, GoogleLogo, InstagramLogo, Storefront, TwitterLogo } from 'phosphor-react'
import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className='bg-slate-900 shadow-sm'>
    <div className='max-w-7xl m-auto flex flex-1 justify-between items-start p-3 flex-wrap gap-4 text-slate-400'>

    <div className='w-full max-w-xs '>
      <div className='flex items-center gap-2 text-white'>
          <Storefront size={32} />
          <h1 className='font-black '>MultiMart</h1>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Nisi eos commodi tempora, eligendi quam distinctio tempore 
       laboriosam nesciunt rem eum aliquid fugit quibusdam labore
       est aliquam, nemo atque minus sint?</p>
    </div>

    <div className=''>
      <div className='flex items-center gap-2 mb-2 font-bold text-white'>
        Social
      </div>

      <div className='flex items-center gap-2'>
      Facebook
      <FacebookLogo/>
      </div>

      <div className='flex items-center gap-2'>
      Instagram
      <InstagramLogo/>
      </div>

      <div className='flex items-center gap-2'>
      E-mail
      <GoogleLogo/>
      </div>

      <div className='flex items-center gap-2'>
        Twiter<TwitterLogo/>
      </div>
    </div>

    <div>
      <div className='flex items-center gap-2 mb-2 font-bold text-white'>
        Need Help
      </div>

      <div className='flex items-center gap-2'>
        Pricing
      </div>

      <div className='flex items-center gap-2'>
        Sales
      </div>

      <div className='flex items-center gap-2'>
        Customer Service
      </div>

      <div className='flex items-center gap-2'>
        Cupons
      </div>
    </div>

      <div>
        <div className='flex items-center gap-2 mb-2 font-bold text-white'>
          Adress
        </div>

        <div className='flex items-center gap-2'>
          127,Westwood Lane
        </div>

        <div className='flex items-center gap-2'>
          DA15 9PS, SIDcup
        </div>

        <div className='flex items-center gap-2'>
          London, UK
        </div>
      </div>
    </div>

    <div className='flex w-full justify-center items-center gap-2 text-white mt-3'>
      Todos os direitos reservados<Copyright/><p>{year}</p>
    </div>
      
    </div>
  )
}

export default Footer