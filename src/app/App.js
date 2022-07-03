import React, { useState } from 'react'
import '../App.css';
import Header from '../components/Header';
import Body from '../components/Body';
import { v4 as uuidv4 } from 'uuid'
import { useGetRedditFeedDataQuery } from './services/redditFeedData';
import jsonata from 'jsonata'  

function App() {
  
  const { data, error, isLoading, isSuccess, isError } = useGetRedditFeedDataQuery();
  const [ orderByHot, setOrderByHot ] = useState(false);
  const [ orderByNew, setOrderByNew ] = useState(false);
  const [ orderByTop, setOrderByTop ] = useState(false);

  function redditFeedDataConfirm(data) {
    let imageConfirm = jsonata('data.preview.images[0].resolutions') 
    let popularPostsData = data.data.children.map((result) => {
      let resolutions = imageConfirm.evaluate(result)
      let output = {
        id: uuidv4(),
        title: result.data.title,
        score: nFormatter(result.data.score, 1),
        rawScore: result.data.score,
        permalink: result.data.permalink,
        author: result.data.author,
        url: result.data.url,
        ups: result.data.ups,
        subredditNamePrefix: result.data.subreddit_name_prefixed,
        numComments: nFormatter(result.data.num_comments, 1),
        // thumbnail: result.data.thumbnail,
        created: toTimeCreated(result.data.created),
      }
      if (resolutions) {
        output.preview = htmlDecode(resolutions[resolutions.length - 1].url)
        output.thumbnail = htmlDecode(resolutions[0].url)
      }
      return output;
    })
    return popularPostsData
  }

  function newTrendingDataConfirm(data) {
    let imageConfirm = jsonata('data.preview.images[0].resolutions')
    let sortedData = [...data.data.children].sort((a, b) => {
      return a.data.created - b.data.created
    })
    let reverseSortedData = sortedData.reverse()
    let popularPostsData = reverseSortedData.map((result) => {
      let resolutions = imageConfirm.evaluate(result)
      let output = {
        id: uuidv4(),
        title: result.data.title,
        score: nFormatter(result.data.score, 1),
        rawScore: result.data.score,
        permalink: result.data.permalink,
        author: result.data.author,
        url: result.data.url,
        ups: result.data.ups,
        subredditNamePrefix: result.data.subreddit_name_prefixed,
        numComments: nFormatter(result.data.num_comments, 1),
        // thumbnail: result.data.thumbnail,
        created: toTimeCreated(result.data.created)
      }
      if (resolutions) {
        output.preview = htmlDecode(resolutions[resolutions.length - 1].url)
        output.thumbnail = htmlDecode(resolutions[0].url)
      }
      return output
    })
    return popularPostsData
  }

  function topTrendingDataConfirm(data) {
    let imageConfirm = jsonata('data.preview.images[0].resolutions')
    let sortedData = [...data.data.children].sort((a, b) => {
      return b.data.score - a.data.score
    })
    let popularPostsData = sortedData.map((result) => {
      let resolutions = imageConfirm.evaluate(result)
      let output = {
        id: uuidv4(),
        title: result.data.title,
        score: nFormatter(result.data.score, 1),
        rawScore: result.data.score,
        permalink: result.data.permalink,
        author: result.data.author,
        url: result.data.url,
        ups: result.data.ups,
        subredditNamePrefix: result.data.subreddit_name_prefixed,
        numComments: nFormatter(result.data.num_comments, 1),
        // thumbnail: result.data.thumbnail,
        created: toTimeCreated(result.data.created)
      }
      if (resolutions) {
        output.preview = htmlDecode(resolutions[resolutions.length - 1].url)
        output.thumbnail = htmlDecode(resolutions[0].url)
      }
      return output
    })
    return popularPostsData
  }

  function hotTrendingDataConfirm(data) {
    let imageConfirm = jsonata('data.preview.images[0].resolutions')
    let sortedData = [...data.data.children].sort((a, b) => {
      return (b.data.ups / b.data.created) - (a.data.ups / a.data.created)
    })
    let popularPostsData = sortedData.map((result) => {
      let resolutions = imageConfirm.evaluate(result)
      let output = {
        id: uuidv4(),
        title: result.data.title,
        score: nFormatter(result.data.score, 1),
        rawScore: result.data.score,
        permalink: result.data.permalink,
        author: result.data.author,
        url: result.data.url,
        ups: result.data.ups,
        subredditNamePrefix: result.data.subreddit_name_prefixed,
        numComments: nFormatter(result.data.num_comments, 1),
        // thumbnail: result.data.thumbnail,
        created: toTimeCreated(result.data.created),
      }
      if (resolutions) {
        output.preview = htmlDecode(resolutions[resolutions.length - 1].url)
        output.thumbnail = htmlDecode(resolutions[0].url)
      }
      return output
    })
    return popularPostsData
  }

  function toggleHotButton() {
    console.log('Hot button working')
    if (orderByHot) {
      setOrderByHot(false);
    } else {
      setOrderByHot(true);
      setOrderByNew(false);
      setOrderByTop(false);
    }
  }

  function toggleNewButton() {
    console.log('New button working')
    if(orderByNew) {
      setOrderByNew(false);
    } else {
      setOrderByNew(true);
      setOrderByHot(false);
      setOrderByTop(false);
    }
  }

  function toggleTopButton() {
    console.log('Top button working')
    if (orderByTop) {
      setOrderByTop(false);
    } else {
      setOrderByTop(true);
      setOrderByNew(false);
      setOrderByHot(false);
    }
  }

  function toTimeCreated(input) {
    let currentDate = Date.now()
    return Math.floor(((currentDate / 1000) - input)  / 60 / 60);
  }
  
  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }  

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }


  return (
    <div className="App">
     <Header/>
     {isLoading && 'Loading...'}
     {isError && error.message}
     {isSuccess && data && orderByHot === false && orderByNew === false && orderByTop === false && <Body toggleHotButton={toggleHotButton} 
                                                                                                         popularPostsData={redditFeedDataConfirm(data)}
                                                                                                         toggleNewButton={toggleNewButton}
                                                                                                         toggleTopButton={toggleTopButton}
                                                                                                         />}
     
     {isSuccess && data && orderByTop && orderByNew === false && orderByHot === false && <Body toggleHotButton={toggleHotButton} 
                                                                                               popularPostsData={topTrendingDataConfirm(data)}
                                                                                               toggleNewButton={toggleNewButton}
                                                                                               toggleTopButton={toggleTopButton}
                                                                                               />}
     
     {isSuccess && data && orderByNew && orderByHot === false && orderByTop === false && <Body toggleHotButton={toggleHotButton} 
                                                                                               popularPostsData={newTrendingDataConfirm(data)}
                                                                                               toggleNewButton={toggleNewButton}
                                                                                               toggleTopButton={toggleTopButton}
                                                                                               />}
     
     {isSuccess && data && orderByHot && orderByNew === false && orderByTop === false && <Body toggleHotButton={toggleHotButton} 
                                                                                               popularPostsData={hotTrendingDataConfirm(data)}
                                                                                               toggleNewButton={toggleNewButton}
                                                                                               toggleTopButton={toggleTopButton}
                                                                                               />}
    </div>
  );
}




export default App;
