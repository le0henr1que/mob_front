
import { AppBar, Toolbar, IconButton, Typography, Drawer, List } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useEffect, useState } from "react"
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg"
import ButtonStyle from "../Button"
import { Input } from "../Input/index"
import { Text } from "../Text"
import "./styles.css"

export function Header(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMenuList, setIsMenuList] = useState<string[]>([]);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

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
                        <Menu onClick={toggleDrawer} color="inherit"/>
                    </div>
                    <div className="div-button">
                        <ButtonStyle variant="medium-button">Fazer Login</ButtonStyle>               
                        <ButtonStyle variant="medium-button outlined">Cadastrar</ButtonStyle> 

                        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                            <List>
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
            <div className="container-menu">
                {
                    isMenuList.map((item) => (
                        <Text variant="muted font-regular subheadline">{item}</Text>
                    ))
                }
            </div>
        </div>
    )
}