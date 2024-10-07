import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Footer from '../Footer';

const API_KEY = '88bb4e24126941138338347e42f05470';

const ViewBlog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title } = useParams(); // Get the title from the URL
    const [article, setArticle] = useState(null);





    // Fetch articles from API
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${import.meta.env.REACT_BLOG_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                const foundArticle = data.articles.find(article => createSlug(article.title) === title);
                setArticle(foundArticle);
            })
            .catch((error) => console.error(error));
    }, [title]);

    // Helper function to create a URL-friendly slug from the article title
    const createSlug = (title) => {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    };

    if (!article) {
        return (
            <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-600 md:px-8">
                <div className=" p-10 text-center rounded-lg">
                    <h2 className="text-5xl font-extrabold text-gray-800 mb-4">No Article Found</h2>
                    <p className="text-gray-400 mb-6">
                        Sorry, the article you're looking for does not exist or has been removed.
                        Please check other articles in the blog.
                    </p>
                    <a
                        href="/"
                        className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition duration-300"
                    >
                        ← Back to Home
                    </a>
                </div>
                

            <Footer />

            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-600 md:px-8">
            {/* Back Button */}
            <a
                href="/blog"
                className=" text-white  p-2 rounded mb-4 block w-fit hover:bg-orange-700 transition duration-300"
            >
                ← Back to Blog
            </a>

            {/* Blog Title */}
            <h1 className="text-2xl font-extrabold text-gray-800 mb-6">{article.title}</h1>

            {/* Blog Image (Full Width) */}
            <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto object-cover rounded-lg mb-6"
            />

            {/* Blog Content */}
            <div className="text-gray-200 text-lg leading-relaxed mb-8">
                <p>{article.content}</p>
            </div>

            {/* Blog Meta Information */}
            <div className="text-gray-400 mb-8">
                <p className="text-lg">Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
                {article.author && <p className="text-lg">Author: {article.author}</p>}
                <p className="text-lg">Source: {article.source.name}</p>
            </div>

            {/* Read More */}
            <a
                href={article.url}
                className="text-orange-600 border p-4 border-gray-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                Original Source
            </a>

            <div className=" p-8 py-20 mt-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-extrabold text-white mb-4">Get In Touch!</h1>
                    <p className="text-lg font-thin text-gray-300 text-center mb-6">
                        If you have any questions or want to discuss a project, feel free to contact me or check my portfolio.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => navigate('/contactme')} // Assuming you have a /contact route
                            className=" text-white px-6 py-2 border dark:border-gray-100 transition duration-300"
                        >
                            Contact Us Now
                        </button>
                        <button
                            onClick={() => navigate('/portfolio')} // Assuming you have a /portfolio route
                            className="b text-white px-6 py-2 border dark:border-gray-100 transition duration-300"
                        >
                            Check Portfolio
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ViewBlog;
