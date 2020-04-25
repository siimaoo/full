import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Label, Input, Button } from '../style'
import api from '../../../services/api';
export default () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data)
        api.post('/auth/register', {
            data,
        })

    }

    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Name: </Label>
            <Input name="nome" ref={register({ required: true })} />
            <Label>E-mail: </Label>
            <Input name="email" ref={register({ required: true })} />
            <Label>Password: </Label>
            <Input name="senha" ref={register({ required: true })} />
            <Button type="submit"> Registrar </Button>
        </Form>

    )
}
