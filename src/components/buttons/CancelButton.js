import styled from "styled-components";

export default function CancelButton({onClick=null}) {
    return (
        <Button onClick={onClick}>
            Cancelar
        </Button>
    )
};

const Button = styled.button`
    font-size: 16px;
    color: rgb(18, 107, 165);
    background-color: transparent;
    border: none;

    :hover {
        color: rgb(82, 182, 255);
    }
`;