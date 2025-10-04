import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';
import { capitalizeWords, spaceTrimFun } from '../misc/capitalizeFun';
import { LeftArrowIcon, RightArrowIcon } from '../svg';

const VISIBLE_SLIDES = 3;
const TRANSITION_MS = 700;

const Carousel = ({ slides = [], autoPlayInterval = 2000 }) => {
    const navigate = useNavigate();
    const { carausalExercise, setCarausalExerciseFun } = useContextData();
    function SearchExerciseHandler(param) {
        setCarausalExerciseFun(param);
        navigate('/workouts');
    }

    const realSlideCount = slides.length;

    const totalPages = Math.max(1, realSlideCount - VISIBLE_SLIDES + 1); // 3
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_MS);

    const nextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === totalPages - 1) {
                return totalPages;
            }
            return prevIndex + 1;
        });
    }, [totalPages]);
    const prevSlide = useCallback(() => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                return -1;
            }
            return prevIndex - 1;
        });
    }, []);

    useEffect(() => {
        if (activeIndex === totalPages && transitionDuration === TRANSITION_MS) {
            setTransitionDuration(0);
            setActiveIndex(0);

        } else if (activeIndex === -1 && transitionDuration === TRANSITION_MS) {
            setTransitionDuration(0);
            setActiveIndex(totalPages - 1);
        }
    }, [activeIndex, totalPages, transitionDuration]);

    useEffect(() => {
        if (transitionDuration === 0) {
            const timeout = setTimeout(() => {
                setTransitionDuration(TRANSITION_MS);
            }, 10);
            return () => clearTimeout(timeout);
        }
    }, [transitionDuration]);

    useEffect(() => {
        if (realSlideCount <= VISIBLE_SLIDES) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [nextSlide, autoPlayInterval, realSlideCount, VISIBLE_SLIDES]);

    const translationPercentage = activeIndex * (100 / VISIBLE_SLIDES);

    return (
        <div className=" my-10 relative w-full overflow-hidden shadow-2xl rounded-xl py-2 px-1">
            <div
                className="flex ease-in-out cursor-pointer"
                style={{
                    transform: `translateX(-${translationPercentage}%)`,
                    transitionDuration: `${transitionDuration}ms`
                }}>

                {slides.map((slide, index) => (
                    <div
                        onClick={() => SearchExerciseHandler(slide)}
                        key={index}
                        className={`hover:scale-110 flex-shrink-0 w-1/3 px-3 h-40 sm:h-48 md:h-[200px] lg:h-[250px] relative transition-opacity duration-500`}
                    >
                        <div
                            className="h-full w-full relative rounded-lg overflow-hidden"
                            style={{
                                backgroundImage: `url(./assets/${spaceTrimFun(slide?.name)}.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#be9099ff',
                            }}
                        >
                            <div className={`absolute inset-0 bg-black/50 flex flex-col justify-end items-center p-3 md:p-6 text-white`}>
                                <h3 className="text-sm md:text-2xl font-bold mb-1 drop-shadow-lg font-inter">
                                    {capitalizeWords(slide?.name)}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center p-2 pl-4 z-10">
                <button
                    onClick={prevSlide}
                    className={`p-3 bg-white/30 text-white rounded-full transition-all backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-white/50`}
                    aria-label="Previous page"
                >
                    <LeftArrowIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center p-2 pr-4 z-10">
                <button
                    onClick={nextSlide}
                    className={`p-3 bg-white/30 text-white rounded-full transition-all backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-white/50`}
                    aria-label="Next page"
                >
                    <RightArrowIcon className="w-6 h-6" />
                </button>
            </div>

            {totalPages > 1 && (
                <div className="absolute md:bottom-5 bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-all duration-300 ${(activeIndex % totalPages === index) ?
                                'bg-white scale-125 shadow-lg' :
                                'bg-white/50 hover:bg-white'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;

