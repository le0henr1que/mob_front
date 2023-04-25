import "./styles.css";
import React, { useEffect, useState } from "react";
import { Star, StarBorder, StarHalfTwoTone } from "@material-ui/icons";
import { TypeStars } from "../../@types";

export function StarRating({
  rating,
  variant,
  starType,
  onReturnRating,
  size,
}: TypeStars) {
  var ratingsSelectArray: number[] = [1, 2, 3, 4, 5];
  const [isHovering, setIsHovering] = useState<number>(0);
  const [isRating, setIsRating] = useState<number>(0);
  const [isStarType, setIsStarType] = useState<string>("view");

  useEffect(() => {
    setIsRating(rating);
    setIsStarType(starType);
  }, []);

  const handleMouseEnter = (number: number) => {
    setIsHovering(number);
  };

  const handleMouseLeave = () => {
    setIsHovering(0);
    console.log(isHovering);
  };
  const handleClickStar = (number: number) => {
    setIsRating(number);
    setIsStarType("view");
    onReturnRating(number);
  };

  const evenStars = ratingsSelectArray.map((number) => {
    if (number <= isRating) {
      return <Star className={`${variant} star`} fontSize={size} />;
    }
    if (number >= isRating) {
      return <StarBorder className={`${variant} star`} fontSize={size} />;
    }
  });

  const evenStarsHandle = ratingsSelectArray.map((number) => {
    if (number <= isHovering) {
      return (
        <Star
          onMouseEnter={() => handleMouseEnter(number)}
          onMouseLeave={handleMouseLeave}
          className={`${variant} star select`}
          fontSize={size}
          onClick={() => handleClickStar(number)}
        />
      );
    }
    if (number >= isHovering) {
      return (
        <StarBorder
          onMouseEnter={() => handleMouseEnter(number)}
          onMouseLeave={handleMouseLeave}
          className={`${variant} star select`}
          fontSize={size}
        />
      );
    }
  });

  return (
    <div className="container-star">
      {isStarType === "view" && evenStars}
      {isStarType === "select" && evenStarsHandle}
    </div>
  );
}
