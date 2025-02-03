![Git Social Preview](public/mock-img/github-logo-typical-reddit.png) 
# Typical Reddit App

**Typical Reddit App** is a front-end application built with **React**, **Redux Toolkit**, **React Router**, **Vite**, and **TypeScript**. This app allows users to log in with their Reddit account, search for subreddits, curate a personalized feed with up to 5 subreddits, and interact with posts by upvoting, downvoting, and commenting. 

Additionally, users can toggle between light and dark modes and manage their account through a profile section. This project is designed to enhance the Reddit experience by providing a clean and customizable UI.

---

## Features

- **User Authentication**: Sign in to your Reddit account using Reddit's OAuth.
- **Search and Curate Subreddits**: Search for subreddits and select up to 5 to create a personalized feed.
- **Customized Feed**: View and interact with posts from your selected subreddits.
- **Post Interactions**: Upvote, downvote, and comment on posts in your feed.
- **Feed Customization**:
  1. Switch between a **single column** or **two-column** layout for posts.
  2. Toggle **media visibility** in posts (images/videos on or off).
- **Radix-UI Integration**: Includes a customizable and accessible **dropdown menu** for sorting and display options, as well as icons, powered by Radix-UI.
- **Profile Management**:
  - Toggle between **light** and **dark** modes.
  - Log out from your Reddit account.
- **Backend Server**:
  - **Express.js** server handles Reddit API requests locally to bypass CORS restrictions.
  - **Axios** is used for making GET requests to the Reddit API.
  - **CORS** middleware is configured for smooth communication between the server and client.
- **Routing**: Seamless navigation between pages using **React Router**.
- **Contact Developer**: A dedicated section to contact the developer, **Lev Zhitnik**.

---

## SCSS for Modularity and Scalability

The app leverages **SCSS** to maintain modularity and scalability in styling. By using features like variables, mixins, nesting, and partials, the codebase ensures:

- **Reusability**: Shared styles like button designs and typography are abstracted into mixins and variables.
- **Theme Management**: Light and dark modes are handled by modifying color variables, making it easy to scale themes in the future.
- **Readability**: Modular SCSS files separate styles by components and pages, aligning with the app's folder structure.
- **Ease of Maintenance**: Changes to global styles can be made in the `_base.scss` file, propagating throughout the app without affecting individual components.
  
To review the SCSS structure, check out the `src/styles` folder:

---

## App Architecture

### **Hierarchy**

1. **Landing Page**:
   - Log in with Reddit credentials to continue.
2. **Subreddit Selection**:
   - Search and choose up to 5 subreddits to create your feed.
3. **Feed**:
   - View and interact with posts from your selected subreddits.
4. **Subreddits Tab**:
   - Edit your subreddit selection at any time.
5. **Profile Tab**:
   - Switch between light and dark modes.
   - Log out of your account.
6. **Contact Me**:
   - Send a message to the developer.

---

## Prototype Design

Below are prototype designs used during the development process to visualize the app's layout and flow:

#### Landing Page
![Prototype Image 1](public/mock-img/1-LandingPage.png)  
#### Select Subreddits
![Prototype Image 2](public/mock-img/2-Subreddits.png)  
#### Feed View
![Prototype Image 3](public/mock-img/3-Feed.png)  
#### Light Mode
![Prototype Image 4](public/mock-img/2-Subreddits–Light.png)

## Tablet & Mobile
### Tablets:
#### Select Subreddits - Default
![Prototype Image 5](public/mock-img/iPad–2-Subs-Dark.png)  
#### Select Subreddits - Light
![Prototype Image 6](public/mock-img/iPad–2-Subs-Light.png)  
### Mobile:
#### Subreddit Search - Default
![Prototype Image 7](public/mock-img/Mobile-2-Subs-Dark.png)  
#### Select Subreddits - Default
![Prototype Image 8](public/mock-img/Mobile-2-SubsSelected-Dark.png)  
#### Select Feed - Default
![Prototype Image 9](public/mock-img/Mobile-2-Feed-Dark.png)  
#### Subreddit Search - Light
![Prototype Image 10](public/mock-img/Mobile-2-Subs-Light.png)  
#### Select Subreddits - Light
![Prototype Image 11](public/mock-img/Mobile-2-SubsSelected-Light.png)  
#### Select Feed - Light
![Prototype Image 12](public/mock-img/Mobile-2-Feed-Light.png)  


