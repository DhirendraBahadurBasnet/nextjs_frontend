import React from 'react'

function Testimonial() {
  return (
    <div>
      <div className='container py-16 grid-cols-2'>
        <h2 className='font-medium text-2xl pb-4'>Testimonials</h2>
       <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
            <div className='text-center flex flex-col items-center gap-1'> 
            <img className='rounded-full inline-block' src="/user.jpg" alt="profile" />
            <h2 className='text-gray-500 font-black text-[20px]'>Elsa Doc</h2>
            <p>CEO & Founder Invision</p>
            <img className='inline-block py-2' src="/quotes.svg" width={30} height={30} alt="quotes" />
            <p className='max-w-[200px] text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </div>
        <div className='bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
            <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                <button className='bg-blakish text-white p-2 rounded-md'>25% DISCOUNT</button>
                <h2 className='font-extrabold text-2xl text-[#272727]'>Summer Collection</h2>
                <p className='text-gray-500 text-[20px]'>Starting @ $25 Shop Now</p>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Testimonial
