import PropTypes from "prop-types";
import clsx from "clsx";
import { markdown } from "markdown"
import GameDetails from "@containers/review/game-details";

const ReviewDetailsArea = ({ className, post }) => {
    return (
        <div className={clsx("blog-details-area", className)}>
            <div
                className="news-details mb-5"
                dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.reviews )}}
            />

            <div className="blog-content-bottom">
                <GameDetails games = {post} />
            </div>
        </div>
    );
};

ReviewDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ReviewDetailsArea;
