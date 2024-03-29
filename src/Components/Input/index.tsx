import "./styles.css";
import { Search, KeyboardArrowDown } from "@material-ui/icons";

export function Input(props: any) {
  const { type, variant, placeholder, icon, children } = props;

  return (
    <div className="container-input">
      {type === "select" ? (
        <select className={variant} placeholder={placeholder}>
          {children}
        </select>
      ) : type == "textarea" ? (
        <textarea rows={10} placeholder={placeholder}></textarea>
      ) : (
        <input type={type} className={variant} placeholder={placeholder} />
      )}

      {
        // type == "textarea" && <textarea></textarea>
      }
      {type === "select" && (
        <KeyboardArrowDown color="disabled" className="icon" />
      )}
      {icon && type !== "select" && (
        <Search color="disabled" fontSize="large" className="icon" />
      )}
    </div>
  );
}
