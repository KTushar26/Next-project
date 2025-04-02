import React from 'react'

type Props = {}

const SuccessCard = (props: Props) => {
  return (
    <div className=' flex flex-col  font-grotesk justify-center items-center gap-5 '>

        <img src="/icon-complete.svg" alt=""  width={80} />
        <h2 className=' uppercase text-3xl font-semibold '>Thank&nbsp;you!</h2>
        <p className=' text-[#897E91] text-md font-semibold'>We've added your card details</p>

       
    </div>
  )
}

export default SuccessCard