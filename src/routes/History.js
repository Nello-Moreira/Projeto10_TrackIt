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
    const [habitsHistory, setHabitsHistory] = useState(true);
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        getHabitsHistory(user.token)
            .then(response => {
                setHabitsHistory(response.data)
            })
            .catch(error => { alert('Algo deu errado. Tente recarregar a página.') });
    }, [user])

    if (!user.token) {
        history.push(routes.login);
        return null;
    };

    function returnTeste(locale, date) {
        console.log({ locale, date });

        return (
            <StyledDay>{date.getDate()}</StyledDay>
        )
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
                            formatDay={(locale, date) => returnTeste(locale, date)}
                        />
                    </CalendarContainer>
                }
            </PageContainer>

            <Footer />
        </>
    );
};

const CalendarContainer = styled.div`
    width: 93vw;
`;

const StyledDay = styled.span`
    background-color: lightblue;
`;