import LogoImg from '../../images/LogoImg.jpg';
import styled from 'styled-components';

export default function Logo() {
    return(
        <LogoImage src={LogoImg} alt="Logo image" />
    );
};

const LogoImage = styled.img`
    width: 180px;
    height: 178px;
`;