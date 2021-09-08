import { FooterContainer, ProgressbarContainer } from './FooterStyles';
import routes from "../../routes/routes";
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
                            backgroundColor: "#3e98c7",
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

function getDayPercentage() {
    const now = new Date();
    const midnightBefore = new Date();
    const midnightAfter = new Date();

    midnightBefore.setHours(0, 0, 0);
    midnightAfter.setHours(0, 0, 0);
    midnightAfter.setDate(now.getDate() + 1);

    const dayPercentage = (now - midnightBefore) / (midnightAfter - midnightBefore) * 100;

    return dayPercentage;
}
