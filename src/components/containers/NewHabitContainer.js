import styled from "styled-components";

const NewHabitContainer = styled.div`
    width: 93vw;
    padding: 15px;
    margin-bottom: 25px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonsContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    >button {
        margin-left: 20px;
    }
`;

export { NewHabitContainer, ButtonsContainer };