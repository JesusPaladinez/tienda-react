import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Hola mundo</h1>
            <button>
                <Link to="/perfil">
                    Ver perfil
                </Link>
            </button>
        </div>
    );
}

export default Home;