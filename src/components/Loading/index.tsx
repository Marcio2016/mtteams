
import { Container, LoadIndicator } from './styles'
import { useState } from 'react';

export function Loading(){    
    
    return(
        <Container>
            <LoadIndicator />
        </Container>
    )
}