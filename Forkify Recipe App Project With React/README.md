
# 🍳 Forkify Recipe App

A modern and responsive recipe search application built with React and Vite. Forkify allows users to search for recipes, view detailed cooking information, explore ingredients, and dynamically adjust ingredient quantities based on the number of servings.

## 📌 Project Overview

Forkify Recipe App integrates with the Forkify API to fetch real recipe data. Users can search for their favourite meals, select a recipe to view its details, and increase or decrease servings to calculate the required ingredient quantities.

The application provides a clean user interface, responsive layout, loading indicators, and error handling for a smooth user experience.

## ✨ Features

- 🔍 **Recipe Search:** Search for recipes by entering keywords such as pizza, pasta, or chicken.
- 🌐 **API Integration:** Fetch recipe lists and detailed recipe information from the Forkify API.
- 🍽️ **Recipe Details:** View recipe images, titles, publishers, cooking times, and ingredients.
- ➕ **Dynamic Servings:** Increase or decrease the number of servings.
- 🧮 **Ingredient Calculation:** Automatically adjust ingredient quantities according to the selected servings.
- ⏳ **Loading States:** Display loading messages while fetching recipes and recipe details.
- ⚠️ **Error Handling:** Display helpful messages when requests fail or no recipes are found.
- 📱 **Responsive Design:** Adapt the interface to desktop, tablet, and mobile screen sizes.
- 🥘 **Interactive Interface:** Click any recipe card to display its detailed information.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- React Hooks (`useState`, `useEffect`)
- Fetch API
- Forkify API
- Responsive Web Design

## 🔌 API Integration

This project uses the Forkify API to retrieve recipe information.

**Base API URL**

`https://forkify-api.jonas.io/api/v2/recipes`

### Search Recipes

The application sends a search request using the entered keyword.

`GET /api/v2/recipes?search=pizza`

The response contains a list of matching recipes, including information such as the recipe ID, title, publisher, and image URL.

### Get Recipe Details

When a user clicks a recipe card, the application fetches the full recipe using its ID.

`GET /api/v2/recipes/RECIPE_ID`

The response provides detailed recipe information, including cooking time, servings, and ingredients.

## 🧮 Dynamic Servings Calculation

One of the key features of this project is dynamically calculating ingredient quantities based on the selected number of servings.

**Formula:**

```js
(ingredient.quantity * servings) / selected.servings
```

Where:

- `ingredient.quantity` is the original quantity of an ingredient.
- `servings` is the number of servings selected by the user.
- `selected.servings` is the original serving count provided by the API.

### Example

Suppose a recipe originally serves 2 people and requires 100 grams of flour.

| Selected Servings | Flour Required |
| --- | ---: |
| 2 people | 100 g |
| 4 people | 200 g |
| 6 people | 300 g |

The formula automatically recalculates the quantity whenever the user changes the servings.

## ⚛️ React Concepts Practiced

This project helped me practise and understand several important React concepts:

- **Components:** Building the application interface using JSX.
- **useState:** Managing search input, recipes, selected recipe, loading states, errors, and servings.
- **useEffect:** Fetching recipes when the search query changes.
- **Event Handling:** Handling search input changes and servings button clicks.
- **Conditional Rendering:** Displaying loading messages, error messages, recipe details, and the empty state.
- **Array.map():** Rendering recipe cards and ingredient lists dynamically.
- **Optional Chaining:** Safely accessing ingredient data when it is available.
- **Async/Await:** Handling asynchronous API requests.
- **Fetch API:** Communicating with an external REST API.
- **Error Handling:** Managing failed API responses using `try...catch...finally`.
- **Responsive CSS:** Creating a layout that adapts to different screen sizes.

## 📂 Project Structure

```text
forkify-recipe-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: The folder structure may vary slightly depending on your project setup.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Navigate to the Project Folder

```bash
cd forkify-recipe-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

## 📱 Responsive Design

The application is designed to provide a consistent experience across different devices:

- **Desktop:** Recipe list and selected recipe details are displayed side by side.
- **Tablet:** The layout adjusts to fit medium-sized screens.
- **Mobile:** Content adapts to smaller screens for easier browsing and interaction.

## 🎯 Learning Objectives

The main goal of this project was to strengthen my React fundamentals through practical implementation.

While developing Forkify, I practised API integration, asynchronous JavaScript, state management, conditional rendering, dynamic list rendering, and calculations based on user input.

This project is part of my journey toward becoming a professional Full Stack Developer.

## 🔮 Future Improvements

Potential enhancements for future versions include:

- Bookmark favourite recipes.
- Create a dedicated bookmarks section.
- Add pagination for search results.
- Improve search suggestions.
- Add recipe preparation instructions and additional details.
- Improve accessibility and user feedback.
- Deploy future updates with additional features.

## 👨‍💻 Author

**Shamir Yaqoob**

Aspiring Full Stack Developer | React.js Learner

- GitHub: https://github.com/yaqoobbantwa123-code
- LinkedIn: https://www.linkedin.com/in/shamir-bantwa-4b1690395/

## 📄 License

This project was created for educational and learning purposes.

Recipe data is provided by the Forkify API. Please refer to the API provider's terms and conditions for applicable usage requirements.

---

⭐ If you find this project useful, feel free to explore the code and follow my development journey.