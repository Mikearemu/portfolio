// components/pages/NotFoundPage.js
import React from 'react';
import Footer from '../Footer';

const NotFoundPage = () => {
    return (
        <>
            <div className="text-center py-10 text-gray-800  ">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-3xl mt-4">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="mt-10 text-orange-500 hover:underline">
                    Go back to Home
                </a>

            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;
