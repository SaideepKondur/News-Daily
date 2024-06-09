// Categories: Technology , Sports, business, Politics, health, fashion

// // News.js 
// import React from 'react'
// import './News.css'

// function News({news}) {
//   return (
//     <div className="news-card">
//         <img src={news.urlToImage} alt={news.title} />
//         <h2>{news.title}</h2>
//         <p>{news.description}</p>
//         <button className= "btn-read-more" onClick={() => window.open(news.url)}>  Read More</button>
//     </div>
//   )
// }

// export default News






// // News.css 
// .news-card{
//     padding: 20px;
//     border: 2px solid #666;
// }
// img{
//    width: 100%;
//    margin-bottom: 20px;
// } 

// h2{
//    margin-bottom: 20px;
// }

// p{
//    color: #333;
// }

// .btn-read-more{
//    width: 50%;
//    margin-top: 15px;
//    margin-inline: auto;
//    padding-block: 20px;
//    color: white;
//    background-color: black;
// } 






// // NewsApp.js 
// import React, { useState, useEffect, useRef } from 'react'
// import News from './News';
// import './NewsApp.css'

// function NewsApp() {
//     const apiKey = 'c4107a75ef5540e880cd2d2f92e95aeb'

//     const [query, setQuery] = useState('earth');

//     const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-05-08&sortBy=publishedAt&apiKey=${apiKey}`

//     const [newsList, setNewsList] = useState([]);
    

//     const queryInputRef = useRef(null)

//     useEffect(() =>{
//         fetchData();
//     }, [query])

// async function fetchData() {
//     try{
//         const response = await fetch(apiUrl);
//         const jsonData = await response.json();

//         setNewsList(jsonData.articles);
//     } catch(e) {
//         console.log(e, "error occured");
//     }
    
// }

//     function handleSubmit(event){
//         event.preventDefault();
//         const queryValue = queryInputRef.current.value;
//         setQuery(queryValue)
//     }

//   return ( 

//     <div className= "news-app">
//         <h1 style= {{fontFamily:'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px'}}>News Daily</h1>
//         <form onSubmit={handleSubmit}>
//             <input className="query-input" type="text" ref={queryInputRef}/>
//             <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit"/>
             
//         </form>

        
//         {/* gridTemplateColumns: 'repeat(3, 32%)' */}
//         <div style= {{display: 'grid', gridTemplateColumns: 'repeat(2, 48%)', justifyContent: 'space-between', rowGap: '20px'}} >
//         {newsList.map(news => {
//             return <News key={news.url} news={news}/>
//         }) } 
//         </div>


//     </div>
//   )
// }

// export default NewsApp






// // NewsApp.css 
// .news-app{
//     width: 80%;
//     margin-inline: auto;
//     margin-block: 40px;
// }
// .query-input {
//     width: 100%;
//     margin-bottom: 20px;
//     padding: 20px;
//     font-size: 1.2rem;
//     border: 2px solid black;
// }

// .btn-submit {
//     margin-bottom: 20px;
//     padding: 20px 60px
// }






// // App.js 
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// import Counter from "./components/Counter";
// import Fruits from "./components/Fruits";
// import Notes from "./components/Notes";
// import { useState } from "react";
// import UserForm from "./3. Forms and Hooks /UserForm";
// import UseEffectHook from "./3. Forms and Hooks /UseEffectHook";
// import Hooks from "./3. Forms and Hooks /Hooks";
// import NewsApp from "./3. Forms and Hooks /NewsApp";
// function App() {

//   const[countInParent, setCountInParent] = useState(0);
//   function updateCountInParent(count){
//     setCountInParent(count)
//   }
  
//   function uploadData() {
//     console.log("I will start uploading the data now");
//   }

//   return (
//     <div> 
//     {/*<Counter/>*/}
//     {/* <Fruits/> */}
//     {/* <Notes /> */}


//     {/* <p>The value inside Parent: {countInParent}</p>
//     <Child1 onCountUpdate={updateCountInParent}/>  
//   <Child2 countFromParent={countInParent} uploadData={uploadData}/> */}

//     {/* Lecture 19 (3. Forms and Hooks ) */}
//     {/* <UserForm /> */}
//     {/* <UseEffectHook /> */}
//     {/* <Hooks /> */}

//     <NewsApp />



//     </div>

//   );
// }

// export default App;
 



// // index.css  
// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//   }
  
//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }
  











// // newsApp.js part 2
// import React, { useState, useEffect, useRef } from 'react'
// import News from './News';
// import './NewsApp.css'

// function NewsApp() {
//     const apiKey = 'c4107a75ef5540e880cd2d2f92e95aeb'

//     const [query, setQuery] = useState('earth');
    

//     const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-05-08&sortBy=publishedAt&apiKey=${apiKey}`

//     const [newsList, setNewsList] = useState([]);

//     const queryInputRef = useRef(null)

//     useEffect(() =>{
//         fetchData();
//     }, [query])

// async function fetchData() {
//     try{
//         const response = await fetch(apiUrl);
//         const jsonData = await response.json();

//         setNewsList(jsonData.articles);
//     } catch(e) {
//         console.log(e, "error occured");
//     }
    
// }

//     function handleSubmit(event){
//         event.preventDefault();
//         const queryValue = queryInputRef.current.value;
//         setQuery(queryValue)
//     }
    
//     const handleClickTech = () => {
//         setQuery("Technology");

//     }

//     const handleClickSports = () => {
//         setQuery("Sports");

//     } ;

//     const handleClickBusiness = () => {
//         setQuery("Business");

//     } ;

//     const handleClickPolitics = () => {
//         setQuery("Politics");

//     } ;



//   return ( 

//     <div className= "news-app">
//         <h1 style= {{fontFamily:'monospace', fontSize: '3rem', textAlign: 'left', marginBottom: '20px'}}>News Daily</h1>
//         <div className="news-category">
//             <button className="btn" type="button" onClick={handleClickTech}> Technology </button>
//             <button className="btn" type="button" onClick={handleClickSports}> Sports </button>
//             <button className="btn" type="button" onClick={handleClickBusiness}> Business </button>
//             <button className="btn" type="button" onClick={handleClickPolitics}> Politics </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//             <input className="query-input" type="text" ref={queryInputRef}/>
//             <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit"/>
//         </form>

        
//         {/* gridTemplateColumns: 'repeat(2, 48%))' */}
//         <div style= {{display: 'grid', gridTemplateColumns: 'repeat(3, 32%)', justifyContent: 'space-between', rowGap: '20px'}} >
//         {Array.isArray(newsList) && newsList.length > 0 ? (
//             newsList.map(news => <News key={news.url} news={news} />)
//                 ) : (
//                     <p>No news articles found.</p>
//                 )}
        
        
//         {/* {newsList.map(news => {
//             return <News key={news.url} news={news}/>
//         }) }  */}
//         </div>


//     </div>
//   )
// }

// export default NewsApp