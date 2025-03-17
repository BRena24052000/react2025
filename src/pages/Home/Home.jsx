import { Link } from "react-router";
function Home() {
    return (
        <div className="home">
            <header>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </header>
            <h1>Home</h1>
        </div>
    );
}

export default Home;