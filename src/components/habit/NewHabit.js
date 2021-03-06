import { HabitContainer, InformationContainer, BottomButtonsContainer } from '../containers/HabitContainer';
import TextInput from '../inputs/TextInput';
import DaysContainer from '../containers/DaysContainer';
import CancelButton from '../buttons/CancelButton';
import BlueButton from '../buttons/BlueButton';
import UserContext from '../../contexts/UserContext';
import { useState, useContext } from 'react';
import { createNewHabit } from '../../API/requests';

export default function NewHabit({ closeNewHabitsWindow, habitObject, updateHabitObject, habits, updateHabitsPercentage }) {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    function toggleDaySelection(dayIndex) {
        habitObject.days.includes(dayIndex) ?
            updateHabitObject({ ...habitObject, days: habitObject.days.filter(day => day !== dayIndex) })
            :
            updateHabitObject({ ...habitObject, days: [...habitObject.days, dayIndex].sort((a, b) => a - b) });
    }

    function nameRecorder(newName) {
        updateHabitObject({ ...habitObject, name: newName });
    }


    function requestCreation() {
        if (habitObject.name === '') {
            alert('Defina o nome do hábito!');
            return;
        }

        if (habitObject.days.length === 0) {
            alert('Defina ao menos um dia!');
            return;
        }

        setLoading(true);

        createNewHabit({ ...habitObject }, user.token)
            .then((response) => {
                updateHabitObject({ name: '', days: [] });
                habits.setHabits([...habits.data, response.data]);
                setLoading(false);
                updateHabitsPercentage();
                closeNewHabitsWindow();
            })
            .catch((response) => {
                alert('Não foi possível criar o novo hábito. Por favor, tente novamente.');
                setLoading(false);
            });
    }

    return (
        <HabitContainer>
            <InformationContainer>
                <TextInput
                    value={habitObject.name}
                    valueRecorder={nameRecorder}
                    placeholder="nome do hábito"
                    customStyle={{ loading }}
                />

                <DaysContainer
                    selectedDays={habitObject.days}
                    toggleDaySelection={loading ? null : toggleDaySelection}
                />

                <BottomButtonsContainer>
                    <CancelButton onClick={loading ? null : closeNewHabitsWindow} />
                    <BlueButton
                        onClick={loading ? null : requestCreation}
                        customStyle={{ 'font-size': '20px', width: '84px', height: '35px', loading }}
                    >
                        Salvar
                    </BlueButton>
                </BottomButtonsContainer>
            </InformationContainer>
        </HabitContainer>
    );
};
