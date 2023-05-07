import { Container } from "./styles";
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native';


export function Input({...rest}: TextInputProps){
    
    /**Recuperando o tema fora do arquivo style */
    const {COLORS} = useTheme()
    
    return(
        <Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}        
        />
        
    )
}