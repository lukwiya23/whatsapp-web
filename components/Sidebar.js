import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import * as EmailValidator from 'email-validator'
import { auth } from '../firebase'


function Sidebar() {

    const createChat = (
        
    ) =>{
        const input = prompt("Enter person's username or email")
        if(!input) return null;
        if(EmailValidator.validate(input)){
            //we'll be right back..
        }
    }

    return (
        <Container>

            <Header>
                < UserAvatar onClick={()=>auth.signOut()} />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                         <MoreVertIcon />
                    </IconButton>


                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon/>
                <SearchInput placeholder="Search chat"/>
            </Search>

            <SidebarButton onClick={createChat}>Start New Chat</SidebarButton>

{/* LIST OF CHATS */}

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
`

const Header = styled.div`
display: flex;
top: 0;
position:sticky;
justify-content: space-between;
background-color:white;
z-index:1;
align-items:center;
padding:15px;
height:80px;
border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`
cursor:pointer;

:hover{
    opacity:0.8;
}
`

const Search = styled.div`
display:flex;
align-items: center;
padding:20px;
border-radius:2px;
`


const SearchInput = styled.input`
outline:none;
border:none;
flex:1;
`
const IconsContainer = styled.div``

const SidebarButton = styled(Button)`
width:100%;

&&&{
    border-top:1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
}
`