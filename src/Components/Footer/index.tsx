import "./styles.css"
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg"
import { useEffect, useState } from "react";
import { Text } from "../Text";
import { MenuItem } from "../../@types";

export function Footer(){
    const [isMenuList, setIsMenuList] = useState<MenuItem[]>([]);

    var listMenu:MenuItem[] = [
        {label:"Estabelecimento", href:"#"},
        {label:"Denuncias", href:"#"},
        {label:"Mobilidade", href:"#"},
        {label:"Dúvidas Frequentes", href:"#"},
        {label:"Institucional", href:"#"},
        {label:"Sobre o Mob!", href:"#"},
        {label:"Trabalhe Conosco", href:"#"},
        {label:"SAC", href:"#"},
    ]
    useEffect(() => {
        setIsMenuList(listMenu)
    }, [])

    return (
        <footer>
            <img src={LogMob} />
            <div className="container-topics">
                {
                      isMenuList.map((item) => (
                        <a href={item.href} className="link">
                            <Text variant="muted font-regular subheadline">{item.label}</Text>
                        </a>
                    ))
                }
            </div>
            <div className="container-footer">
                <Text variant="font-regular subheadline color-white">@copyright</Text>
            </div>
        </footer>
    )
}