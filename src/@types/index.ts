

export interface Comments {
    author:string;
    avatar:string;
    rating:number;
    comment:string;
    createdAt:string;
}


export interface TypeStars{
    size: "small" | "default" | "inherit" | "large" | "medium";
    variant:string;
    rating: 1 | 2 |  3 |  4 |  5;
    starType: "view" | "select";
    onReturnRating?: any;
}