import { daysFirstLetter } from '../../auxiliary/time';
import styled from "styled-components";

export default function DaysContainer({ selectedDays, toggleDaySelection }) {
    return (
        <Container>
            {daysFirstLetter.map((letter, index) => (
                <OneDayContainer
                    isSelected={selectedDays.includes(index)}
                    onClick={toggleDaySelection ? () => toggleDaySelection(index) : null}
                    key={index}
                >
                    {letter}
                </OneDayContainer>
            ))}
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    >*{
        margin-right: 5px;
    }
`;

const OneDayContainer = styled.div`
    font-size: 20px;
    color: ${({ isSelected }) => isSelected ? 'rgb(200, 200, 200)' : 'rgb(255, 255, 255)'};
    padding: 5px 7px;
    background-color: ${({ isSelected }) => isSelected ? 'rgb(255, 255, 255)' : 'rgb(219, 219, 219)'};
    border: 1px solid rgb(212, 212, 212);
    border-radius: 5px;
`;
