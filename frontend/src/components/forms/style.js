import style from 'styled-components'

export const Form = style.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: #f00;

`

export const Input = style.input`

    width: 300px;
    height: 20px;
    margin-top: 10px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 10px;

`

export const Button = style.button`

    width: 150px;
    height: 30px;
    margin-top: 20px;
    border-radius: 4px;
    border: none;
    outline: none;
    align-self: flex-end;
    margin-right: 50px;

`

export const Label = style.label`

    margin: 10px;
    align-self: flex-start;

`