import { InputContainer, InputC } from "./styles";

const Input = ({value}) => {
    return (
        <InputContainer>
           <InputC disabled value={value} />
        </InputContainer>
    );
}

export default Input;