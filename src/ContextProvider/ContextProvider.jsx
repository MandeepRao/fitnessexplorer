
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [carausalExercise, setCarausalExercise] = useState('');
    const setUserDetail = (userData) => {
        setUser(userData);
    };
    const setCarausalExerciseFun = (selected) => {
        setCarausalExercise(selected);
    }

    return (
        <AuthContext.Provider value={{ carausalExercise, setCarausalExerciseFun, user, setUserDetail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useContextData = () => {
    return useContext(AuthContext);
};