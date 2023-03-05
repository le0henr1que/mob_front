
// import { Skeleton } from "@mui/lab"
import { Skeleton } from "@mui/material"
// import { LoadSkeleton } from "../../@types"
import "./styles.css"

export function Load({...props}:any){
    // return <h1>teste</h1>
    return (
        <Skeleton {...props} />
    )
}