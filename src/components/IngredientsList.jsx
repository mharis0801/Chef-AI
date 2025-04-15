export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={ingredient}>
            {ingredient}
            <button
                onClick={() => props.onRemoveIngredient(index)}
                className="remove-ingredient"
                aria-label={`Remove ${ingredient}`}
            >
                ×
            </button>
        </li>
    ))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length >= 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button
                    onClick={props.getRecipe}
                    disabled={props.isLoading}
                    className={props.isLoading ? "loading" : ""}
                >
                    {props.isLoading ? "Cooking up ideas..." : "Get a recipe"}
                </button>
            </div>}
        </section>
    )
}