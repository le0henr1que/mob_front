
import "./styles.css"

export default function Button(props: any, type:any){
    console.log(type)
    return (
        <>
            <button className="Large-Button">
                {props.children}
            </button>
        </>
    )
}