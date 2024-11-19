// App.js
import React, { useState } from 'react';
import './search.css'; 

// Create a Sidebar component with an open and close toggle state
function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // i know in the figma it was the full page but i mae it a sidebar
  // again for development purposes. this can be changed pretty easily.
  // I wanted to just have another page to start so we can think about how we want to go about it
  // and also test functionality.
  return (
    <div className="sidebar-container">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      {/* These don't lead anywhere at the moment but can be edited when we flush out
      the pages for each department. I'm thinking we should establish our directory system for these
      pages before jumping right into it. like departments/xyz/Professor in our own codeframe (within pages)*/}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#dashboard">Dept 1</a></li>
          <li><a href="#profile">Dept 2</a></li>
          <li><a href="#settings">Dept 3</a></li>
          <li><a href="#notifications">Dept 4</a></li>
          <li><a href="#support">Dept 5</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Search;