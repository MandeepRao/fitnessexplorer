import React, { useEffect, useRef } from 'react'
import { ExerciseSubCard } from './ExerciseSubCard'

const WorkoutLeftSection = ({ pageType, exercises, selectedExercise, searchTerm, setSearchTerm, loading, filteredExercises, handleExerciseClick }) => {
    const scrollableRef = useRef(null);
    return (
        <aside className=" w-full md:w-60 flex-shrink-0 bg-gray-900 
                border-r border-gray-800 p-4 flex flex-col">
            <h2 className="text-2xl font-bold mb-4 flex items-start text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" className='text-green-400 pr-1 pt-1 items-start'>
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3.01" y1="6" y2="6" />
                    <line x1="3" x2="3.01" y1="12" y2="12" />
                    <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
                {pageType.charAt(0).toUpperCase() + pageType.slice(1)} ({exercises.length})
            </h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Filter by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 border-none"
                />
            </div>
            <div className="flex-grow overflow-y-auto space-y-2 pr-2">
                {loading ? (
                    <p className="text-gray-400 text-center">Loading...</p>
                ) : filteredExercises.length > 0 ? (
                    filteredExercises.map((exercise, index) => (
                        <ExerciseSubCard
                            pageType={pageType}
                            exercise={exercise}
                            isSelected={selectedExercise && selectedExercise?.name === exercise?.name}
                            handleExerciseClick={handleExerciseClick}
                            selectedExercise={selectedExercise}
                            id={index}
                            key={index}
                            ref={exercise?.name === selectedExercise?.name ? scrollableRef : null}
                        />
                    ))
                ) : (
                    <p className="text-gray-400 text-center">No matching exercises found.</p>
                )}
            </div>
        </aside>
    )
}

export default WorkoutLeftSection