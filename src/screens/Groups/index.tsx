import { Container } from "./styles"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"


export const Groups = () => {
    return(
        <Container>
            <Header />
            <Highlight title="Turma" subtitle="Jogue com a sua turma"/>            
        </Container>
    )
}