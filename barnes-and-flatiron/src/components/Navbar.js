import {NavLink} from 'react-router-dom'

const style = {
    width: "2em",
    margin: ".5em",
    color: "black",
    textDecoration: "none"
}

const Navbar = ({cart}) => {
    return (
    <>
        <NavLink
            to="/"
            exact
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            style={style}
            >
            Home
        </NavLink>
        <NavLink
            to="/books"
            exact
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            style={style}
            >
            Books
        </NavLink>
        <NavLink
            to="/books/new"
            exact
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            style={style}
            >
            New Book
        </NavLink>
        <NavLink
            to="/cart"
            exact
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            style={style}
            >
            Cart({cart.length})
        </NavLink>
        <NavLink
            to="/test"
            exact
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            style={style}
            >
            Test
        </NavLink>
    </>
    )
}

export default Navbar;