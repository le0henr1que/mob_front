import "./styles.css"
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg"
import { useEffect, useState } from "react";
import { Text } from "../Text";
import { MenuItem } from "../../@types";

export function Footer(){
    const [isMenuList, setIsMenuList] = useState<MenuItem[]>([]);

    var listMenu:MenuItem[] = [
        {label:"Achar local", href:"/locals"},
        // {label:"Denuncias", href:"/notfound"},
        {label:"Minhas avaliações", href:"/myratings"},
        // {label:"Dúvidas Frequentes", href:"/notfound"},
        // {label:"Institucional", href:"/notfound"},
        {label:"Sobre o Mob!", href:"/about"},
        {label:"Perfil", href:"/profile"},
        {label:"Home", href:"/"},
        // {label:"Trabalhe Conosco", href:"/notfound"},
        // {label:"SAC", href:"/notfound"},
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