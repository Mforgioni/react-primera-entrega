import CardWidget from "../CardWidget/CardWidget"

const NavBar = () => {

return (
    <nav>
        <h2>E-Comerece</h2>
        <div>
            <button className="nav-boton">Celulares</button>
            <button className="nav-boton">Tablet</button>
            <button className="nav-boton">NoteBooks</button>
        </div>
        <CardWidget />
    </nav>
)

}

export default NavBar