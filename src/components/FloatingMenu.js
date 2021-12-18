import React from 'react'
import {Container, Button, Link} from 'react-floating-action-button'

export default function FloatingMenu() {
    return <Container>
        <Link href="/bhagavad-gita"
              icon="far fa-sticky-note"
              styles={{backgroundColor: "grey"}}
        />
    </Container>
}
