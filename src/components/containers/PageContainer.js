import styled from "styled-components";

const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: rgb(229,229,229);
    display: flex;
    flex-direction: column;
    align-items: center;

    >*:first-child{
        margin-top: 100px;
    }

    >*:last-child{
        margin-bottom: 130px;
    }
`;

export default PageContainer;