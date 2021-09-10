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
    height: 34px;
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
    width: 32px;
    padding: 5px 7px;
    background-color: ${({ isSelected }) => isSelected ? 'rgb(255, 255, 255)' : 'rgb(219, 219, 219)'};
    border: ${({ isSelected }) => isSelected ? '2px solid rgb(144, 238, 144)' : '1px solid rgb(212, 212, 212)'};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
