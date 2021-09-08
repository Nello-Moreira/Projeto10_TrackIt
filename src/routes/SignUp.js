import LoginContainer from '../components/containers/LoginContainer';
import Logo from '../components/logo/Logo';
import TextInput from '../components/inputs/TextInput';
import BlueButton from '../components/buttons/BlueButton';
import routes from '../routes/routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [inputsValues, setinputsValues] = useState({ email: '', password: '' })
    return (
        <LoginContainer>
            <Logo />
            <TextInput placeholder="email" />
            <TextInput placeholder="senha" />
            <TextInput placeholder="nome" />
            <TextInput placeholder="url da foto" />
            <BlueButton>Cadastrar</BlueButton>
            <Link to={routes.login}>
                Já tem uma conta? Faça login!
            </Link>
        </LoginContainer >
    );
};
