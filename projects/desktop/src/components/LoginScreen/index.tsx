import React from 'react'
import { Title } from './styles'
import { Container, LeftSide, RightSide } from './parts'
import { Form as FinalForm } from 'react-final-form'
import { Form } from './form'

export const LoginScreen = (): JSX.Element => {
    return (
        <Container>
            <LeftSide>
                <Title>
                    <span>Vos</span> amis,<br/>
                    <span>Vos</span> souvenirs,<br/>
                    <span>Vos</span> données,<br />
                    Chez <span>vous</span>.
                </Title>

                <FinalForm
                    onSubmit={() => console.log('oui')}
                    render={({handleSubmit}) => <Form handleSubmit={handleSubmit} />}
                />
            </LeftSide>
            <RightSide>
                <br/>
            </RightSide>
        </Container>
    )
}
