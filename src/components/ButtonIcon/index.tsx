import { Container, Icon, ButtonIconStyleProps } from "./styles";
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


type Props  = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconStyleProps;
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props){
    return(
        <Container >
            <Icon name ={icon} type={type}/>
        </Container>    
    )
}