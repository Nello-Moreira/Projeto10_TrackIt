import { LoginContainer, FakeLink } from '../components/containers/LoginContainer';
import Logo from '../components/logo/Logo';
import CustomForm from '../components/inputs/CustomForm';
import TextInput from '../components/inputs/TextInput';
import BlueButton from '../components/buttons/BlueButton';
import CircleLoader from '../components/loader/CircleLoader';
import routes from '../routes/routes';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../API/requests';

export default function Login({ setUser, pageFirstLoad, setPageFirstLoad }) {
    const [loading, setLoading] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('trackItUser'));

        if (user) return requestLogin({ email: user.email, password: user.password });

        setPageFirstLoad(false);
    }, [])

    function formHandler(event) {
        event.preventDefault();
        setLoading(true);

        requestLogin(inputsValues);
    }

    function requestLogin(user) {
        login(user)
            .then(response => {
                localStorage.setItem('trackItUser', JSON.stringify(response.data))
                setUser({ ...response.data });
                history.push(routes.today);
            })
            .catch(error => {
                setLoading(false);

                if (error.response.status === 401) return alert(error.response.data.message);
                if (error.response.status === 422) {
                    alert('Houve uma falha no login. Por favor, verifique o e-mail e tente novamente.')
                };
            });
    }

    return (
        pageFirstLoad ?
            <CircleLoader customStyle={{ height: '100vw' }} />
            :
            <LoginContainer loading={{ loading }}>
                <Logo />

                <CustomForm onSubmit={formHandler}>
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
                        type='password'
                        required
                    />

                    <BlueButton type="submit" customStyle={{ loading: loading }}>
                        Entrar
                    </BlueButton>
                </CustomForm>

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
