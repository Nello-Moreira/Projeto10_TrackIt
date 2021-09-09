import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function BlueButton({ customStyle = {}, onClick = null, children }) {

    return (
        <Button customStyle={customStyle} onClick={onClick}>
            {customStyle.loading ?
                <Loader
                    type="ThreeDots"
                    color="rgb(255, 255, 255)"
                    height={'20'}
                    width={'50'}
                />
                :
                children
            }
        </Button>
    )
};

const Button = styled.button`
    font-size:${({ customStyle }) => customStyle.fontSize ? customStyle.fontSize : '21px'};
    color: rgb(255, 255, 255);
    width: ${({ customStyle }) => customStyle.width ? customStyle.width : '90%'};
    height: ${({ customStyle }) => customStyle.height ? customStyle.height : '45px'};
    background-color: rgb(18, 107, 165);
    border: none;
    border-radius: 5px;

    :hover{
        background-color: ${({ customStyle }) => customStyle.loading ? 'rgb(18, 107, 165)' : 'rgb(82, 182, 255)'};;
    }

    >div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
