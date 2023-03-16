import "./styles.css"
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg"
import { useEffect, useState } from "react";
import { Text } from "../Text";

export function Footer(){
    const [isMenuList, setIsMenuList] = useState<string[]>([]);

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
        <footer>
            <img src={LogMob} />
            <div className="container-topics">
                {
                    isMenuList.map((item) => (
                        <Text variant="muted font-regular subheadline">{item}</Text>
                    ))
                }
            </div>
            <div className="container-footer">
                <Text variant="font-regular subheadline color-white">@copyright</Text>
            </div>
        </footer>
    )
}