import styled from "styled-components";
import { keyframes } from 'styled-components';

const HeaderContainer = styled.header`
    height: 70px;
    width: 375px;
    width: 100vw;
    background-color: rgba(18, 107, 165, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoText = styled.span` 
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: rgba(255, 255, 255, 1);
    margin-left: 20px;
`;

const ProfileImage = styled.img`
    height: 51px;
    width: 51px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
`;

const Menu = styled.div`
    width:40vw;
    margin-right: 10px;
    padding: 0 10px 10px;
    background-color: rgb(255,255,255);
    border: 1px solid rgba(18,107,165,1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: fixed;
    top: ${({ menuOpened }) => menuOpened ? '70px' : '-30vh'};
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: top 0.5s ease;

    >*{
        margin-top: 10px;
    }

    span, button {
        font-size: 20px;
        color: rgba(102,102,102,1);
        width: 100%;
        padding: 0;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        text-decoration: underline;
    }
`;

export { HeaderContainer, LogoText, ProfileImage, Menu };