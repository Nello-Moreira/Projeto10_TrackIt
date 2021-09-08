import styled from "styled-components";

const PageSubHeadingConainer = styled.div`
    width: 100%;
    font-size: 18px;
    color: ${({ percentage }) => percentage > 0 ? "rgba(143, 197, 73, 1)" : "rgba(150, 150, 150, 1)"};
    margin-top: 5px;
`;

export default PageSubHeadingConainer;
