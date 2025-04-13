import React from "react"
import IngredientsList from "./components/IngredientsList"
import Recipe from "./components/Recipe"
import { getRecipeFromMistral } from "./ai"

export default function Main1(){


    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
       const recipeMarkdown = await getRecipeFromMistral(ingredients)
       setRecipe(recipeMarkdown)
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ing-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} 
            getRecipe = {getRecipe}
            /> 

            }
           { recipe && <Recipe recipe={recipe} />}
        </main>
    )
}