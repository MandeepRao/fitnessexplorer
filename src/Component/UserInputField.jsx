import React from 'react'

const UserInputField = ({ name, type, placeholder, icon: Icon, error, handleChange, formData, disabled }) => (
    <div className="mb-4">
        <div className={`flex items-center bg-gray-700 p-3 rounded-xl border-2 transition-all duration-200 ${error ? 'border-red-500' : 'border-gray-700 focus-within:border-green-500'}`}>
            <Icon className="text-gray-400 mr-3 flex-shrink-0" />
            <input
                disabled={disabled}
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full bg-gray text-white placeholder-gray-400 focus:outline-none"
            />
        </div>
        {error && <p className="text-red-400 text-sm mt-1 ml-1">{error}</p>}
    </div>
);

export default UserInputField