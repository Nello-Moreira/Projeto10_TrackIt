import styled from 'styled-components';

const LoginContainer = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 20px;
    }
    
    input { 
        margin-bottom: 10px;
    }

    button {
        margin-bottom: 25px;
    }

    a {
        font-size: 18px;
        color: rgb(25 107 167);
    }

    a:visited {
        color: rgb(25 107 167);
    }

    a:hover {
        color: rgb(53 154 228);
    }
`;

export default LoginContainer;