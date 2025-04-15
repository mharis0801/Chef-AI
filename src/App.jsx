import Header from "./Header"
import Main1 from "./Main1.jsx"
import { ThemeProvider } from "./context/ThemeContext"

export default function App() {
    return (
        <ThemeProvider>
            <Header />
            <Main1 />
        </ThemeProvider>
    )
}