import "./styles.css";

export function Text(props: any) {
  const { children, variant } = props;

  return <div className={variant}>{children}</div>;
}