---

## Folder Structure

```plaintext
📦src
 ┣ 📂app
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜AuthButton.tsx
 ┃ ┃ ┣ 📂BottomGradient
 ┃ ┃ ┃ ┗ 📜BottomGradient.tsx
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┗ 📜Button.tsx
 ┃ ┃ ┣ 📂Comments
 ┃ ┃ ┃ ┗ 📜Comments.tsx
 ┃ ┃ ┣ 📂ContactButton
 ┃ ┃ ┃ ┗ 📜ContactButton.tsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜ArrowIcon.tsx
 ┃ ┃ ┃ ┣ 📜CommentsIcon.tsx
 ┃ ┃ ┃ ┣ 📜OptionsIcon.tsx
 ┃ ┃ ┃ ┣ 📜RefreshIcon.tsx
 ┃ ┃ ┃ ┗ 📜VoteArrow.tsx
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┃ ┗ 📜PostContainer.tsx
 ┃ ┃ ┣ 📂SubredditSearchUnit
 ┃ ┃ ┃ ┗ 📜SubredditSearchUnit.tsx
 ┃ ┃ ┣ 📂SubredditSelectedUnit
 ┃ ┃ ┃ ┗ 📜SubredditSelectedUnit.tsx
 ┃ ┃ ┗ 📂Vote
 ┃ ┃ ┃ ┣ 📜Vote.tsx
 ┃ ┃ ┃ ┗ 📜VoteButton.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂AuthCallback
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂ContactPage
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂FeedPage
 ┃ ┃ ┃ ┣ 📂feed
 ┃ ┃ ┃ ┃ ┣ 📂controls
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ControlsDropdown.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Feed.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Refresh.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TimeAgo.tsx
 ┃ ┃ ┃ ┣ 📂vote
 ┃ ┃ ┃ ┃ ┗ 📜vote.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂ProfilePage
 ┃ ┃ ┃ ┣ 📂User
 ┃ ┃ ┃ ┃ ┗ 📜User.tsx
 ┃ ┃ ┃ ┣ 📜DarkLightButton.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂SubredditsPage
 ┃ ┃ ┃ ┣ 📂Search
 ┃ ┃ ┃ ┃ ┗ 📜Search.tsx
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜SubredditSelectedList.tsx
 ┃ ┃ ┃ ┗ 📜SubredditSelector.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜AppRoutes.tsx
 ┃ ┃ ┗ 📜ProtectedRoute.tsx
 ┃ ┣ 📂store
 ┃ ┃ ┣ 📂middleware
 ┃ ┃ ┃ ┣ 📜feedAPI.ts
 ┃ ┃ ┃ ┣ 📜profileAPI.ts
 ┃ ┃ ┃ ┣ 📜subredditsAPI.ts
 ┃ ┃ ┃ ┣ 📜tokenAPI.ts
 ┃ ┃ ┃ ┗ 📜voteAPI.ts
 ┃ ┃ ┣ 📂slices
 ┃ ┃ ┃ ┣ 📜authSlice.ts
 ┃ ┃ ┃ ┣ 📜darkLightSlice.ts
 ┃ ┃ ┃ ┣ 📜feedSlice.ts
 ┃ ┃ ┃ ┣ 📜profileSlice.ts
 ┃ ┃ ┃ ┣ 📜searchSlice.ts
 ┃ ┃ ┃ ┗ 📜subredditSlice.ts
 ┃ ┃ ┗ 📜store.ts
 ┃ ┗ 📜App.tsx
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂img
 ┃ ┣ 📂logo
 ┃ ┃ ┣ 📜editedLogo.png
 ┃ ┃ ┣ 📜github-logo-typical-reddit.png
 ┃ ┃ ┗ 📜landingLogo.png
 ┃ ┗ 📂svg
 ┃ ┃ ┣ 📜arrow-square.svg
 ┃ ┃ ┣ 📜comments-square.svg
 ┃ ┃ ┣ 📜comments.svg
 ┃ ┃ ┣ 📜downvote.svg
 ┃ ┃ ┣ 📜options.svg
 ┃ ┃ ┣ 📜refresh.svg
 ┃ ┃ ┣ 📜sort.svg
 ┃ ┃ ┗ 📜upvote.svg
 ┣ 📂server
 ┃ ┣ 📂router
 ┃ ┃ ┣ 📂subreddits
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜api.js
 ┃ ┗ 📜server.js
 ┣ 📂styles
 ┃ ┣ 📜App.scss
 ┃ ┣ 📜FeedPage.scss
 ┃ ┣ 📜Header.scss
 ┃ ┣ 📜index.scss
 ┃ ┣ 📜LandingPage.scss
 ┃ ┣ 📜OptionsMenu.scss
 ┃ ┣ 📜ProfilePage.scss
 ┃ ┣ 📜reset.css
 ┃ ┣ 📜Sort.module.scss
 ┃ ┣ 📜SubredditsPage.scss
 ┃ ┗ 📜_base.module.scss
 ┣ 📂types
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜pages.ts
 ┃ ┣ 📜store.ts
 ┃ ┗ 📜svg.ts
 ┣ 📂utils
 ┃ ┣ 📜helpers.ts
 ┃ ┣ 📜loginURL.ts
 ┃ ┣ 📜parseResponseData.ts
 ┃ ┗ 📜restoreAuth.ts
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

---

## Backend Setup

This project uses a lightweight **Express.js** server to handle Reddit API requests locally, ensuring smooth communication and bypassing CORS restrictions. **Axios** is used to make GET requests to Reddit's API.

### Express Server Configuration

1. **Server Location**: The server code is located in the `src/server` folder.

2. **Code Sample**:
   ```javascript
   import express from 'express';
   import cors from 'cors';
   import axios from 'axios';

   import apiRouter from "./router/api.js"

   const app = express();

   app.use(cors({ origin: '*' }));
   app.get('/api/healthcheck', async (req, res) => {
   return res.json({status: "best"})
   });
   app.get('/healthcheck', async (req, res) => {
   return res.json({status: "best"})
   });

   app.use("/api", apiRouter)

   const PORT = 4000;
   app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
   });
   ```

   ```javascript
   import express from 'express';
   import axios from 'axios';
   const router = express.Router()

   // Enable CORS
   app.use(cors());
   
   // Route to fetch subreddit data
   router.get('/popular', async (_req, res) => {
   console.log('Received request to /subreddits/popular');  // Check if the endpoint is being hit

   try {
      const response = await axios.get("https://www.reddit.com/subreddits/popular.json?&raw_json=1$limit=10");
      
      if (response.status < 200 || response.status >= 300) {
         throw new Error(`Reddit API error: ${response.statusText}`)
      }

      res.json(response.data);
   } catch (error) {
      console.error('Failed to fetch popular subreddits:', error.message);
      res.status(500).json({ error: 'Failed to fetch popular subreddits' });
   }
   });
   

   // Start the server
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

