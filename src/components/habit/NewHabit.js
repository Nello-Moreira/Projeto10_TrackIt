import { NewHabitContainer, ButtonsContainer } from '../containers/NewHabitContainer';
import TextInput from '../inputs/TextInput';
import CancelButton from '../buttons/CancelButton';
import BlueButton from '../buttons/BlueButton';

export default function NewHabit(params) {
    return (
        <NewHabitContainer>
            <TextInput placeholder="nome do hábito" />
            <ButtonsContainer>
                <CancelButton />
                <BlueButton customStyle={{ 'font-size': '20px', width: '84px', height: '35px' }}>Salvar</BlueButton>
            </ButtonsContainer>
        </NewHabitContainer>
    );
};
