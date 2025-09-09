
const v = "Vijay"
function Header(){
    
    return(
        <header>
            <h1>Yo Waddup {v}</h1>
            <nav>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}
export default Header