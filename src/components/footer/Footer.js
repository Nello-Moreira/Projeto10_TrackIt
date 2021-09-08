import { FooterContainer, ProgressbarContainer } from './FooterStyles';
import routes from "../../routes/routes";
import { getDayPercentage } from '../../auxiliary/time';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    return (
        <FooterContainer>
            <Link to={routes.habits}>
                Hábitos
            </Link>


            <Link to={routes.today}>
                <ProgressbarContainer>
                    <CircularProgressbar
                        value={getDayPercentage()}
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "rgb(18, 107, 165)",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </ProgressbarContainer>
            </Link>


            <Link to={routes.history}>
                Histórico
            </Link>
        </FooterContainer>
    );
};
