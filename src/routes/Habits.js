import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import BlueButton from '../components/buttons/BlueButton';
import NewHabit from '../components/habit/NewHabit';
import WarningOfNoHabits from '../components/habit/WarningOfNoHabits';
import CreatedHabit from '../components/habit/CreatedHabit';
import Footer from '../components/footer/Footer';
import UserContext from '../contexts/UserContext';
import HabitsContext from '../contexts/HabitsContext';
import { useState, useContext } from 'react';



import { habits } from '../mockData';



export default function Habits(params) {
    const { user } = useContext(UserContext);
    const { habits, setHabits } = useContext(HabitsContext);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);
    const [newHabitObject, setNewHabitObject] = useState({ name: '', days: [] });

    console.log(newHabitObject);


    return (
        <>
            <Header />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {"Meus hábitos"}
                        <BlueButton onClick={adding ? null : () => setAdding(true)} customStyle={{ width: '40px', height: '35px' }}>+</BlueButton>
                    </PageHeading>
                </PageHeadingContainer>

                {adding ?
                    <NewHabit
                        cancelAddition={() => setAdding(false)}
                        habitObject={newHabitObject}
                        updateHabitObject={setNewHabitObject}
                    />
                    :
                    null}


                <WarningOfNoHabits>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a acompanhar!
                </WarningOfNoHabits>



                {habits.map((habit) =>
                    <CreatedHabit habit={habit} key={habit.id} />
                )}



            </PageContainer>
            <Footer />
        </>
    );
}
