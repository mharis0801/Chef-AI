import ReactMarkdown from "react-markdown"
import { useEffect, useRef } from "react"

export default function Recipe(props) {
    const recipeRef = useRef(null)

    useEffect(() => {
        if (recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [props.recipe])

    return (
        <section ref={recipeRef} className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Ai Recommends</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}