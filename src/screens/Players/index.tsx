import { Header } from "@components/Header";
import { Container } from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players(){
    return(
        <Container>
            <Header showBackButton/>

            <Highlight
             title="Nome da Turma"
             subtitle="Adicione a glera e separe os times"
            />

            <ButtonIcon/>
        </Container>
    )
}