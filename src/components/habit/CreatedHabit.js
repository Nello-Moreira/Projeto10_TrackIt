import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer } from '../containers/HabitContainer';
import DaysContainer from '../containers/DaysContainer';
import TrashButton from '../buttons/TrashButton';

export default function CreatedHabit({ habit }) {
    function deleteHabit() {
        if (window.confirm('Deseja deletar esse hábito?')) {
            console.log(habit);
        }
    }

    return (
        <HabitContainer>
            <InformationContainer>
                <HabitTitle>{habit.name}</HabitTitle>
                <DaysContainer selectedDays={habit.days} />
            </InformationContainer>
            <SideButtonContainer>
                <TrashButton onClick={deleteHabit} />
            </SideButtonContainer>
        </HabitContainer>
    );
};
