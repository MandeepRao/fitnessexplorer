import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className=' shadow-2xl  flex flex-col md:flex-row items-center justify-between px-8 py-6  bg-gray-900 text-white' >
            <div className='md:w-1/2 text-center md:text-left text-white bg-gray-900 p-8 md:p-16 lg:p-24' >
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4'>Train Smarter, Not Harder</h1>
                <h2 className='text-lg md:text-xl font-medium text-gray-400 max-w-2xl mx-auto' >Discover workouts tailored to your goals.</h2>
                <Link to='/workouts'
                    className='inline-block px-8 py-3 my-6 text-lg 
                font-bold text-white bg-green-500 rounded-full shadow-lg 
                transform transition-transform duration-300 hover:scale-105 
                hover:bg-green-600 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-green-500'>
                    Explore Exercises
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center items-center relative 
              h-full lg:h-[300px] 
              min-h-[120px] max-h-[400px] px-10">
                <img src="src/assets/banner.gif" alt="Workout animation" loading="lazy" className="w-full h-full object-cover rounded-lg shadow-xl" />
            </div>

        </div>
    )
}

export default HeroSection