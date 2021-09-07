import styled from "styled-components";

export default function Header({ userImage }) {
    return (
        <HeaderContainer>
            <Logo>TrackIt</Logo>
            <ProfileImage src={userImage} />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    height: 70px;
    width: 375px;
    width: 100vw;
    background-color: rgba(18, 107, 165, 1);
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.span` 
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
`;