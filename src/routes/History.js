import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import { PageHeadingContainer, PageHeading } from '../components/containers/PageHeadingContainer';
import Footer from '../components/footer/Footer';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import styled from 'styled-components';

export default function History(params) {
    const { user } = useContext(UserContext);

    return (
        <>
            <Header userImage={user.image} />

            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>Histórico</PageHeading>
                </PageHeadingContainer>

                <FutureFeature>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </FutureFeature>
            </PageContainer>

            <Footer />
        </>
    );
};

const FutureFeature = styled.div`
    font-size: 18px;
    color: rgba(102, 102, 102, 1);
    width: 93vw;
`;
