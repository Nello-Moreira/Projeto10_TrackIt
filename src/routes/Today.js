import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import PageSubHeading from '../components/headings/PageSubHeading';
import Footer from '../components/footer/Footer';
import Habit from '../components/habit/Habit';
import { todaysFormattedString } from '../auxiliary/time';
import UserContext from '../contexts/UserContext';
import HabitsContext from '../contexts/HabitsContext';
import { useContext } from 'react';


import { habits } from '../mockData';




export default function Today() {
    const { user } = useContext(UserContext);

    return (
        <>
            <Header />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>{todaysFormattedString()}</PageHeading>
                    <PageSubHeading activitiesPercentage={0}>Nenhum hábito concluído ainda</PageSubHeading>
                </PageHeadingContainer>

                {habits.map((habit) =>
                    <Habit habit={habit} key={habit.id} />
                )}

            </PageContainer>
            <Footer />
        </>
    );
};
