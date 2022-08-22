import React from 'react'
import styles from '../style'
import { john } from '../assets'

const Hero = () => {
  return (
    <section className={`sm:${styles.flexStart} ${styles.flexCenter} sm:flex-row  flex-col-reverse md:space-x-40 sm:space-x-18 sm:px-10`}>
      <div className={`px-10 sm:px-0 flex flex-col items-center sm:items-start`}>
        <h1 className='font-bold text-[32px] leading-[40px] sm:text-[44px] sm:leading-[60px] pt-10 pb-5 darkText'>
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] sm:text-start text-center`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className={`bg-buttonColor text-white w-[210px] h-[50px] rounded-sm my-6`}>
          Download Resume
        </button>        
      </div>

      <div className='flex justify-center items-center'>
        <img src={john} alt="John" className='w-[245px] h-[245px] rounded-full' />
      </div>
    </section>
  )
}

export default Hero