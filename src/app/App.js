import React, { useState, useEffect } from 'react'
import '../App.css';
import Header from '../components/Header';
import Body from '../components/Body';
import { v4 as uuidv4 } from 'uuid'


function App() {
  
  const [popularPostsData, setPopularPostsData] = useState([]) 
  
  useEffect(() => {
    console.log('logged');
    fetch('https://www.reddit.com/r/popular.json')
      .then(res => res.json())
      .then(data => {
        let mappedData = data.data.children.map((result) => {
          return {
            id: uuidv4(),
            title: result.data.title,
            score: result.data.score,
            permalink: result.data.permalink,
            author: result.data.author,
            url: result.data.url,
            subredditNamePrefix: result.data.subreddit_name_prefixed,
            numComments: result.data.num_comments
          }
        })
        setPopularPostsData(mappedData)
      })
  }, [])

console.log(popularPostsData)

  return (
    <div className="App">
     <Header/>
     <Body/>
    </div>
  );
}

export default App;
