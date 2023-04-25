import { Comments } from "../../@types";
import { Text } from "../Text";
import { Star } from "@material-ui/icons";
import "./styles.css";
import { StarRating } from "../StarRating";
import { Flag } from "@material-ui/icons";

export function Comment({
  author,
  title,
  rating,
  comment,
  createdAt,
  variant,
}: Comments) {
  function getInitials(name: string): string {
    const spaceIndex = name.indexOf(" ");
    const firstName = name.substring(0, 1);
    const lastName =
      spaceIndex !== -1 ? name.substring(spaceIndex + 1, spaceIndex + 2) : "";
    return firstName.toUpperCase() + lastName.toUpperCase();
  }

  return (
    <div className="container-comment-main">
      {/* <div></div> */}
      <div className="container-title">
        {variant !== "muthed-avatar" ? (
          <div className="avatar">
            <Text variant="font-semibold subheadline headline">
              {getInitials(author)}
            </Text>
          </div>
        ) : (
          <div className="muthed-avatar">{getInitials(author)}</div>
        )}

        <div className="container-detail">
          <div className="continer-rating">
            <Text variant="font-semibold subheadline headline">{author}</Text>
            <Text variant="font-regular caption muted">{createdAt}</Text>
            {/* <Text variant="font-regular caption muted">Postado há 1 hora</Text> */}
          </div>

          <StarRating
            variant="nothing"
            rating={rating}
            starType="view"
            size="small"
          />
        </div>
      </div>

      <div className="container-comment">
        <Text variant="headline font-extrabold">{title}</Text>
        <Text>{comment}</Text>
        <Text variant="font-regular caption muted">Postado há 1 hora</Text>
      </div>
      <div className="container-comment-options">
        <div className="container-comment-option-report">
          <Text variant="font-regular caption muted">
            Este problema teve solução?
          </Text>
        </div>
      </div>
    </div>
  );
}
