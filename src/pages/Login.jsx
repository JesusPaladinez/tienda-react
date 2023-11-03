import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [usuario, setUsuario] = useState('');

    const navegador = useNavigate();

    const handleChange = (e) => {
        const valor = e.target.value;
        setUsuario(valor);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(usuario);
        navegador('/perfil');
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Ingresar"
                onSubmit={handleSubmit}
            />
        </form>            
        </div>
    );
}

export default Login;
