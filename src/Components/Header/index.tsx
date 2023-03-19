
import { AppBar, Toolbar, IconButton, Typography, Drawer, List } from '@material-ui/core';
import { Menu, Close  } from '@material-ui/icons';
import { useEffect, useState } from "react"
import { MenuItem } from '../../@types';
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg"
import ButtonStyle from "../Button"
import { Input } from "../Input/index"
import { Text } from "../Text"
import "./styles.css"
import { StylesList, MakeStyleDrawer, useStyles } from './stylesMaterialUI'
import { useNavigate } from 'react-router-dom';

export function Header(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMenuList, setIsMenuList] = useState<MenuItem[]>([]);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const classes = useStyles();
    const navigate = useNavigate()

    var listMenu:MenuItem[] = [
        {label:"Estabelecimento", href:"/notfound"},
        {label:"Denuncias", href:"/notfound"},
        {label:"Mobilidade", href:"/notfound"},
        {label:"Dúvidas Frequentes", href:"/notfound"},
        {label:"Institucional", href:"/notfound"},
        {label:"Sobre o Mob!", href:"/notfound"},
        {label:"Trabalhe Conosco", href:"/notfound"},
        {label:"SAC", href:"/notfound"},
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
                        <ButtonStyle variant="medium-button" onClick={() => navigate("/login")}>Fazer Login</ButtonStyle>               
                        <ButtonStyle variant="medium-button outlined" onClick={() => navigate("/")}>Cadastrar</ButtonStyle> 

                        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} classes={{paper: classes.drawer}}>

                            <List style={StylesList}>
                                <div className='top-sidebar'>
                                    <img src={LogMob} />
                                    <Close onClick={toggleDrawer} style={{cursor:'pointer'}}/>
                                </div>
                                <div className="div-button-sidebar">
                                    <ButtonStyle variant="medium-button" onClick={() => navigate("/login")}>Fazer Login</ButtonStyle>               
                                    <ButtonStyle variant="medium-button outlined" onClick={() => navigate("/")}>Cadastrar</ButtonStyle> 
                                </div>
                                {
                                    isMenuList.map((item) => (
                                        <a href={item.href} className="link">
                                            <Text variant="muted font-regular subheadline">{item.label}</Text>
                                        </a>
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
                            <a href={item.href} className="link">
                                <Text variant="muted font-regular subheadline">{item.label}</Text>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}