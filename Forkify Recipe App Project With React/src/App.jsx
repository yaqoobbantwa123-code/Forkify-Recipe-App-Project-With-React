import { useEffect, useState } from "react";
import "./App.css";

const API = "https://forkify-api.jonas.io/api/v2/recipes";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [servings, setServings] = useState(1);
  const [loading, setLoading] = useState(false);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    if (!query.trim()) {
      setRecipes([]);
      setLoading(false);
      setSelected(null);
      setError("");
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${API}?search=${encodeURIComponent(query)}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes.");
        }

        const data = await response.json();

        if (!ignore) {
          const fetchedRecipes = data.data.recipes || [];

          setRecipes(fetchedRecipes);

          if (fetchedRecipes.length === 0) {
            setError("No recipes found. Try another search.");
          }
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [query]);

  async function getDetails(id) {
    setDetailsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API}/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch recipe details.");
      }

      const data = await response.json();

      setSelected(data.data.recipe);
      setServings(data.data.recipe.servings);
    } catch (err) {
      setError(err.message);
    } finally {
      setDetailsLoading(false);
    }
  }
  return (
    <div className="app">
      <header className="header">
        <h1>🍳 Forkify Recipe</h1>

        <input
          type="text"
          placeholder="Search pizza, pasta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <p>{recipes.length} recipes found</p>
      </header>

      <main>
        <section className="list">
          <h2>Discover Recipes</h2>

          {loading && <p>Searching recipes...</p>}

          {error && <p>{error}</p>}

          {!loading &&
            recipes.map((recipe) => (
              <div
                className={`card ${selected?.id === recipe.id ? "active" : ""}`}
                key={recipe.id}
                onClick={() => getDetails(recipe.id)}
              >
                <img src={recipe.image_url} alt={recipe.title} />

                <div>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.publisher}</p>
                </div>
              </div>
            ))}
        </section>

        <section className="details">
          {detailsLoading ? (
            <p>Loading recipe details...</p>
          ) : selected ? (
            <>
              <img
                className="food-image"
                src={selected.image_url}
                alt={selected.title}
              />

              <h2>{selected.title}</h2>

              <p>Publisher: {selected.publisher}</p>

              <p>Cooking Time: {selected.cooking_time} minutes</p>

              <p>Servings: {servings}</p>

              <button
                onClick={() => setServings(servings - 1)}
                disabled={servings <= 1}
              >
                −
              </button>

              <button onClick={() => setServings(servings + 1)}>+</button>

              <h3>Ingredients</h3>

              <ul>
                {selected.ingredients?.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.quantity == null
                      ? ""
                      : (ingredient.quantity * servings) /
                        selected.servings}{" "}
                    {ingredient.unit} {ingredient.description}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="empty">
              <span>🥘</span>

              <h2>Your Next Favourite Meal</h2>

              <p>
                Search for a recipe and click a card to see its information here
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
