import NewHabitContainer from '../containers/NewHabitContainer';
import TextInput from '../inputs/TextInput';

export default function NewHabit(params) {
    return (
        <NewHabitContainer>
            <TextInput placeholder="nome do hábito" />
        </NewHabitContainer>
    );
};
