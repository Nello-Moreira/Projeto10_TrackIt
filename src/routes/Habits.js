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
import { useContext } from 'react';



import { habits } from '../mockData';



export default function Habits(params) {
    const { user } = useContext(UserContext);

    return (
        <>
            <Header />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {"Meus hábitos"}
                        <BlueButton customStyle={{ width: '40px', height: '35px' }}>+</BlueButton>
                    </PageHeading>
                </PageHeadingContainer>

                <NewHabit />

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
