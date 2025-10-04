import React from 'react'
import Carousel from './carousel'

const CarouselBanner = ({ exercise = [] }) => {

    return (<Carousel slides={exercise} autoPlayInterval={4000} />)
}

export default CarouselBanner