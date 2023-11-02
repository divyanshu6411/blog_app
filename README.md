# Blog Website

This is a blog website built using React and Express. The React frontend runs on port 3000, while the Express backend runs on port 5000. The website offers various features including user authentication, blog post creation, reading blogs, fetching blogs by category and username, and managing user account settings.


## Features

- User Registration and Login: Users can register an account and log in to access the full features of the website.
- Create Blog Posts: Authenticated users can create and publish their own blog posts, sharing their thoughts and ideas with the community.
- Read Blogs: Users can browse and read blog posts published by other users, gaining insights and inspiration.
- Fetch Blogs by Category and Username: Users can filter and search for blogs based on categories or specific usernames, allowing for easy navigation and exploration.
- Update and Delete Posts: Authenticated users have the ability to update and delete their own blog posts, providing flexibility to refine and manage their content.
- Account Settings: Users can modify their account settings, including changing their password and email address, ensuring a personalized and secure experience.



## Installation

1. Clone the repository to your local machine.
2. Install dependencies for both the frontend and backend. In separate terminal windows, navigate to the `frontend` and `backend` directories and run the following command:
   ```
   npm install
   ```
3. Start the backend server. In the `backend` directory, run the following command:
   ```
   npm start
   ```
   The Express server will start running on port 5000.
4. Start the frontend development server. In the `frontend` directory, run the following command:
   ```
   npm start
   ```
   The React app will be launched and can be accessed in your browser at `http://localhost:3000`.

## Usage

- Register a new account with your desired username and password.
- Log in with your credentials to access the full features of the website.
- Create blog posts by providing a title, content, and selecting relevant categories.
- Browse and read blog posts from other users.
- Use the search and filter functionalities to find blogs by category or specific username.
- Update or delete your own blog posts as needed.
- Modify your account settings, including changing your password and email address.

## Technologies Used

- React: Frontend JavaScript library for building user interfaces.
- Express: Backend web application framework for Node.js.
- MongoDB: NoSQL database for storing user and blog data.
- Axios: HTTP client for making API requests.
- bcryptjs: Library for hashing and salting passwords.
- JSON Web Tokens (JWT): Used for user authentication and authorization.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
