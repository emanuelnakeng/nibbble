# Nibbble Project Report and Reflection

## 1. Introduction

The **Nibbble Project** aimed to develop a recipe web app using **React.js** and the **Free Meal API**. This project provided hands-on experience with React fundamentals, component-based architecture, and practical API integration. The app allows users to search for recipes, view detailed meal information, and discover new meals. This report outlines the development process, challenges encountered, and reflections on what I learned.

## 2. Project Overview

The app provides a user-friendly interface with the following features:

- **Search for Recipes**: Users can search for recipes by name or ingredient.
- **View Recipe Details**: Detailed information for each recipe, including ingredients, instructions, and videos where available.
- **Navigation with React Router**: Allows seamless navigation between search results and meal details.
- **Favorites and Recent Recipes**: Users can save favorite recipes and view recently viewed recipes.

### Tech Stack
- **Figma**: Used for wireframes and UI prototyping.
- **React.js**: The core library for building the app’s frontend.
- **Fetch API**: For making requests to the Free Meal API.
- **TailwindCSS**: Used for styling and layout.
- **React Router DOM**: Manages multi-page navigation within the app.

## 3. Features Implemented

- **Search Functionality**  
  Users can type a meal name or ingredient into the search bar, and the app retrieves matching recipes.

- **Meal Details Page**  
  Selected recipes display details like ingredients, cooking instructions, and an image.

- **Responsive Design**  
  The app is designed to be responsive, working well on both desktop and mobile devices, using CSS Grid and Flexbox.

## 4. Challenges and Frustrations

Throughout development, I faced several technical and conceptual challenges. Here are some of the major issues and the solutions I implemented:

### 1. Limitations of the Free Meal API
   - **Problem**: The Free Meal API has a limited selection of meals, which often led to incomplete search results or missing data, such as cooking videos or detailed instructions.
   - **Solution**: I added error handling to inform users when no results were found or when meal data was incomplete, improving user experience and reducing potential confusion.

### 2. Handling Asynchronous API Requests
   - **Problem**: Asynchronous API requests posed a challenge, especially when trying to manage data loading states and UI updates. At times, the app displayed old or incomplete data while waiting for new data.
   - **Solution**: Implemented loading states in React to show a "Loading..." message whenever the app was fetching data, ensuring users knew data was still being retrieved.

### 3. React Router Integration
   - **Problem**: Setting up React Router for multi-page navigation was initially challenging, especially when trying to pass data between routes (e.g., recipe details from the search page to the meal details page).
   - **Solution**: After researching and experimenting, I learned how to use URL parameters to pass data between routes, enabling seamless navigation and accurate rendering of the meal details.

## 5. Conclusion

Reflecting on this project, I’ve gained valuable skills and insights in both technical aspects and problem-solving:

- **React Fundamentals**  
  My understanding of core React concepts like components, props, and state management has significantly improved. Using hooks like `useState` and `useEffect` in real-world scenarios helped solidify these concepts, and structuring the app with reusable components has given me confidence in building complex UIs.

- **React Router and Data Flow**  
  Managing data flow between components and routes was challenging but rewarding. I gained a clearer understanding of multi-page applications and how to pass data between pages effectively.

- **Responsive Design**  
  Though the app design is simple, using Flexbox and CSS Grid taught me the basics of responsive design, ensuring a seamless experience on both desktop and mobile devices.

Overall, the **Nibbble Project** has deepened my knowledge of React and front-end development. This experience has motivated me to explore more advanced projects and continue refining my skills in building functional, user-centered applications.
