
import { Comments } from "../../@types"
import { Text } from "../Text"
import { Star } from "@material-ui/icons"
import "./styles.css"

export function Comment({author, avatar, rating, comment, createdAt}:Comments){
    return (
        <div className="container">
            <div className="container-title">
                <div className="avatar">
                    <Text variant="font-semibold subheadline headline">{avatar}</Text>
                </div>

                <div className="container-detail">

                    <Text variant="font-semibold subheadline headline">{author}</Text>

                    <div className="continer-rating">
                        <div className="container-star">
                            <Star className="star" fontSize="small"></Star>
                            <Star className="star" fontSize="small"></Star>
                            <Star className="star" fontSize="small"></Star>
                            <Star className="star" fontSize="small"></Star>
                            <Star className="star" fontSize="small"></Star>
                        </div>
                        <Text variant="font-regular caption muted">{createdAt}</Text>
                    </div>
                </div>

            </div>

            <div className="container-comment">
                <Text>{comment}</Text>
            </div>
        </div>
    )
}