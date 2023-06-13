// import { Skeleton } from "@mui/lab"
import { CircularProgress } from "@mui/material";
// import { LoadSkeleton } from "../../@types"
import "./styles.css";

export function CircleLoad({ ...props }: any) {
  return (
    <div className="div-load">
      <CircularProgress color="info" {...props} />
    </div>
  );
}
