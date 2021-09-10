import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import PageSubHeading from '../components/headings/PageSubHeading';
import Footer from '../components/footer/Footer';
import Habit from '../components/habit/Habit';
import WarningOfNoHabits from '../components/habit/WarningOfNoHabits';
import CircleLoader from '../components/loader/CircleLoader';
import { todaysFormattedString } from '../auxiliary/time';
import UserContext from '../contexts/UserContext';
import TodaysHabitsPercentage from '../contexts/TodaysHabitsPercentage';
import { useState, useContext, useEffect } from 'react';
import { getTodaysHabits } from '../API/requests';



import { habits } from '../mockData';




export default function Today() {
    const { user } = useContext(UserContext);
    const { habitsPercentage, setHabitsPercentage } = useContext(TodaysHabitsPercentage);
    const [loading, setLoading] = useState(true);
    const [todaysHabits, setTodaysHabits] = useState([]);

    useEffect(() => {
        getTodaysHabits(user.token)
            .then(response => {
                setTodaysHabits(response.data);
                updateHabitsPercentage();
                setLoading(false);
            });
    }, [user.token]);

    function upDateHabit(habit) {
        setTodaysHabits(
            todaysHabits.map(oldHabit => oldHabit.id === habit.id ? habit : oldHabit)
        );
        updateHabitsPercentage();
    }

    function updateHabitsPercentage() {
        const numberOfHabits = todaysHabits.length;
        const numberOfDoneHabits = todaysHabits.filter((habit) => habit.done).length;

        setHabitsPercentage({
            ...habitsPercentage,
            done: todaysHabits.filter((habit) => habit.done).length,
            total: todaysHabits.length
        })

    }

    return (
        <>
            <Header />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>{todaysFormattedString()}</PageHeading>
                    {todaysHabits.length === 0 ?
                        null
                        :
                        <PageSubHeading activitiesPercentage={0}>Nenhum hábito concluído ainda</PageSubHeading>
                    }
                </PageHeadingContainer>

                {loading ?
                    <CircleLoader />
                    :
                    todaysHabits.length === 0 ?
                        <WarningOfNoHabits>
                            Você não tem nenhum hábito agendado para hoje.
                        </WarningOfNoHabits>
                        :
                        todaysHabits.map((habit) =>
                            <Habit
                                habit={habit}
                                upDateHabit={upDateHabit}
                                key={habit.id}
                            />
                        )
                }
            </PageContainer>
            <Footer />
        </>
    );
};
