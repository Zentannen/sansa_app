import React,{useState} from 'react'
import {Paper,AppBar,Toolbar,makeStyles,IconButton,Drawer,Typography,Divider} from '@material-ui/core'
import {Menu,Close} from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100vw',
        height:'100vh',
        overflow:"scroll"
    },
    AppBar: {
      flexGrow: 1,
    },
  }));

export default function Screen({desktop}){
    const classes = useStyles();
    const [screen,setScreen] = useState(1)
    const changeScreen = (value) => {
        console.log(typeof value === 'number'&&value!==0&&value<=5)
        if(typeof value === 'number'&&value!==0&&value<=5){
            setScreen(value)
        }
    }
    const [sidebarOpen,setSidebarOpen]=useState(false)
    const changeSidebarOpen = (boolean) => {
        setSidebarOpen(boolean)
    }
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={()=>changeSidebarOpen(true)}>
                        <Menu/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={sidebarOpen}>
                <div style={{maxWidth:desktop?'90vw':'',width:desktop?'':'100vw', minWidth:'30vw',height:'100vh'}}>
                    <Toolbar style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <Typography>SIA</Typography>
                        <IconButton onClick={()=>changeSidebarOpen(false)}>
                            <Close/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <Toolbar>
                        <Typography>What are space winds?</Typography>
                    </Toolbar>
                    <Divider/>
                    <Toolbar>
                        <Typography>What are space winds?</Typography>
                    </Toolbar>
                    <Divider/>
                    <Toolbar>
                        <Typography>What are space winds?</Typography>
                    </Toolbar>
                    <Divider/>
                </div>
            </Drawer>
            <Toolbar/>
            <Paper>asd</Paper>
        </div>
    )
}