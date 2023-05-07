import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroups() {
    return(
        <Container>
            <Header showBackButton />
            <Content>
                <Icon/>

                <Highlight title="Nova Turma" subtitle="Crie a turma para adicionar as pessoas" />

                <Button title="Criar"/>
            </Content>
        </Container>
    )
}