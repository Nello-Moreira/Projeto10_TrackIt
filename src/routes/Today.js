import routes from '../routes/routes';
import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import { PageHeadingContainer, PageHeading, PageSubHeading } from '../components/containers/PageHeadingContainer';
import CircleLoader from '../components/loader/CircleLoader';
import Habit from '../components/habit/Habit';
import WarningOfNoHabits from '../components/habit/WarningOfNoHabits';
import Footer from '../components/footer/Footer';
import UserContext from '../contexts/UserContext';
import TodaysHabitsPercentage from '../contexts/TodaysHabitsPercentage';
import { useState, useContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { getTodaysHabits } from '../API/requests';
import { todaysFormattedString } from '../auxiliary/time';

export default function Today() {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const { habitsPercentage, setHabitsPercentage } = useContext(TodaysHabitsPercentage);
    const [loading, setLoading] = useState(true);
    const [todaysHabits, setTodaysHabits] = useState([]);
    const { done, total, getPercentage } = habitsPercentage;

    const updateHabits = useCallback(() => {
        getTodaysHabits(user.token)
            .then(response => {

                setHabitsPercentage({
                    done: response.data.filter((habit) => habit.done).length,
                    total: response.data.length,
                    getPercentage
                })

                setTodaysHabits(response.data);
                setLoading(false);
            });
    }, [user.token, getPercentage, setHabitsPercentage]);

    useEffect(() => {
        if (!user.token) return;

        updateHabits();

    }, [user.token, updateHabits]);

    if (!user.token) {
        history.push(routes.login);
        return null;
    };

    return (
        <>
            <Header />

            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>{todaysFormattedString()}</PageHeading>
                    {todaysHabits.length === 0 ?
                        null
                        :
                        getPercentage(done, total) > 0 ?
                            <PageSubHeading
                                activitiesPercentage={getPercentage(done, total)}
                            >
                                {`${getPercentage(done, total).toFixed(0)}% dos hábitos concluídos`}
                            </PageSubHeading>
                            :
                            <PageSubHeading
                                activitiesPercentage={0}
                            >
                                Nenhum hábito concluído ainda
                            </PageSubHeading>
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
                                updateHabits={updateHabits}
                                key={habit.id}
                            />
                        )
                }
            </PageContainer>

            <Footer />
        </>
    );
};
