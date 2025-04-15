import React from "react"
import IngredientsList from "./components/IngredientsList"
import Recipe from "./components/Recipe"
import { getRecipeFromMistral } from "./ai"
// import { main } from "./ai"

export default function Main1() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [error, setError] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    async function getRecipe() {
        setIsLoading(true)
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            setRecipe(recipeMarkdown)
        } catch (err) {
            setError("Failed to generate recipe. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        if (!newIngredient.trim()) {
            setError("Please enter an ingredient")
            return
        }
        setError("")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient.trim()])
    }

    function removeIngredient(indexToRemove) {
        setIngredients(prevIngredients =>
            prevIngredients.filter((_, index) => index !== indexToRemove)
        )
    }

    return (
        <main>
            <form action={addIngredient} className="add-ing-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                    required
                />
                <button>Add Ingredient</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    onRemoveIngredient={removeIngredient}
                    isLoading={isLoading}
                /> 
            }
            {ingredients.length > 0 && ingredients.length < 4 &&
                <p className="ingredient-hint">Please add at least 3 ingredients to get a recipe</p>
            }
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}