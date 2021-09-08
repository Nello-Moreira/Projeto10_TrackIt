import { NewHabitContainer, ButtonsContainer } from '../containers/NewHabitContainer';
import TextInput from '../inputs/TextInput';
import DaysContainer from '../containers/DaysContainer';
import CancelButton from '../buttons/CancelButton';
import BlueButton from '../buttons/BlueButton';
import { useState } from 'react';

export default function NewHabit(params) {
    const [selectedDays, setSelectedDays] = useState([]);

    function toggleDaySelection(dayIndex) {
        selectedDays.includes(dayIndex) ?
            setSelectedDays(selectedDays.filter(day => day !== dayIndex))
            :
            setSelectedDays([...selectedDays, dayIndex].sort((a, b) => a - b));
    }

    return (
        <NewHabitContainer>
            <TextInput placeholder="nome do hábito" />

            <DaysContainer selectedDays={selectedDays} toggleDaySelection={toggleDaySelection} />


            <ButtonsContainer>
                <CancelButton />
                <BlueButton customStyle={{ 'font-size': '20px', width: '84px', height: '35px' }}>Salvar</BlueButton>
            </ButtonsContainer>
        </NewHabitContainer>
    );
};
