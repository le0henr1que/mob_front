import { Container } from "@material-ui/core";
import Button  from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Text } from "../../Components/Text";
import "./styles.css"

export function SignIn(){
    return (
        <Container maxWidth="md">            
            <Button variant="small-button">Button</Button>
            <Text variant="font-extrabold  title-3 color-blue">Text</Text>
            <Text variant="font-bold title-2 color-blue">Text</Text>
            <Text variant="font-regular title-1 color-blue">Text</Text>
            <Input type="select" variant="default" placeholder="Pesquisar" icon={true}>
                <option>Teste</option>
                <option>Teste</option>
                <option>Teste</option>
                <option>Teste</option>
            </Input>
            <Input type="text" variant="default" placeholder="Pesquisar" icon={true} />
            <Input type="text" variant="default" placeholder="Pesquisar" icon={false} />
            <Input type="text" variant="success" placeholder="Pesquisar" icon={false} />
            <Input type="text" variant="error" placeholder="Pesquisar" icon={false} />

            
        </Container>
    )
}