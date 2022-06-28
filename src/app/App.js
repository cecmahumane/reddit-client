import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Body from '../components/Body';
import { v4 as uuidv4 } from 'uuid'
import { useGetRedditFeedDataQuery } from './services/redditFeedData';

function App() {
  
  const { data, error, isLoading, isSuccess, isError } = useGetRedditFeedDataQuery();

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

//   function htmlDecode(input) {
//     let doc = new DOMParser().parseFromString(input, "text/html");
//     return doc.documentElement.textContent;
// }   

        let popularPostsData = data.data.children.map((result) => {
          return {
            id: uuidv4(),
            title: result.data.title,
            score: nFormatter(result.data.score, 1),
            permalink: result.data.permalink,
            author: result.data.author,
            url: result.data.url,
            subredditNamePrefix: result.data.subreddit_name_prefixed,
            numComments: nFormatter(result.data.num_comments, 1),
            thumbnail: result.data.thumbnail
          }
        })

  return (
    <div className="App">
     <Header/>
     <Body popularPostsData={popularPostsData}/>
    </div>
  );
}

export default App;
