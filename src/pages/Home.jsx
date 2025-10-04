import React, { useEffect, useState } from 'react'
import CarouselBanner from '../Component/carouselBanner'
import fetchData from '../Api/Api';
import HeroSection from '../Component/HeroSection';
import { CustomModal } from '../Component/CustomModal';
import Loader from '../Component/Loader';

const Home = () => {
    const [exercise, setExercise] = useState([]);
    const [errorModal, setErrorModal] = useState(false);
    const [loading, setloading] = useState(false);
    useEffect(() => {

        const exerciseData = async () => {
            setloading(true);
            try {
                const data = await fetchData('bodyparts');
                setExercise(data);
            } catch (error) {
                setErrorModal(true);
                console.log("error", error);
            }
            setloading(false);
        }
        exerciseData();
    }, []);

    function setErrorModaHandler() {
        setErrorModal(false);
    }

    return (
        <div >
            <HeroSection />
            <CarouselBanner exercise={exercise} />
            {errorModal && <CustomModal
                visiblity={errorModal}
                header={'Error!'}
                text={'Something went wrong!'}
                oncloseFun={setErrorModaHandler}
            />}
            {loading && <Loader />}
        </div>
    )
}

export default Home