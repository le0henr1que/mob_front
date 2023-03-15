
import { AppBar, Toolbar, IconButton, Typography, Drawer, List } from '@material-ui/core';
import { Menu, Close  } from '@material-ui/icons';
import { useEffect, useState } from "react"
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg"
import ButtonStyle from "../Button"
import { Input } from "../Input/index"
import { Text } from "../Text"
import "./styles.css"
import { StylesList, MakeStyleDrawer, useStyles } from './stylesMaterialUI'

export function Header(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMenuList, setIsMenuList] = useState<string[]>([]);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const classes = useStyles();

    var listMenu:string[] = [
        "Estabelecimento", 
        "Denuncias",
        "Mobilidade",
        "Dúvidas Frequentes",
        "Institucional", 
        "Sobre o Mob!", 
        "Trabalhe Conosco", 
        "SAC"
    ]
    useEffect(() => {
        setIsMenuList(listMenu)
    }, [])
    
    return (
        <div className="container-header">

            <div className="container-header-main">
                <div className="container-margin">
                    <img src={LogMob} />
                    <div className="input-search">
                        <Input type="text" variant="default" placeholder="Pesquisar" icon={true} />
                    </div>
                    <div className='container-menu-burguer'>
                        <Menu onClick={toggleDrawer} color="inherit" style={{cursor:'pointer'}}/>
                    </div>
                    <div className="div-button">
                        <ButtonStyle variant="medium-button">Fazer Login</ButtonStyle>               
                        <ButtonStyle variant="medium-button outlined">Cadastrar</ButtonStyle> 

                        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} classes={{paper: classes.drawer}}>

                            <List style={StylesList}>
                                <div className='top-sidebar'>
                                    <img src={LogMob} />
                                    <Close onClick={toggleDrawer} style={{cursor:'pointer'}}/>
                                </div>
                                <div className="div-button-sidebar">
                                    <ButtonStyle variant="medium-button">Fazer Login</ButtonStyle>               
                                    <ButtonStyle variant="medium-button outlined">Cadastrar</ButtonStyle> 
                                </div>
                                {
                                    isMenuList.map((item) => (
                                        <Text variant="muted font-regular subheadline">{item}</Text>
                                    ))
                                }
                            </List>
                        </Drawer>
                        
                    </div>
                </div>
            </div>
            <div className="container-menu-margin">
                <div className="container-menu">
                    {
                        isMenuList.map((item) => (
                            <Text variant="muted font-regular subheadline">{item}</Text>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}