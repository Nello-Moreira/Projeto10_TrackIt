import styled from "styled-components";

export default function BlueButton({ customStyle = '', children }) {
    return (
        <Button customStyle={customStyle}>
            {children}
        </Button>
    )
};

const Button = styled.button`
    font-size:${({ customStyle }) => customStyle.fontSize ? customStyle.fontSize : '21px'};
    color: rgb(255, 255, 255);
    width: ${({ customStyle }) => customStyle.width ? customStyle.width : '90%'};
    height: ${({ customStyle }) => customStyle.height ? customStyle.height : '45px'};
    background-color: rgb(18, 107, 165);
    border: none;
    border-radius: 5px;

    :hover{
        background-color: rgb(82, 182, 255);
    }
`;
