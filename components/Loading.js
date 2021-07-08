import React from 'react'
import styled from 'styled-components'

function Loading() {
    return (

        <center>
            <div>
                <Loader src="/whatsapp.png" alt="" />
            </div>
            
        </center>
    )
}

export default Loading


const Loader = styled.img`
width:200px;
height:200px;
animation: spinner .4s infinite;
margin-bottom: 10px;


@keyframes spinner{
    0%{
        transform: scale(1.02);
    }
    100%{
        transform: scale(1.06);
    }
}
`