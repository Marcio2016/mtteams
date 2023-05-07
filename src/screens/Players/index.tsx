import { Header } from "@components/Header";
import { Container } from "./style";
import { Highlight } from "@components/Highlight";

export function Players(){
    return(
        <Container>
            <Header showBackButton/>

            <Highlight
             title="Nome da Turma"
             subtitle="Adicione a glera e separe os times"
            />
            
        </Container>
    )
}