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

<!-- ABOUT THE PROJECT -->
## About The Project



<!-- ABOUT THE PROJECT -->
## About The Project

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is a chat application built with React for the frontend, MongoDB and Express.js for the backend. It utilizes Modular CSS for styling.

* [![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
* [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
* [![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
* [![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

1. **Clone the Repository:** Start by cloning the project repository to your local machine.
2. **Install Dependencies:** Navigate to the project directory and install frontend and backend dependencies.
3. **Configure Environment Variables:** Set up environment variables for MongoDB URI and LangChain API key.
4. **Start the Servers:** Launch the frontend and backend servers to run the application locally.
5. **Access the Application:** Open your web browser and navigate to http://localhost:5173 to access the chat application.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation

_Below is an example of how you can run a local version of this app on your machine_

1. Get an **OPEN_AI_API Key** at <code>[https://openai.com/gpt-4]((https://openai.com/gpt-4))</code>
2. Clone the repo
   ```sh
   git clone https://github.com/roychon/virtual.ai
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your <code>.env</code> file
5. Enter your API in `.env` file
   ```sh
   OPENAI_API_KEY = 'ENTER YOUR API';
   ```
6. Enter your mongodb url in `.env` file
   ```sh
   MONGODB_URL = 'ENTER YOUR MONGODB URL`
   ```
7. Set Cookie details
   ```sh
   COOKIE_SECRET = 'ENTER YOUR COOKIE SECRET'
   COOKIE_NAME = 'ENTER YOUR COOKIE NAME'
   COOKIE_EXPIRY = 'ENTER YOUR COOKIE EXPIRY DATE'
   ```
8. Start frontend server
   ```sh
   cd frontend/src
   npm run dev
   ```
9. Start backend server
    ```sh
    cd backend
    npm run dev
    ```
10. Once the servers are running, open your web browser and navigate to <code>http://localhost:5173</code> to access the chat application.




## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


