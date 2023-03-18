

export interface Comments {
    author:string;
    avatar:string;
    rating:number;
    comment:string;
    createdAt:string;
}

export interface MenuItem {
    label: string;
    href: string;
  }

export interface TypeStars{
    size: "small" | "default" | "inherit" | "large" | "medium";
    variant:string;
    rating: 1 | 2 |  3 |  4 |  5;
    starType: "view" | "select";
    onReturnRating?: any;
}

export interface LoadSkeleton {
    size: "small" | "large" | "medium";
    type: "circle" | "line"
}