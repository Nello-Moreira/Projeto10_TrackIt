import { HabitContainer, InformationContainer, BottomButtonsContainer } from '../containers/HabitContainer';
import TextInput from '../inputs/TextInput';
import DaysContainer from '../containers/DaysContainer';
import CancelButton from '../buttons/CancelButton';
import BlueButton from '../buttons/BlueButton';
import { useState } from 'react';

export default function NewHabit({ cancelAddition, habitObject, updateHabitObject }) {
    const [selectedDays, setSelectedDays] = useState([]);

    function toggleDaySelection(dayIndex) {
        habitObject.days.includes(dayIndex) ?
            updateHabitObject({ ...habitObject, days: habitObject.days.filter(day => day !== dayIndex) })
            :
            updateHabitObject({ ...habitObject, days: [...habitObject.days, dayIndex].sort((a, b) => a - b) });
    }

    function nameRecorder(newName) {
        updateHabitObject({ ...habitObject, name: newName });
    }

    return (
        <HabitContainer>
            <InformationContainer>
                <TextInput
                    value={habitObject.name}
                    valueRecorder={nameRecorder}
                    placeholder="nome do hábito"
                />

                <DaysContainer selectedDays={habitObject.days} toggleDaySelection={toggleDaySelection} />

                <BottomButtonsContainer>
                    <CancelButton onClick={cancelAddition} />
                    <BlueButton customStyle={{ 'font-size': '20px', width: '84px', height: '35px' }}>Salvar</BlueButton>
                </BottomButtonsContainer>
            </InformationContainer>
        </HabitContainer>
    );
};
