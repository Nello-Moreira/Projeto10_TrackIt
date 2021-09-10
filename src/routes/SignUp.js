import { LoginContainer, FakeLink } from '../components/containers/LoginContainer';
import Logo from '../components/logo/Logo';
import TextInput from '../components/inputs/TextInput';
import BlueButton from '../components/buttons/BlueButton';
import routes from '../routes/routes';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../API/requests';
import { isFormEmpty } from '../auxiliary/formValidations';

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });
    const history = useHistory();

    function requestSignUp() {
        if (isFormEmpty(inputsValues)) {
            alert('Preencha todos os campos');
            return;
        }

        setLoading(true);

        signUp(inputsValues)
            .then(response => {
                history.push(routes.login);
            })
            .catch(response => {
                alert('Houve uma falha no cadastro. Por favor, tente novamente.');
                setLoading(false);
            });
    }

    return (
        <LoginContainer loading={{ loading }} >
            <Logo />

            <TextInput
                value={inputsValues.email}
                valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, email: value })}
                placeholder="email"
                customStyle={{ width: '90%', loading: loading }}
            />
            <TextInput
                value={inputsValues.password}
                valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, password: value })}
                placeholder="senha"
                customStyle={{ width: '90%', loading: loading }}
            />
            <TextInput
                value={inputsValues.name}
                valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, name: value })}
                placeholder="nome"
                customStyle={{ width: '90%', loading: loading }}
            />
            <TextInput
                value={inputsValues.image}
                valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, image: value })}
                placeholder="url da foto"
                customStyle={{ width: '90%', loading: loading }}
            />

            <BlueButton onClick={loading ? null : requestSignUp} customStyle={{ loading: loading }}>
                Cadastrar
            </BlueButton>

            {loading ?
                <FakeLink>Já tem uma conta? Faça login!</FakeLink>
                :
                <Link to={routes.login}>
                    Já tem uma conta? Faça login!
                </Link>
            }
        </LoginContainer >
    );
};
