
import { Comments } from "../../@types"
import { Text } from "../Text"
import { Star } from "@material-ui/icons"
import "./styles.css"
import { StarRating } from "../StarRating"

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
                            <StarRating variant="nothing" rating={3} starType="view" size="small" />                            
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