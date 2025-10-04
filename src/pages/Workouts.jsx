import React, { useEffect, useRef, useState } from 'react'
import fetchData from '../Api/Api';
import { Link } from 'react-router-dom';
import WorkoutLeftSection from '../Component/WorkoutSection/WorkoutLeftSection';
import WorkoutRightSection from '../Component/WorkoutSection/WorkoutRightSection';
import Loader from '../Component/Loader';
import { useContextData } from '../ContextProvider/ContextProvider';
import { CustomModal } from '../Component/CustomModal';

const Workouts = ({ pageType }) => {
    const [workouts, setWorkouts] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const { carausalExercise } = useContextData();
    const [selectedExercise, setSelectedExercise] = useState(carausalExercise);
    const [searchTerm, setSearchTerm] = useState('');
    const [errorModal, setErrorModal] = useState(false);
    const scrollableRef = useRef(null);
    useEffect(() => {
        const workoutsData = async () => {
            try {
                const data = await fetchData(`${pageType}`);
                setWorkouts(data);

            } catch (error) {
                setErrorModal(true);
                console.log(error);
            }
        }
        workoutsData();
    }, []);

    function setErrorModaHandler() {
        setErrorModal(false);
    }
    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0;
        }
    }, [selectedExercise]);


    useEffect(() => {
        setTimeout(() => {
            setExercises(workouts);
            if (workouts.length > 0 && selectedExercise != '') {
                setSelectedExercise(workouts[0]);
            }
            setLoading(false);
        }, 1000);
    }, [workouts]);

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
    };

    const filteredExercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-gray-950 text-white shadow-lg">
            <div className="flex h-[calc(100vh-20px)] overflow-hidden shadow-lg">
                <WorkoutLeftSection
                    pageType={pageType}
                    exercises={exercises}
                    selectedExercise={selectedExercise}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    loading={loading}
                    filteredExercises={filteredExercises}
                    handleExerciseClick={handleExerciseClick} />
                <div ref={scrollableRef} className='hidden md:block overflow-y-auto h-full w-full m-auto'>
                    <WorkoutRightSection pageType={pageType} selectedExercise={selectedExercise} />
                </div>
            </div>
            {errorModal && <CustomModal
                visiblity={errorModal}
                header={'Error!'}
                text={'Something went wrong!'}
                oncloseFun={setErrorModaHandler}
            />}
            {loading && <Loader />}
        </div >
    );
};


export default Workouts