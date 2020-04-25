import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Label, Input, Button } from '../style'

export default () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => { console.log(data) }

    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>E-mail: </Label>
            <Input name="email" ref={register({ required: true })} />
            <Label>Password: </Label>
            <Input name="senha" ref={register({ required: true })} />
            <Button type="submit"> Login </Button>
        </Form>

    )
}
