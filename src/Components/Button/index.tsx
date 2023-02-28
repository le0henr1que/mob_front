
import "./styles.css"

export default function ButtonStyle(props:any){
    const {children, variant } = props

    return (
        <>
            <button className={variant}>
                {children}
            </button>
        </>
    )
}