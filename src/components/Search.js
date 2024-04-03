import React from "react";
import { useState } from "react";
import "./Search.css"



function Search({ data }) {
    const [searchTags, setSearchTags] = useState({
      tag1: '',
      tag2: '',
      // Add more search tags as needed
    });
    const [filteredData, setFilteredData] = useState([]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSearchTags({ ...searchTags, [name]: value });
    };
  
    const handleSearch = () => {
      // Filter data based on search tags
      const filtered = data.filter(item => {
        // Customize filtering logic based on your requirements
        return (
          item.tag1.toLowerCase() === searchTags.tag1.toLowerCase() &&
          item.tag2.toLowerCase() === searchTags.tag2.toLowerCase()
          // Add more conditions for additional search tags
        );
      });
      setFilteredData(filtered);
    };
  
    return (
      <div>
        <select name="tag1" value={searchTags.tag1} onChange={handleChange}>
          <option value="">Select Tag 1</option>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          {/* Add more options for tag 1 */}
        </select>
  
        <select name="tag2" value={searchTags.tag2} onChange={handleChange}>
          <option value="">Select Tag 2</option>
          <option value="valueA">Value A</option>
          <option value="valueB">Value B</option>
          {/* Add more options for tag 2 */}
        </select>
        
        {/* Add more select tags for additional search tags */}
        
        <button onClick={handleSearch}>Search</button>
  
        <div>
          {filteredData.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* Render other details of the filtered data */}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Search ; 