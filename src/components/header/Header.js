import { HeaderContainer, LogoText, ProfileImage, Menu } from './HeaderStyles';
import UserContext from '../../contexts/UserContext';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';

export default function Header() {
    const { user } = useContext(UserContext);
    const [menuOpened, setMenuOpened] = useState(false);
    const history = useHistory();

    function logout() {
        setMenuOpened(false);
        localStorage.removeItem('trackItUser');
        history.push(routes.login);
    }


    return (
        <>
            <HeaderContainer>
                <LogoText>TrackIt</LogoText>
                <ProfileImage src={user.image} onClick={() => { setMenuOpened(!menuOpened) }} />

            </HeaderContainer>

            <Menu menuOpened={menuOpened}>
                <span>{user.name}</span>
                <button onClick={logout}>Teste</button>
            </Menu>
        </>
    );
};
