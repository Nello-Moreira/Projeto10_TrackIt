import routes from '../routes/routes';
import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import { PageHeadingContainer, PageHeading } from '../components/containers/PageHeadingContainer';
import Footer from '../components/footer/Footer';
import CircleLoader from '../components/loader/CircleLoader';
import UserContext from '../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getHabitsHistory } from '../API/requests';

export default function History(params) {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [habitsHistory, setHabitsHistory] = useState([]);
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        if (!user.token) return;

        getHabitsHistory(user.token)
            .then(response => {
                setHabitsHistory(response.data)
                setLoading(false);
            })
            .catch(error => { alert('Algo deu errado. Tente recarregar a página.') });
    }, [user])

    if (!user.token) {
        history.push(routes.login);
        return null;
    };

    function dayStyle(locale, date) {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString(locale, options);
        const habitsDay = habitsHistory.find((element) => element.day === formattedDate);

        if (!habitsDay) return { noHabits: true };

        if (habitsDay.habits.filter(habit => !habit.done).length === 0) return { complete: true };

        return { complete: false };
    }

    return (
        <>
            <Header userImage={user.image} />

            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>Histórico</PageHeading>
                </PageHeadingContainer>

                {loading ?
                    <CircleLoader customStyle={{ height: '50vh' }} />
                    :
                    <CalendarContainer>
                        <Calendar
                            locale={'pt-BR'}
                            onChange={onChange}
                            value={value}
                            formatDay={(locale, date) => (
                                <StyledDay customStyle={dayStyle(locale, date)}>
                                    {date.getDate()}
                                </StyledDay>
                            )}
                        />
                    </CalendarContainer>
                }
            </PageContainer>

            <Footer />
        </>
    );
};

const CalendarContainer = styled.div`
    font-size: 18px;
    width: 93vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledDay = styled.p`
    width: 30px;
    height: 30px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ customStyle }) => customStyle.noHabits ? 'transparent' : customStyle.complete ? 'rgb(151, 249, 151)' : 'rgb(248, 184, 184)'};
`;