import { HabitContainer, InformationContainer, HabitTitle, SideButtonContainer, RecordStatement, RecordDays } from '../containers/HabitContainer';
import CheckButton from '../buttons/CheckButton';
import { checkHabit, uncheckHabit } from '../../API/requests';

export default function Habit({ habit, upDateHabit }) {



    /* implementar toggle check habit */





    return (
        <HabitContainer>
            <InformationContainer>
                <HabitTitle>{habit.name}</HabitTitle>

                <RecordStatement>
                    Sequência atual: <RecordDays>{`${habit.currentSequence} dias`}</RecordDays>
                </RecordStatement>

                <RecordStatement>
                    Seu record: <RecordDays>{`${habit.highestSequence} dias`}</RecordDays>
                </RecordStatement>
            </InformationContainer>
            
            <SideButtonContainer>
                <CheckButton done={habit.done} />
            </SideButtonContainer>
        </HabitContainer>
    );
};
