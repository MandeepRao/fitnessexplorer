import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    function scrollFunction() {
        window.screenTop(0, 0);
    }
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="flex flex-col items-start">
                        <Link to="/" onClick={scrollFunction} className="text-3xl font-bold text-white mb-2">
                            Fitness
                        </Link>
                        <p className="text-sm">
                            Your journey to a stronger you.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" onClick={scrollFunction} className="hover:text-green-500 transition-colors duration-200">Home</Link></li>
                            <li><Link to="/workouts" onClick={scrollFunction} className="hover:text-green-500 transition-colors duration-200">Workouts</Link></li>
                            <li><Link to="/equipment" onClick={scrollFunction} className="hover:text-green-500 transition-colors duration-200">Equipments</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" onClick={scrollFunction} className="hover:text-green-500 transition-colors duration-200">Privacy Policy</Link></li>
                            <li><Link to="/" onClick={scrollFunction} className="hover:text-green-500 transition-colors duration-200">Terms of Service</Link></li>
                            <li><Link to="/" onClick={scrollFunction} className="hover:text-green-500 transition-colors duration-200">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link to="/" onClick={scrollFunction} className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.58.013 4.85.071 1.17.054 1.895.23 2.51.479.62.24 1.13.567 1.625 1.062s.822 1.005 1.062 1.62c.248.614.425 1.34.479 2.51.058 1.27.071 1.646.071 4.85s-.013 3.58-.071 4.85c-.054 1.17-.23 1.895-.479 2.51-.24.62-.567 1.13-1.062 1.625s-1.005.822-1.62 1.062c-.614.248-1.34.425-2.51.479-1.27.058-1.646.071-4.85.071s-3.58-.013-4.85-.071c-1.17-.054-1.895-.23-2.51-.479-.62-.24-1.13-.567-1.625-1.062s-.822-1.005-1.062-1.62c-.248-.614-.425-1.34-.479-2.51-.058-1.27-.071-1.646-.071-4.85s.013-3.58.071-4.85c.054-1.17.23-1.895.479-2.51.24-.62.567-1.13 1.062-1.625s1.005-.822 1.62-1.062c.614-.248 1.34-.425 2.51-.479 1.27-.058 1.646-.071 4.85-.071zM12 4c-3.14 0-3.535.012-4.767.07c-.961.044-1.52.22-1.99.418-.466.198-.82.464-1.12.766-.3.3-.568.654-.766 1.12-.198.47-.374 1.029-.418 1.99-.058 1.232-.07 1.628-.07 4.767s.012 3.535.07 4.767c.044.961.22 1.52.418 1.99.198.466.464.82.766 1.12.3.3.654.568 1.12.766.47.198 1.029.374 1.99.418 1.232.058 1.628.07 4.767.07s3.535-.012 4.767-.07c.961-.044 1.52-.22 1.99-.418.198-.466.464-.82.766-1.12.3-.3.568-.654.766-1.12.198-.47.374-1.029.418-1.99.058-1.232.07-1.628.07-4.767s-.012-3.535-.07-4.767c-.044-.961-.22-1.52-.418-1.99-.198-.466-.464-.82-.766-1.12-.3-.3-.654-.568-1.12-.766-.47-.198-1.029-.374-1.99-.418-1.232-.058-1.628-.07-4.767-.07zM12 9c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm0 5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Fitness. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
