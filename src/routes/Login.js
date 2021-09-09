import { LoginContainer, FakeLink } from '../components/containers/LoginContainer';
import Logo from '../components/logo/Logo';
import TextInput from '../components/inputs/TextInput';
import BlueButton from '../components/buttons/BlueButton';
import routes from '../routes/routes';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../API/requests';

export default function Login({ setUser }) {
    const [loading, setLoading] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();

    function requestLogin() {
        setLoading(true);
        login(inputsValues)
            .then(response => {
                setUser({ ...response.data });
                history.push(routes.today);
            })
            .catch(response => {
                alert('Houve uma falha no login. Por favor, tente novamente.');
                setLoading(false);
            })
    }

    return (
        <LoginContainer loading={{ loading }}>
            <Logo />

            <TextInput
                initialValue={inputsValues.email}
                valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, email: value })}
                placeholder="email"
                customStyle={{ width: '90%', loading: loading }}
            />
            <TextInput
                initialValue={inputsValues.password}
                valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, password: value })}
                placeholder="senha"
                customStyle={{ width: '90%', loading: loading }}
            />

            <BlueButton onClick={loading ? null : requestLogin} customStyle={{ loading: loading }}>
                Entrar
            </BlueButton>

            {loading ?
                <FakeLink>Não tem uma conta? Cadastre-se!</FakeLink>
                :
                <Link to={routes.signUp}>
                    Não tem uma conta? Cadastre-se!
                </Link>
            }
        </LoginContainer >
    );
};
