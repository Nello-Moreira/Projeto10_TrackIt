import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer, RecordStatement, RecordDays } from '../containers/HabitContainer';
import CheckButton from '../buttons/CheckButton';
import { checkHabit, uncheckHabit } from '../../API/requests';
import UserContext from '../../contexts/UserContext';
import { useState, useContext } from 'react';


export default function Habit({ habit, updateHabits }) {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const toggleHabitstatus = () => {
        setLoading(true);

        return (habit.done ?
            uncheckHabit(habit, user.token)
                .then(response => {
                    updateHabits(habit);
                    setLoading(false);
                })
                .catch(response => {
                    alert('Houve algum erro. Por favor, tente novamente.')
                    setLoading(false);
                })
            :
            checkHabit(habit, user.token)
                .then(response => {
                    updateHabits(habit);
                    setLoading(false);
                })
                .catch(response => {
                    alert('Houve algum erro. Por favor, tente novamente.')
                    setLoading(false);
                })
        )
    }

    return (
        <HabitContainer>
            <InformationContainer>
                <HabitTitle>{habit.name}</HabitTitle>

                <RecordStatement>
                    Sequência atual:
                    <RecordDays green={habit.done}>
                        {` ${habit.currentSequence} dias`}
                    </RecordDays>
                </RecordStatement>

                <RecordStatement>
                    Seu record:
                    <RecordDays green={habit.highestSequence > 0 ? habit.highestSequence === habit.currentSequence : false}>
                        {` ${habit.highestSequence} dias`}
                    </RecordDays>
                </RecordStatement>
            </InformationContainer>

            <SideButtonContainer>
                <CheckButton
                    done={habit.done}
                    onClick={loading ? null : toggleHabitstatus}
                />
            </SideButtonContainer>
        </HabitContainer>
    );
};
