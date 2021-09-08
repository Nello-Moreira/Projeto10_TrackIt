import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import PageSubHeading from '../components/headings/PageSubHeading';
import BlueButton from '../components/buttons/BlueButton';
import Footer from '../components/footer/Footer';


import { user } from '../mockData';




export default function Today(params) {
    return (
        <>
            <Header userImage={user.image} />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {"Dia, xx/xx"}
                        <p>teste</p>
                    </PageHeading>
                    <PageSubHeading>Nenhum hábito concluído ainda</PageSubHeading>
                </PageHeadingContainer>


            </PageContainer>
            <Footer />
        </>
    );
};
