import React, { useEffect, useState } from 'react'
import fetchData from '../../Api/Api';
import { capitalizeWords } from '../../misc/capitalizeFun';
import Loader from '../Loader';
import { CustomModal } from '../CustomModal';

const WorkoutRightSection = ({ pageType, selectedExercise }) => {
    const [selectedExerciseData, setselectedExerciseData] = useState([]);
    const [isloader, setLoader] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    useEffect(() => {
        const exerciseData = async () => {
            setLoader(true);
            try {
                const data = await fetchData(`${pageType}/${selectedExercise?.name}/exercises?offset=0&limit=10&includeSecondary=false`);
                setselectedExerciseData(data);
            } catch (error) {
                setErrorModal(true);
                console.log(error);
            }
            setLoader(false);
        }
        exerciseData();
    }, [selectedExercise]);

    function setErrorModaHandler() {
        setErrorModal(false);
    }
    return (
        <main className="flex-grow p-2 md:p-8">
            {selectedExercise && selectedExerciseData?.length > 0 ?
                selectedExerciseData.map((exerciseData, index) => ((
                    <div key={index} id={index} className="bg-gray-800 p-8 my-2 rounded-xl shadow-2xl">
                        <h2 className="text-4xl font-bold text-green-400 mb-6">{capitalizeWords(exerciseData?.name)}</h2>

                        {/* --- GRID SECTION FOR KEY STATS --- */}
                        <div className="grid grid-cols-1 gap-8 mb-8">
                            <div className='' ><img className="w-auto rounded-lg" src={exerciseData?.gifUrl} alt="Exercise image" loading="lazy" /></div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 break-words ">
                                {/* Body Part */}
                                <div className="bg-gray-700 p-4 rounded-lg border-b-4 border-blue-400">
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Body Part</p>
                                    <p className="text-2xl font-extrabold text-white mt-1">{capitalizeWords(exerciseData?.bodyParts?.[0])}</p>
                                </div>

                                {/* Target Muscle */}
                                <div className="bg-gray-700 p-4 rounded-lg border-b-4 border-indigo-400">
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Target Muscle</p>
                                    <p className="text-2xl font-extrabold text-white mt-1">{capitalizeWords(exerciseData?.targetMuscles?.[0])}</p>
                                </div>

                                {/* Equipment */}
                                <div className="bg-gray-700 p-4 rounded-lg border-b-4 border-purple-400">
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Equipment</p>
                                    <p className="text-2xl font-extrabold text-white mt-1">{capitalizeWords(exerciseData?.equipments?.[0])}</p>
                                </div>


                            </div>
                        </div>
                        {/* --- END GRID SECTION --- */}

                        {/* Description */}
                        <div className="border-t border-gray-700 pt-6">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Execution Details</h3>
                            {exerciseData?.instructions?.length > 0 ? (
                                exerciseData.instructions.map((instruction, index) => (
                                    <p key={index} id={index} className="text-gray-300 leading-relaxed">{instruction} </p>
                                ))
                            ) : <></>}
                        </div>

                    </div>
                ))) : (
                    <div className="text-center p-20 text-gray-400">
                        Select an exercise from the index to view its details.
                    </div>
                )}
            {errorModal && <CustomModal
                visiblity={errorModal}
                header={'Error!'}
                text={'Something went wrong!'}
                oncloseFun={setErrorModaHandler}
            />}
            {isloader && <Loader />}
        </main>
    )
}

export default WorkoutRightSection