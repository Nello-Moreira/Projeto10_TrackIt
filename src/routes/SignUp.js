import { LoginContainer, FakeLink } from '../components/containers/LoginContainer';
import Logo from '../components/logo/Logo';
import CustomForm from '../components/inputs/CustomForm';
import TextInput from '../components/inputs/TextInput';
import BlueButton from '../components/buttons/BlueButton';
import routes from '../routes/routes';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../API/requests';
import statusCode from '../API/statusCode';

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });
    const history = useHistory();

    function requestSignUp(event) {
        event.preventDefault();

        setLoading(true);

        signUp(inputsValues)
            .then(response => {
                history.push(routes.login);
            })
            .catch(error => {
                setLoading(false);
                if (error.response.status === statusCode.unavailableName) return alert(error.response.data.message);
                alert('Houve uma falha no cadastro. Por favor, tente novamente.');
            });
    }

    return (
        <LoginContainer loading={{ loading }} >
            <Logo />

            <CustomForm onSubmit={requestSignUp}>
                <TextInput
                    value={inputsValues.email}
                    valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, email: value })}
                    placeholder="email"
                    customStyle={{ width: '90%', loading: loading }}
                    type='email'
                    required
                />
                <TextInput
                    value={inputsValues.password}
                    valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, password: value })}
                    placeholder="senha"
                    customStyle={{ width: '90%', loading: loading }}
                    type='text'
                    required
                />
                <TextInput
                    value={inputsValues.name}
                    valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, name: value })}
                    placeholder="nome"
                    customStyle={{ width: '90%', loading: loading }}
                    type='text'
                    required
                />
                <TextInput
                    value={inputsValues.image}
                    valueRecorder={loading ? null : (value) => setInputsValues({ ...inputsValues, image: value })}
                    placeholder="url da foto"
                    customStyle={{ width: '90%', loading: loading }}
                    type='url'
                    required
                />

                <BlueButton type='submit' customStyle={{ loading: loading }}>
                    Cadastrar
                </BlueButton>
            </CustomForm>

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
