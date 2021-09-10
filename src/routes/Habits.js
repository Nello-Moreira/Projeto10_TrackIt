import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import BlueButton from '../components/buttons/BlueButton';
import NewHabit from '../components/habit/NewHabit';
import WarningOfNoHabits from '../components/habit/WarningOfNoHabits';
import CreatedHabit from '../components/habit/CreatedHabit';
import Footer from '../components/footer/Footer';
import CircleLoader from '../components/loader/CircleLoader';
import UserContext from '../contexts/UserContext';
import { useState, useContext, useEffect } from 'react';
import { getAllHabits } from '../API/requests';

export default function Habits() {
    const { user } = useContext(UserContext);
    const [adding, setAdding] = useState(false);
    const [loading, setLoading] = useState(true);
    const [habits, setHabits] = useState([]);
    const [newHabitObject, setNewHabitObject] = useState({ name: '', days: [] });

    useEffect(() => {
        getAllHabits(user.token)
            .then(response => {
                setHabits(response.data);
                setLoading(false);
            });
    }, [user.token]);

    return (
        <>
            <Header />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {'Meus hábitos'}
                        <BlueButton
                            onClick={adding ? null : () => setAdding(true)}
                            customStyle={{ width: '40px', height: '35px' }}
                        >
                            +
                        </BlueButton>
                    </PageHeading>
                </PageHeadingContainer>

                {adding ?
                    <NewHabit
                        habitObject={newHabitObject}
                        updateHabitObject={setNewHabitObject}
                        closeNewHabitsWindow={() => setAdding(false)}
                        habits={{ data: habits, setHabits }}
                    />
                    :
                    null
                }

                {loading ?
                    <CircleLoader />
                    :
                    habits.length === 0 ?
                        <WarningOfNoHabits>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a acompanhar!
                        </WarningOfNoHabits>
                        :
                        habits.map((habit) =>
                            <CreatedHabit
                                habit={habit}
                                habits={{ data: habits, setHabits }}
                                key={habit.id}
                            />
                        )
                }

                {
                }

            </PageContainer>
            <Footer />
        </>
    );
}
