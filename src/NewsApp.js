import React, { useState, useEffect, useRef } from 'react'
import News from './News';
import './NewsApp.css'

function NewsApp() {
    const apiKey = 'c4107a75ef5540e880cd2d2f92e95aeb'

    const [query, setQuery] = useState('earth');

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        // const date = today.getDate();
        return `${year}-${month}`;
    }
      
    
    const [currentDate, setCurrentDate] = useState(getDate());


    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`

    const [newsList, setNewsList] = useState([]);

    const queryInputRef = useRef(null)

    useEffect(() =>{
        fetchData();
    }, [query])

async function fetchData() {
    try{
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        // Filtering out the removed articles to make sure they are not visible.
        setNewsList(jsonData.articles.filter(newsItem => !["[Removed]"].includes(newsItem.title)));
        // setNewsList(jsonData.articles);
    } catch(e) {
        console.log(e, "error occured");
    }
    
}

    function handleSubmit(event){
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        setQuery(queryValue)
    }
    
    const handleClickTech = () => {
        setQuery("Technology");

    }

    const handleClickSports = () => {
        setQuery("Sports");

    } ;

    const handleClickBusiness = () => {
        setQuery("Business");

    } ;

    const handleClickPolitics = () => {
        setQuery("Politics");

    } ;



  return ( 

    <div className= "news-app">
        <h1>{console.log(currentDate)}</h1>
        <h1 style= {{fontFamily:'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px'}}>News Daily</h1>
        <div className="news-category">
            <button className="btn" type="button" onClick={handleClickTech}> Technology </button>
            <button className="btn" type="button" onClick={handleClickSports}> Sports </button>
            <button className="btn" type="button" onClick={handleClickBusiness}> Business </button>
            <button className="btn" type="button" onClick={handleClickPolitics}> Politics </button>
        </div>
        <form onSubmit={handleSubmit}>
            <input className="query-input" type="text" placeholder="Search for articles" style={{fontFamily:'monospace' }} ref={queryInputRef}/>
            <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit"/>
        </form>

        
        {/* gridTemplateColumns: 'repeat(2, 48%))' */}
        <div style= {{display: 'grid', gridTemplateColumns: 'repeat(3, 32%)', justifyContent: 'space-between', rowGap: '20px'}} >
        {Array.isArray(newsList) && newsList.length > 0 ? (
            newsList.map(news => <News key={news.url} news={news} />)
                ) : (
                    <p>No news articles found.</p>
                )}
        
        {/* {newsList.map(news => {
            return <News key={news.url} news={news}/>
        }) }  */}
        </div>


    </div>
  )
}

export default NewsApp