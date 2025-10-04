import React, { useState } from 'react';
import { XIcon } from '../assets/svg';


export const CustomModal = ({ visiblity, header = '', text = '', oncloseFun = () => { } }) => {

    const [isVisible, setVisible] = useState(visiblity);
    if (!isVisible) return null;

    const onClose = () => {
        setVisible(false);
        oncloseFun();
    }
    return (
        <div className="fixed inset-0 bg-opacity-20 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            <div className={`w-full max-w-sm p-6 rounded-xl shadow-2xl border-2 bg-gray-600 border-red-500 transition-transform duration-300 transform scale-100`}>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-red-400">{header}</h2>
                    <button onClick={onClose} className="p-1 rounded-full cursor-pointer hover:opacity-50 transition-colors">
                        <XIcon size={20} className="text-white" />
                    </button>
                </div>

                <p className="text-red-400 mb-6">{text}</p>

                <button
                    onClick={onClose}
                    className={`w-full py-2 cursor-pointer rounded-lg bg-white text-gray-900 font-semibold hover:opacity-50 transition-colors`}
                >
                    Acknowledge
                </button>
            </div>
        </div>
    );
};