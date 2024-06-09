import React, { useState, useEffect, useRef } from 'react';
import News from './News';
import './NewsApp.css';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${year}-${month}`;
}

function NewsApp() {
    const apiKey = 'c4107a75ef5540e880cd2d2f92e95aeb';
    const [query, setQuery] = useState('earth');
    const [newsList, setNewsList] = useState([]);
    const queryInputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const currentDate = getDate();
            const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                setNewsList(jsonData.articles.filter(newsItem => !["[Removed]"].includes(newsItem.title)));
            } catch (e) {
                console.log(e, "error occurred");
            }
        };

        fetchData();
    }, [query]);

    function handleSubmit(event) {
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        setQuery(queryValue);
    }

    const handleClickTech = () => {
        setQuery("Technology");
    }

    const handleClickSports = () => {
        setQuery("Sports");
    };

    const handleClickBusiness = () => {
        setQuery("Business");
    };

    const handleClickPolitics = () => {
        setQuery("Politics");
    }

    return (
        <div className="news-app">
            <h1 style={{ fontFamily: 'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px' }}>News Daily</h1>
            <div className="news-category">
                <button className="btn" type="button" onClick={handleClickTech}> Technology </button>
                <button className="btn" type="button" onClick={handleClickSports}> Sports </button>
                <button className="btn" type="button" onClick={handleClickBusiness}> Business </button>
                <button className="btn" type="button" onClick={handleClickPolitics}> Politics </button>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="query-input" type="text" placeholder="Search for articles" style={{ fontFamily: 'monospace' }} ref={queryInputRef} />
                <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit" />
            </form>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 32%)', justifyContent: 'space-between', rowGap: '20px' }}>
                {Array.isArray(newsList) && newsList.length > 0 ? (
                    newsList.map(news => <News key={news.url} news={news} />)
                ) : (
                    <p>No news articles found.</p>
                )}
            </div>
        </div>
    );
}

export default NewsApp;
