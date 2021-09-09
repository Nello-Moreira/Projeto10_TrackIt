import { HabitContainer, InformationContainer, BottomButtonsContainer } from '../containers/HabitContainer';
import TextInput from '../inputs/TextInput';
import DaysContainer from '../containers/DaysContainer';
import CancelButton from '../buttons/CancelButton';
import BlueButton from '../buttons/BlueButton';
import { useState } from 'react';

export default function NewHabit() {
    const [selectedDays, setSelectedDays] = useState([]);

    function toggleDaySelection(dayIndex) {
        selectedDays.includes(dayIndex) ?
            setSelectedDays(selectedDays.filter(day => day !== dayIndex))
            :
            setSelectedDays([...selectedDays, dayIndex].sort((a, b) => a - b));
    }

    return (
        <HabitContainer>
            <InformationContainer>
                <TextInput placeholder="nome do hábito" />

                <DaysContainer selectedDays={selectedDays} toggleDaySelection={toggleDaySelection} />

                <BottomButtonsContainer>
                    <CancelButton />
                    <BlueButton customStyle={{ 'font-size': '20px', width: '84px', height: '35px' }}>Salvar</BlueButton>
                </BottomButtonsContainer>
            </InformationContainer>
        </HabitContainer>
    );
};
