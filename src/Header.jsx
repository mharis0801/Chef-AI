import chefLogo from "/src/assets/chefIcon.jpg"

export default function Header(){
    return (
        <header>
            <img src={chefLogo} />
            <h1>Chef Ai</h1>
        </header>
    )
}