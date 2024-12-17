import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-evenly p-4 lg:py-14 px-auto gap-8 bg-[#ECEAE3]'>
        <div className='justify-start text-left'>
            <img src="https://i.ibb.co.com/59KfMD2/1.png" alt="" />
            <h2 className='font-rancho text-3xl font-normal mt-4'>Awesome Aroma</h2>
            <p className='font-raleway mt-1'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='justify-start text-left'>
            <img src="https://i.ibb.co.com/wSgrvDN/2.png" alt="" />
            <h2 className='font-rancho text-3xl font-normal mt-4'>High Quality</h2>
            <p className='font-raleway mt-1'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='justify-start text-left'>
            <img src="https://i.ibb.co.com/0ZDb8sR/3.png" alt="" />
            <h2 className='font-rancho text-3xl font-normal mt-4'>Pure Grades</h2>
            <p className='font-raleway mt-1'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='justify-start text-left'>
            <img src="https://i.ibb.co.com/Yp5F2bD/4.png" alt="" />
            <h2 className='font-rancho text-3xl font-normal mt-4'>Proper Roasting</h2>
            <p className='font-raleway mt-1'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
    </div>
  )
}

export default About