import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { Suspense , lazy } from 'react';

const Home = lazy(() => import('../pages/Home'))
const Cart = lazy(() => import('../pages/Cart'))
const Checkout = lazy(() => import('../pages/Checkout')) 
const Login = lazy(()=> import('../pages/Login')) 
const ProductDetails = lazy(()=> import('../pages/ProductDetails'))
const Shop = lazy(()=> import('../pages/Shop')) 
const Signup = lazy(()=> import('../pages/signup')) 

const Routers = () => {
  return (
    
      <Suspense fallback={
        <div className='fixed h-[100vh] w-[100vw] bg-slate-200 flex items-center justify-center'>
        <div className='w-8 h-8 rounded-full border-dashed border-2 border-sky-500 animate-spin'>
            </div>
        </div>
      }>
        <Routes>

          <Route path='/' element={<Navigate to='home'/> }/>

          <Route path='home' element={<Home/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='Checkout' element={<Checkout/>}/>
        
          <Route path='Shop' element={<Shop/>}/>
          <Route path='Shop/:id' element={<ProductDetails/>}/>

          <Route path='Signup' element={<Signup/>}/>
          <Route path='Login' element={<Login/>}/>

        </Routes>
      </Suspense>
 
  )
}

export default Routers