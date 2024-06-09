import React from 'react'
import './News.css'
import Date from './Date.js'



function News({news}) {
  return (
    <div className="news-card">
        <img src={news.urlToImage} alt={news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <h4><Date datetime = {news.publishedAt} /></h4>
        <button className= "btn-read-more" onClick={() => window.open(news.url)}>  Read More</button>
    </div>
  )
}

export default News