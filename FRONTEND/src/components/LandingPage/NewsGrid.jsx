// NewsGrid.jsx
import React, { useEffect, useState } from 'react';

async function fetchCricketNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/everything?q=cricket&from=2024-10-10&sortBy=publishedAt&apiKey=f9d9544e52c64da1b0c63fbf00cc1521');
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

function NewsGrid() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchCricketNews().then(setArticles);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Latest Cricket News</h2>
            {/* Scrollable box for the news grid */}
            <div className="overflow-y-auto h-[calc(100vh-5rem)] border rounded-lg shadow-lg p-4 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white shadow-md rounded p-4">
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt="News" className="w-full h-40 object-cover mb-2 rounded" />
                            )}
                            <h3 className="font-semibold text-lg">{article.title}</h3>
                            <p className="text-gray-600 mb-2">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsGrid;
