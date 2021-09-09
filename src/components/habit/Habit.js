import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer, RecordStatement, RecordDays } from '../containers/HabitContainer';
import CheckButton from '../buttons/CheckButton';

export default function Habit({ habit }) {

    return (
        <HabitContainer>
            <InformationContainer>
                <HabitTitle>{habit.name}</HabitTitle>
                <RecordStatement>
                    Sequência atual: <RecordDays>5 dias</RecordDays>
                </RecordStatement>
                <RecordStatement>
                    Seu record: <RecordDays>5 dias</RecordDays>
                </RecordStatement>
            </InformationContainer>
            <SideButtonContainer>
                <CheckButton done={false} />
            </SideButtonContainer>
        </HabitContainer>
    );
};
