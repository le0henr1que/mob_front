import { Container } from "@material-ui/core";
import Button  from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Text } from "../../Components/Text";
import { Comment } from "../../Components/Comments"
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
            
            <Comment
                author="Leonardo Henrique" 
                avatar="LH" 
                comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
                rating={5}
                createdAt="02/19/2023 00:48 AM"
            />

            
        </Container>
    )
}