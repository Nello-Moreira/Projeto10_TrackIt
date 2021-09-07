import Header from '../components/header/Header';


import { user } from '../mockData';

export default function Habits(params) {
    return (
        <>
            <Header userImage={user.image}/>
        </>
    );
}
