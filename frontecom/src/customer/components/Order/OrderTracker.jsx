import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const OrderTracker = ({activeStep}) => {
    
    const steps=[
        "Placed",
        "OrderConfirmed",
        "Shipped",
        "Out Of Delivery",
        "Delivered"

    ]
    
  
    return (

    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=><Step>
                <StepLabel sx={{color:"#9155FD" , fontSize:"44px"}}>
                    {label}
                </StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker