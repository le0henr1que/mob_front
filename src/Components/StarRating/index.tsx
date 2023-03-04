
import "./styles.css"
import React, {useState} from "react"
import { Star, StarBorder, StarHalfTwoTone} from "@material-ui/icons"
import { TypeStars } from "../../@types"

export function StarRating({rating, variant, starType}:TypeStars){

    // const [ratingNote, setRatignNote] = useState<number[]>([]);

    var ratingsSelectArray:number[] = []
    var ratingsNonSelectedArray:number[] = []

    for(var i:number = 0; i < rating; i++){
        ratingsSelectArray[i] = i
    }
    const calcRating = rating - 5;
    for(var e = 0; e < calcRating; e++){
        ratingsNonSelectedArray[e] = e
    }
    
    // setRatignNote(ratingNote)

    // console.log(ratingNote)

    return ( 
        <div className="container-star">
            {
                ratingsSelectArray.map((content) => (
                    <Star className={`${variant} star`} fontSize="small" />
                ))

            }
            {
              ratingsNonSelectedArray.map((index) => (
                <StarBorder className={`${variant} star`} fontSize="small" />
                ))
            }
            {/* <Star className={`${variant} star`} fontSize="small" />
            <Star className={`${variant} star`} fontSize="small" />
            <Star className={`${variant} star`} fontSize="small" />
            <StarHalfTwoTone className={`${variant} star`} fontSize="small" />
            <StarBorder className={`${variant} star`} fontSize="small"  /> */}


        </div>
    )
}