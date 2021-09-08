import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import PageHeadingContainer from '../components/containers/PageHeadingContainer';
import PageHeading from '../components/headings/PageHeading';
import BlueButton from '../components/buttons/BlueButton';
import Footer from '../components/footer/Footer';


import { user } from '../mockData';



export default function Habits(params) {
    return (
        <>
            <Header userImage={user.image} />
            <PageContainer>
                <PageHeadingContainer>
                    <PageHeading>
                        {"Meus hábitos"}
                        <BlueButton customStyle={{width:'40px', height: '35px'}}>+</BlueButton>                    
                    </PageHeading>
                </PageHeadingContainer>


            </PageContainer>
            <Footer />
        </>
    );
}
