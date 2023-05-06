import { GroupCard } from "@components/GroupCard"
import { Container } from "./styles"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { useState } from "react"
import { FlatList } from "react-native"


export const Groups = () => {
    
    const [groups, setGroups] = useState<string[]>(['Galera Dev', 'Guerreiros Z'])
    
    return(
        <Container>
            <Header />
            <Highlight title="Turma" subtitle="Jogue com a sua turma"/>

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <GroupCard title={item}/>
                )}            
            />

        </Container>
    )
}