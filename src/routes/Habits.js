import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';



import { user } from '../mockData';

export default function Habits(params) {
    return (
        <>
            <Header userImage={user.image} />

            <Footer />
        </>
    );
}
