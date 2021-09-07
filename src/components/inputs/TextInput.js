import { useState } from "react";
import styled from "styled-components";


export default function TextInput({ initialValue = "", placeholder = "Digite aqui" }) {
    const [value, setvalue] = useState(initialValue);

    return (
        <InputStyled
            placeholder={placeholder}
            onChange={(event) => setvalue(event.target.value)}
            value={value}
        />
    );
};

const InputStyled = styled.input`
    font-size: 20px;
    color: rgb(70,70,70);
    width: 90%;
    padding: 10px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 5px;
    outline: none;

    ::placeholder{
        color: rgb(160, 160, 160);
    }
`;