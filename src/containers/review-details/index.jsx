import PropTypes from "prop-types";
import clsx from "clsx";
import { markdown } from "markdown"
import GameDetails from "@containers/review/game-details";
import { images } from "next.config";
import ReviewHero from "@components/review/review-hero";

const ReviewDetailsArea = ({ className, post }) => {
    post = post[0]
    const date = new Date(post.createdAt);

    const age_rating = post?.age_rating?.data?.attributes

    return (
        <div className={clsx("blog-details-area", className)}>
            <ReviewHero age_rating={age_rating} date={date} post={post} />
  
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
    post: PropTypes.shape({})
};

export default ReviewDetailsArea;
