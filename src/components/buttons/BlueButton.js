import styled from "styled-components";

export default function BlueButton({ style = '', children }) {
    return (
        <Button customStyle={style}>
            {children}
        </Button>
    )
};

const Button = styled.button`
    font-size:${({ customStyle }) => customStyle === 'login' ? '21px' : '16px'};
    color: rgb(255, 255, 255);
    width: ${({ customStyle }) => customStyle === 'login' ? '90%' : 'auto'};
    height: ${({ customStyle }) => customStyle === 'login' ? '45px' : '35px'};
    background-color:rgba(82, 182, 255, 1);
    border: none;
    border-radius: 5px;
`;
