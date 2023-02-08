import { Heart } from 'phosphor-react';
import React, { useState } from 'react';

function ButtonHeart() {
  const [toggleHeart, setToggleHeart] = useState(false)
  const HandleToggleHeart = () => setToggleHeart(!toggleHeart);

  return (
    <div>
        {toggleHeart
            ?
            <Heart onClick={()=>HandleToggleHeart()} className='w-7 h-7 bg-black text-clip cursor-pointer rounded-full p-1 text-white'/>
            :
            <Heart onClick={()=>HandleToggleHeart()} className='w-7 h-7 bg-gray-300 text-white cursor-pointer rounded-full p-1'/>
        } 
    </div>
  )

}

export default ButtonHeart