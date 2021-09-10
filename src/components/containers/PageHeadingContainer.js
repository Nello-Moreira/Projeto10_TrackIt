import styled from "styled-components";

const PageHeadingContainer = styled.div`
    width: 93vw;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageHeading = styled.div`
    font-weight: 700;
    font-size: 23px;
    color: rgba(18, 107, 165, 1);
    width: 100%;
    min-height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PageSubHeading = styled.div`
    width: 100%;
    font-size: 18px;
    color: ${({ activitiesPercentage }) => activitiesPercentage > 0 ? "rgb(117, 184, 31)" : "rgb(150, 150, 150, 1)"};
    margin-top: 5px;
`;

export { PageHeadingContainer, PageHeading, PageSubHeading };