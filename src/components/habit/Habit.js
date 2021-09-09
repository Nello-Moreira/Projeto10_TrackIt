import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer } from '../containers/HabitContainer';
import CheckButton from '../buttons/CheckButton';

export default function Habit({ habit }) {

    return (
        <HabitContainer>
            <InformationContainer>
                <HabitTitle>{habit.name}</HabitTitle>
                
            </InformationContainer>
            <SideButtonContainer>
                <CheckButton done={false} />
            </SideButtonContainer>
        </HabitContainer>
    );
};
