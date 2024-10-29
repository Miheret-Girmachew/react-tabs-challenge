import React, { useEffect, useState } from 'react';
import "../App.css";

const Tabs = () => {
  const [data, setData] = useState(Array(4).fill(null)); 
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState(null);

  const fetchData = async (tabIndex) => {
    try {
      const response = await fetch(`http://localhost:5000/proxy?url=https://loripsum.net/api/1/short`);
      if (!response.ok) {
        throw new Error(`Error fetching content for Tab ${tabIndex + 1}: ${response.statusText}`);
      }
      const json = await response.json();
      setData((prevData) => {
        const newData = [...prevData];
        newData[tabIndex] = json; 
        return newData;
      });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      fetchData(i);
    }
  }, []);

  return (
    <div className="container">
      {error && <p className="text-red-500">{error}</p>}
      <div className="tabs">
        {data.map((_, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)} 
          >
            Tab {index + 1}
          </div>
        ))}
      </div>
      <div className="content">
        {data[activeTab] ? (
          <div className="tab-content">
            <h2>Title {activeTab + 1}</h2>
            <div dangerouslySetInnerHTML={{ __html: data[activeTab] }} /> 
          </div>
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
