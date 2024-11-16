import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard/>

        </div>
        <div>
      <div className='lg:grid grid-cols-3  relative'>
        {/* Left side - Cart Items */}
        <div className='col-span-2'>
          {[1,1,1,1].map((item)=><CartItems />)}
        </div>

        {/* Right side */}
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 text-black'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>
              Price Details
            </p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>Rs4697</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>-Rs3419</span>
              </div>
              <div className='flex justify-between pt-3'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3  font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>Rs1278</span>
              </div>

            </div>
            <Button
              variant="contained"
              className='w-full'
              sx={{
                px: '2.5rem',
                py: '.7rem',
                bgcolor: '#9155fd',
                '&:hover': {
                  bgcolor: '#55fa58' // Replace with your desired hover color
                }
              }}
            >
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary