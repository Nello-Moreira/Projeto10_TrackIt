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
            <TextInput placeholder="email" customStyle={{width:'90%'}}/>
            <TextInput placeholder="senha" customStyle={{width:'90%'}} />
            <TextInput placeholder="nome" customStyle={{width:'90%'}} />
            <TextInput placeholder="url da foto" customStyle={{width:'90%'}} />
            <BlueButton>Cadastrar</BlueButton>
            <Link to={routes.login}>
                Já tem uma conta? Faça login!
            </Link>
        </LoginContainer >
    );
};
