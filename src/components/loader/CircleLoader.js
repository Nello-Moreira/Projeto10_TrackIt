import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function CircleLoader() {
    return (
        <Container>
            <Loader type="Oval" color="rgb(18, 107, 165)" height={80} width={80} />
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;