import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Ai Recomends</h2>
            <ReactMarkdown>
            {props.recipe}
            </ReactMarkdown>
            
    
</section>
    )
}