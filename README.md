<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About Threddit</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

# Threddit 

A modern social platform. 


This is a web application where users can explore, engage, and interact within various threads, post their thoughts, join discussions, and much more. With a sleek and responsive design, Threddit offers a dynamic space for users to connect and share ideas.

Features:

- **Explore Threads**: Discover a variety of threads on different topics. Join and leave threads based on your interests.
- **Create & Share Posts**: Express yourself by creating posts in your favorite threads.
- **Engage with Comments**: Add your voice by commenting on posts. Keep conversations flowing with our intuitive nested comments system.
- **Upvote & Downvote**: Show your approval or disagreement by liking or disliking posts and comments. Each user can cast their vote just once to keep things fair.
- **User Authentication**: Secure signup, login, and logout features ensure your data remains safe.

## Technologies Used

This project is a chat application built with React with TypeScript for the frontend, MongoDB (Mongoose for schema management) and Express.js for the backend. It utilizes Modular CSS for styling.
Authentication is built with JWT (JSON Web Token) and cookies for secure authentication.

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation

_Below is an example of how you can run a local version of this app on your machine_

1. Generate an **ACCESS_TOKEN** at <code>[https://www.random.org/strings/]((https://www.random.org/strings/))</code>
2. Clone the repo
   ```sh
   git clone https://github.com/roychon/Threddit.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your <code>.env</code> file
5. Enter your API in `.env` file
   ```sh
   ACCESS_TOKEN = 'ENTER YOUR ACCESS_TOKEN';
   ```
6. Enter your mongodb url in `.env` file
   ```sh
   MONGODB_URL = 'ENTER YOUR MONGODB URL`
   ```
7. Set Cookie details
   ```sh
   CORS_ORIGIN = http://localhost:5173
   PORT = 'ENTER YOUR PORT NUMBER'
   ```
8. Start frontend server
   ```sh
   cd frontend/src
   npm run dev
   ```
9. Start backend server
    ```sh
    cd backend/src
    npm run dev
    ```
10. Once the servers are running, open your web browser and navigate to <code>http://localhost:5173</code> to access the chat application.
<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Usage

<p align="right">(<a href="#readme-top">back to top</a>)</p>


