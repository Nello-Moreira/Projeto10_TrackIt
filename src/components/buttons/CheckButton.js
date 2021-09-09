import { Checkbox } from 'react-ionicons';
import styled from 'styled-components';


export default function CheckButton({ onClick, done }) {
    return (
        <Button onClick={onClick ? onClick : null}>
            <Checkbox
                color={done ? 'rgba(143, 197, 73, 1)' : 'rgba(235, 235, 235, 1)'}
                title={done ? 'Desmarcar como concluído' : 'Marcar como concluído'}
                height="100%"
                width="100%"
            />
        </Button>
    );
};

const Button = styled.button`
    height: 69px;
    width: 69px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
