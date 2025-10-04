import { useEffect } from "react";
import WorkoutRightSection from "./WorkoutRightSection";
import { capitalizeWords } from "../../misc/capitalizeFun";

export const ExerciseSubCard = ({ pageType, exercise, isSelected, handleExerciseClick, selectedExercise, id }) => {

    return (
        <>
            <div
                id={id}
                onClick={() => handleExerciseClick(exercise)}
                className={`
        flex justify-between items-center p-3 rounded-lg border-l-4 
        cursor-pointer transition-colors duration-150 
        ${isSelected
                        ? 'bg-green-600 border-green-600 shadow-md text-white'
                        : 'bg-gray-800 border-gray-800 hover:bg-gray-700 text-gray-200'}
      `}
            >
                <div className="flex flex-col">
                    <span className="font-semibold">{capitalizeWords(exercise.name)}</span>
                    <span className="text-xs text-gray-400">{exercise.target}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                    height={24} viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className={`${isSelected ? 'text-white' : 'text-gray-400'}`}>
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </div>
            <div className='block md:hidden'>
                {isSelected && <WorkoutRightSection pageType={pageType} selectedExercise={selectedExercise} />}
            </div>
        </>
    )
};