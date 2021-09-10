import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: rgba(255, 255, 255, 1);
    border-top: 1px solid rgba(217, 217, 217, 1);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-size: 18px;
        color: rgb(18, 107, 165);
        text-decoration: none;
    }

    a:visited {
        color: rgb(18, 107, 165);
    }

    a:hover {
        color: rgb(82, 182, 255);
    }

    a:first-child {
        margin-left: 35px;
    }

    a:last-child {
        margin-right: 35px;
    }
`;

const ProgressbarContainer = styled.div`
    width: 91px;
    height: 91px;
    position: relative;
    bottom: 20px;
`;

export { FooterContainer, ProgressbarContainer };