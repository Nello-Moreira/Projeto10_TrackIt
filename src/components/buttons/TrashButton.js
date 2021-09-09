import { TrashOutline } from 'react-ionicons';
import styled from 'styled-components';

export default function TrashButton({ onClick }) {
    return (
        <Button onClick={onClick ? onClick : null}>
            <TrashOutline
                color={'rgba(102,102,102,1)'}
                title={'Deletar esse hábito'}
                height="100%"
                width="100%"
                cursor={'pointer'}
            />
        </Button>
    )
};

const Button = styled.button`
    height: 20px;
    width: 20px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;