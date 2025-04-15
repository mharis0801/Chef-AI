import chefLogo from "/src/assets/chefIcon.jpg"
import ThemeToggle from "./components/ThemeToggle"

export default function Header() {
    return (
        <header>
            <img src={chefLogo} alt="Chef AI Logo" />
            <h1>Chef Ai</h1>
            <ThemeToggle />
        </header>
    )
}