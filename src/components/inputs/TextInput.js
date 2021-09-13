import styled from 'styled-components';

export default function TextInput({ value = '', valueRecorder, placeholder = 'Digite aqui', customStyle = {}, ...otherProps }) {
    return (
        <InputStyled
            value={value}
            onChange={valueRecorder ? (event) => valueRecorder(event.target.value) : null}
            placeholder={placeholder}
            customStyle={customStyle}
            {...otherProps}
        />
    );
};

const InputStyled = styled.input`
    font-size: 20px;
    color: ${({ customStyle }) => customStyle.loading ? 'rgb(175, 175, 175)' : 'rgb(70,70,70)'};
    width: ${({ customStyle }) => customStyle.width ? customStyle.width : '100%'};
    padding: 10px;
    background-color: ${({ customStyle }) => customStyle.loading ? 'rgb(242, 242, 242)' : 'rgb(255,255,255)'};
    border: 1px solid rgb(200, 200, 200);
    border-radius: 5px;
    outline: none;

    ::placeholder{
        color: rgb(160, 160, 160);
    }

    :focus {
      color: ${({ customStyle }) => customStyle.loading ? 'transparent' : 'rgb(70,70,70)'};
      text-shadow: ${({ customStyle }) => customStyle.loading ? '0px 0px 0px rgb(175, 175, 175)' : 'none'};
    }
`;