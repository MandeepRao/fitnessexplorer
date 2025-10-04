import React, { useState } from 'react';
import { DumbbellIcon, LockIcon, MailIcon, UserIcon } from '../assets/svg';
import UserInputField from '../Component/UserInputField';
import { useNavigate } from 'react-router-dom';
import Loader from '../Component/Loader';
import { useContextData } from '../ContextProvider/ContextProvider';

const User = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const { user, setUserDetail } = useContextData();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
        setMessage('');
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Full Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            setMessage('');
            setLoading(true);
            setTimeout(() => {
                setIsSubmitting(false);
                // localStorage.setItem('userName', formData.name);

                setUserDetail(formData.name);
                setDisabled(true);
                setMessage(`Success! Account created. Welcome ${formData.name}!`);
                setLoading(false);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                });
            }, 2000);
        }
    };

    return (
        <div className="min-h-3/4 flex items-center justify-center p-4 py-12 bg-gradient-to-br from-indigo-900 to-blue-950">
            <div className="w-full max-w-md bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700">

                <div className="text-center mb-8">
                    <DumbbellIcon size={50} className="text-green-400 mx-auto" />
                    <h1 className="text-4xl font-extrabold text-white mt-4">Create Account</h1>
                    <p className="text-gray-400 mt-2">Start your fitness journey today.</p>
                </div>

                {message && (
                    <div className="break-word p-3 mb-4 rounded-lg bg-green-700 text-white text-center font-medium">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                    <UserInputField
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        icon={UserIcon}
                        error={errors.name}
                        handleChange={handleChange}
                        formData={formData}
                        disabled={isDisabled}
                    />

                    <UserInputField
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        icon={MailIcon}
                        error={errors.email}
                        handleChange={handleChange}
                        formData={formData}
                        disabled={isDisabled}
                    />

                    <UserInputField
                        name="password"
                        type="password"
                        placeholder="Password (min 6 chars)"
                        icon={LockIcon}
                        error={errors.password}
                        handleChange={handleChange}
                        formData={formData}
                        disabled={isDisabled}
                    />


                    <button
                        type="submit"
                        disabled={isSubmitting || isDisabled}
                        className={`
              w-full py-3 mt-6 rounded-xl font-bold text-lg transition-all duration-200 
              ${isSubmitting
                                ? 'bg-green-700 cursor-not-allowed text-gray-300'
                                : 'bg-green-500 hover:bg-green-600 text-gray-900 shadow-lg shadow-green-500/50'}
            `}
                    >
                        {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                {/* <p className="text-center text-gray-400 mt-6 text-sm">
                    Already have an account? <a href="#" className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-150">Log in here</a>
                </p> */}
            </div>
            {loading && <Loader />}
        </div>
    );
};

export default User;