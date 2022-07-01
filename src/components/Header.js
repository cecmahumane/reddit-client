import React, { useState } from 'react'
import RedditLogo from '../images/RedditLogo.png'
import Icon_search from '../images/Icon_search.png' 

function Header() {

    // const [searchInput, setSearchInput] = useState('');

  return (
    <div className='navbar'>
        <img src={RedditLogo} alt='' className="logo"/>
        <div className='search-and-logo'>
            <input
                className='searchbar' 
                type='search'
                placeholder='Search Reddit'
                />
            <img src={Icon_search} alt='' className='searchIcon'/>
        </div>
    </div>
  )
}

export default Header