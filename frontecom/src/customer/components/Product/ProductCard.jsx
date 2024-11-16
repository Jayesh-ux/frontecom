import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
        <div className='h-[17rem]'>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>
        <div className='textPart  text-black p-3'>
          <div>
            <p className='fontbold opacity-60'>{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <div className='flex iems-center space-x-2'>
            <p className='font-semibold'>₹{product.discountedPrice}</p>
            <p className='line-through opacity-50'>{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPersent} % off</p>
          </div>
        </div>
    </div>
  )
}

export default ProductCard