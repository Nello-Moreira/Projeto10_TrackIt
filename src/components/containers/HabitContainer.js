import styled from "styled-components";

const HabitContainer = styled.div`
    width: 93vw;
    padding: 15px;
    margin-bottom: 25px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
`;

const InformationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HabitTitle = styled.h2`
    font-size: 20px;
    color: rgba(102, 102, 102, 1);
`;

const RecordStatement = styled.p`
    color: 'rgb(150, 150, 150, 1)';
`;

const RecordDays = styled.span`
    color: ${({ newRecord }) => newRecord ? 'rgb(117, 184, 31)' : 'rgb(150, 150, 150, 1)'};
`;

const BottomButtonsContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    >button {
        margin-left: 20px;
    }
`;

const SideButtonContainer = styled.div`
    width: 69px;
    margin-left: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`;

export { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer, BottomButtonsContainer };