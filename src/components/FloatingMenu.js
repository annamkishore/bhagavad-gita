import React from 'react'
import {Container, Button, Link} from 'react-floating-action-button'

export default function FloatingMenu() {
    return <Container>
        <Link href={process.env.REACT_APP_BASE_NAME}
              icon="far fa-sticky-note"
              styles={{backgroundColor: "grey"}}
        />
    </Container>
}
