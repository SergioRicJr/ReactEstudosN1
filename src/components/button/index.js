import { ButtonContainer } from "./styles"

export default function Button({lable, onClick}) {
    return (
        <ButtonContainer onClick={onClick} type="button">
            {lable} 
        </ButtonContainer>
    )
}