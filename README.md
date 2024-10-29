# Tabbed Interface in React

## Overview
This project implements a simple tabbed interface using React. The tabs dynamically fetch content from an external API (https://loripsum.net/api/1/short) and display it within each tab. The project demonstrates the use of React hooks, state management, and fetching data asynchronously.

## Features
- **Dynamic Tabs**: Four tabs that display content fetched from an external API.
- **Asynchronous Data Fetching**: Each tab fetches content when the component mounts using `useEffect`.
- **Error Handling**: Displays error messages if the content fails to load.
- **Responsive Design**: The interface is styled to be user-friendly and responsive.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **JavaScript (ES6+)**: For modern JavaScript syntax and functionality.
- **CSS**: For styling the tabbed interface.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/Miheret-Girmachew/react-tabs-challenge.git

   npm install

### API Proxy Setup
To avoid CORS issues while fetching data from https://loripsum.net, a local proxy is required. This project does not include a proxy setup in the repository. You will need to set up a proxy server locally. Below are instructions to do so.

#### Setting Up a Proxy Server
1. **Create a new file** in the root directory of your project named `proxy-server.js`.

2. **Add the following code** to the `proxy-server.js` file:

   ```javascript
   const express = require('express');
   const request = require('request');
   const cors = require('cors');

   const app = express();
   app.use(cors());

   app.get('/proxy', (req, res) => {
     const url = req.query.url;
     request(url).pipe(res);
   });

   const PORT = 5000;
   app.listen(PORT, () => {
     console.log(`Proxy server running on http://localhost:${PORT}`);
   });


 

Install the required dependencies:

 ```bash
npm install express request cors
```

Run the proxy server:

```bash
node proxy-server.js
```

![tabss](https://github.com/user-attachments/assets/1458e5df-82ce-42e5-b6e9-1a34c0d03276)
