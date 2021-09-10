import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer } from '../containers/HabitContainer';
import DaysContainer from '../containers/DaysContainer';
import TrashButton from '../buttons/TrashButton';
import UserContext from '../../contexts/UserContext';
import HabitsContext from '../../contexts/HabitsContext';
import { useContext } from 'react';
import { deleteHabit } from '../../API/requests';


export default function CreatedHabit({ habit }) {
    const { user } = useContext(UserContext);
    const { habits, setHabits } = useContext(HabitsContext);

    function requestDeleteHabit() {
        if (window.confirm('Deseja deletar esse hábito?')) {
            deleteHabit(habit.id, user.token)
                .then((response) => setHabits(habits.filter((element) => element.id !== habit.id)))
                .catch((response) => alert('Algo deu errado. Por favor, tente de novo.'));
        }
    }

    return (
        <HabitContainer>
            <InformationContainer>
                <HabitTitle>{habit.name}</HabitTitle>
                <DaysContainer selectedDays={habit.days} />
            </InformationContainer>
            <SideButtonContainer>
                <TrashButton onClick={requestDeleteHabit} />
            </SideButtonContainer>
        </HabitContainer>
    );
};
