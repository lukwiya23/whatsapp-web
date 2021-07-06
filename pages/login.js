import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>
              Login Page
            </title>
            </Head>

            <LoginContainer>
            < Logo  src="/whatsapp.png" />
            <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login


const Container = styled.div`
display:grid;
place-items:center;
height:100vh;
background-color: whitesmoke;
`

const LoginContainer = styled.div`
display:flex;
flex-direction:column;
background-color: white;
border-radius: 15px;
transition: .3s;
padding: 100px;
align-items: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

:hover{
    transform:scale(1.05)
}

`

const Logo = styled.img`
width:200px;
height:200px;
margin-bottom:50px;

`

