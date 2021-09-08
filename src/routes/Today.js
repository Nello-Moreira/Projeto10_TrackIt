import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import PageSubHeading from '../components/headings/PageSubHeading';
import Footer from '../components/footer/Footer';
import { todaysFormattedString } from '../auxiliary/time';


import { user } from '../mockData';




export default function Today(params) {
    return (
        <>
            <Header userImage={user.image} />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {todaysFormattedString()}
                    </PageHeading>
                    <PageSubHeading activitiesPercentage={0}>Nenhum hábito concluído ainda</PageSubHeading>
                </PageHeadingContainer>


            </PageContainer>
            <Footer />
        </>
    );
};
