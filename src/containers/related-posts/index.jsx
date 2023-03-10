import PropTypes from "prop-types";
import clsx from "clsx";
import ReviewCard from "@components/review/review-card";

const RelatedPostsArea = ({title, space, className, relatedPosts, rootPage }) => (
    <div className={clsx("row g-5 mb-5", space === 1 && "pt--60", className)}>
        <div className="col-lg-12">
            <h3 className="title">{title}</h3>
        </div>
        {relatedPosts?.map((post) => (
            <div key={post.slug} className="col-xl-4 col-lg-6 col-md-6 col-12">
                <ReviewCard
                    title={post.title}
                    slug={post.slug}
                    genres={post.genres}
                    category={post.category}
                    timeToRead={post.timeToRead}
                    image={post.game_picture}
                    rootPage={rootPage}
                />
            </div>
        ))}
    </div>
);

RelatedPostsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

RelatedPostsArea.defaultProps = {
    space: 1,
    rootPage: "/info",
};

export default RelatedPostsArea;