3. **Run the Server**:
   From the project root, navigate to the `src/services` folder and run:
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000`.

---

## Installation and Usage

### Prerequisites
- Node.js (v16+)
- npm or yarn package manager

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/levezze/reddit-app.git
   cd typical-reddit-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and include the following:
   ```env
   VITE_REDDIT_CLIENT_ID=your-client-id
   VITE_REDDIT_REDIRECT_URI=your-redirect-uri
   VITE_REDDIT_API_URL=https://www.reddit.com/api/v1
   ```

4. Install backend dependencies:
   ```bash
   npm install express cors axios
   ```

5. Start the backend server:
   ```bash
   node src/services/server.js
   ```

6. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open your browser and navigate to `http://localhost:5173/`.

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to report bugs or suggest features.

---

## Contact

If you have any questions, feel free to contact the developer:

**Lev Zhitnik**  
[GitHub Profile](https://github.com/Levezze)  
[Email](mailto:lev.zhi@gmail.com)

---

## Future Improvements

- **Infinite Scrolling**: Enhance feed to allow infinite scrolling.
- **Post Sorting**: Add options for sorting posts (e.g., by hot, top, new).
- **Subreddit Insights**: Display detailed insights for each subreddit (e.g., activity stats).
- **PWA**: Convert the app into a Progressive Web App for offline support.
- **Backend**: Create a user-based experience to serve as a reddit portal for regular use + notifications.
- **App**: Convert into a mobile app.

---
