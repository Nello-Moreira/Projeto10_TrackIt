import styled from 'styled-components';

const LoginContainer = styled.div`
    margin: 70px 0 50px;
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
        color: ${({ loading }) => loading ? 'rgb(25 107 167)' : 'rgb(53 154 228)'};
    }
`;

const FakeLink = styled.p`
    font-size: 18px;
    color: rgb(25 107 167);
    text-decoration: underline;
`;

export { LoginContainer, FakeLink };