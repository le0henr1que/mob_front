

export interface Comments {
    author:string;
    avatar:string;
    rating:number;
    comment:string;
    createdAt:string;
}


export interface TypeStars{
    variant:string;
    rating: 1 | 2 |  3 |  4 |  5;
    starType: "view" | "select";
}