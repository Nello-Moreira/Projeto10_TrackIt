import { FooterContainer, ProgressbarContainer } from './FooterStyles';
import routes from "../../routes/routes";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useContext } from 'react';
import TodaysHabitsPercentage from "../../contexts/TodaysHabitsPercentage";

export default function Footer() {
    const { habitsPercentage } = useContext(TodaysHabitsPercentage);

    return (
        <FooterContainer>
            <Link to={routes.habits}>
                Hábitos
            </Link>

            <Link to={routes.today}>
                <ProgressbarContainer>
                    <CircularProgressbar
                        value={habitsPercentage.getPercentage(habitsPercentage.done, habitsPercentage.total)}
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
