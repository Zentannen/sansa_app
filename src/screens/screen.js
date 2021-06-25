import React,{useState} from 'react'
import {Paper} from '@material-ui/core'
export default function Screen(){
    const [screen,setScreen] = useState(1)
    const changeScreen = (value) => {
        console.log(typeof value === 'number'&&value!==0&&value<=5)
        if(typeof value === 'number'&&value!==0&&value<=5){
            setScreen(value)
        }
    }
    const [test,setTest] = useState(0)
    return(
        <div>
            <Paper>asd</Paper>
        </div>
    )
}