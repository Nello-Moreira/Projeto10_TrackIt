import LoginContainer from '../components/containers/LoginContainer';
import Logo from '../components/logo/Logo';
import TextInput from '../components/inputs/TextInput';
import BlueButton from '../components/buttons/BlueButton';
import routes from '../routes/routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [inputsValues, setinputsValues] = useState({ email: '', password: '' })
    return (
        <LoginContainer>
            <Logo />
            <TextInput placeholder="email" />
            <TextInput placeholder="senha" />
            <BlueButton style='login'>Entrar</BlueButton>
            <Link to={routes.signUp}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </LoginContainer >
    );
};
