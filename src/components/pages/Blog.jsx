import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import news from '../../assets/newx.webp'


const Blog = () => {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

   
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
      
        fetch(`https://api.thenewsapi.com/v1/news/all?api_token=Sb7Rxn0aY8Uf0eNRyn627AxeSuqdDbhoU7aNTfcB&language=en&limit=3`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                return response.json();
            })
            .then((data) => {
                if (data.articles && data.articles.length > 0) {
                    setArticles(data.articles);
                    setErrorMessage(null); // Clear any previous error message
                } else {
                    setErrorMessage('No articles found');
                }
            })
            .catch((error) => {
                setErrorMessage('Unable to fetch news articles. Please try again later.');
                console.error(error);
            });
    }, []);


    // Helper function to truncate text
    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        }
        return text;
    };

    // Helper function to create a URL-friendly slug from the article title
    const createSlug = (title) => {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    };

    return (
        <section className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-5xl">Latest Blog Posts</h1>
                    <p className="text-gray-800">Blogs that are loved by the community. Updated every hour.</p>
                    
                </div>
                {errorMessage ? 
                <p className='text-4xl text-center text-gray-800 my-10'>{errorMessage}</p>
             : (
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <li className="w-full mx-auto group sm:max-w-sm" key={index}>
                            <a
                                href={`/viewBlog/${createSlug(article.title)}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default link behavior
                                    navigate(`/viewBlog/${createSlug(article.title)}`, { state: { article } });
                                }}
                                className="cursor-pointer"
                            >
                                <img
                                    src={article.image_url ? article.image_url : news} 
                                    alt={article.title}
                                    className="w-full h-48 object-cover "
                                />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-orange-600 text-sm">
                                        {new Date(article.published_at).toLocaleDateString()}
                                    </span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-orange-600 font-semibold">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm duration-150 group-hover:text-gray-800">
                                        {truncateText(article.description, 100)} {/* Truncate to 100 characters */}
                                    </p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
            </div>

            <Footer />
        </section>
    );
};

export default Blog;
