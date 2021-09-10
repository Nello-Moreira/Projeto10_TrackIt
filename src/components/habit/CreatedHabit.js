import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer } from '../containers/HabitContainer';
import DaysContainer from '../containers/DaysContainer';
import TrashButton from '../buttons/TrashButton';
import CircleLoader from '../loader/CircleLoader';
import UserContext from '../../contexts/UserContext';
import { useState, useContext } from 'react';
import { deleteHabit } from '../../API/requests';


export default function CreatedHabit({ habit, habits }) {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    function requestDeleteHabit() {
        if (window.confirm('Deseja deletar esse hábito?')) {
            setLoading(true);

            deleteHabit(habit.id, user.token)
                .then((response) =>
                    habits.setHabits(habits.data.filter((otherHabit) => otherHabit.id !== habit.id))
                )
                .catch((response) => alert('Algo deu errado. Por favor, tente de novo.'));
        }
    }

    return (
        <HabitContainer>
            {loading ?
                <CircleLoader />
                :
                <>
                    <InformationContainer>
                        <HabitTitle>{habit.name}</HabitTitle>
                        <DaysContainer selectedDays={habit.days} />
                    </InformationContainer>
                    <SideButtonContainer>
                        <TrashButton onClick={loading ? null : requestDeleteHabit} />
                    </SideButtonContainer>
                </>
            }
        </HabitContainer>
    );
};
