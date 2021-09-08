import styled from "styled-components";

const PageSubHeadingConainer = styled.div`
    width: 100%;
    font-size: 18px;
    color: ${({ activitiesPercentage }) => activitiesPercentage > 0 ? "rgb(117, 184, 31)" : "rgb(150, 150, 150, 1)"};
    margin-top: 5px;
`;

export default PageSubHeadingConainer;
