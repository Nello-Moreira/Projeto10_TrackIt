import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import BlueButton from '../components/buttons/BlueButton';
import NewHabit from '../components/habit/NewHabit';
import WarningOfNoHabits from '../components/habit/WarningOfNoHabits';
import CreatedHabit from '../components/habit/CreatedHabit';
import Footer from '../components/footer/Footer';
import HabitsContext from '../contexts/HabitsContext';
import { useState, useContext } from 'react';

export default function Habits(params) {
    const { habits } = useContext(HabitsContext);
    const [adding, setAdding] = useState(false);
    const [newHabitObject, setNewHabitObject] = useState({ name: '', days: [] });

    return (
        <>
            <Header />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {'Meus hábitos'}
                        <BlueButton onClick={adding ? null : () => setAdding(true)} customStyle={{ width: '40px', height: '35px' }}>+</BlueButton>
                    </PageHeading>
                </PageHeadingContainer>

                {adding ?
                    <NewHabit
                        habitObject={newHabitObject}
                        updateHabitObject={setNewHabitObject}
                        cancelAddition={() => setAdding(false)}
                    />
                    :
                    null}

                {habits.length === 0 ?
                    <WarningOfNoHabits>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a acompanhar!
                    </WarningOfNoHabits>
                    :
                    habits.map((habit) =>
                        <CreatedHabit habit={habit} key={habit.id} />
                    )
                }

            </PageContainer>
            <Footer />
        </>
    );
}
