
import { LocalCard } from "../../@types";
import { StarRating } from "../StarRating";
import { Text } from "../Text";
import "./styles.css"

export function CardLocal({author, rating}:LocalCard){

    function getInitials(name: string): string {

        const spaceIndex = name.indexOf(" ");
        const firstName = name.substring(0, 1);
        const lastName = spaceIndex !== -1 ? name.substring(spaceIndex + 1, spaceIndex + 2) : "";
        return firstName.toUpperCase() + lastName.toUpperCase();
    }

    return (
        <>
            <div className="card-local-component">

                <div className="muthed-avatar-card">{getInitials(author)}</div> 

                <Text variant="font-semibold subheadline headline">{author}</Text>

                <div className="note-card-local">
                    <Text variant="font-semibold body-small">3.7</Text>
                    <Text variant="muthed font-regular body-small">Avaliação geral</Text>
                </div>

                <StarRating variant="nothing" rating={rating} starType="view" size="small" />                     
            </div>
        </>
    )
}