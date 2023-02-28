import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryWidget from "@widgets/category-widget";
import RecentReviewssWidget from "@widgets/recent-reviews-widget";
import GenreWidget from "@widgets/genre-widget";

const ReviewSidebar = ({
    className,
    categories,
    recentPosts,
    genres,
    rootPage,
}) => (
    <aside className={clsx("rwt-sidebar", className)}>
        {console.log(genres)}
        {categories?.length > 0 && (
            <CategoryWidget categories={categories} rootPage={rootPage} />
        )}
        {recentPosts?.length > 0 && (
            <RecentReviewssWidget recentPosts={recentPosts} rootPage={rootPage} />
        )}
        {genres?.length > 0 && <GenreWidget genres={genres} rootPage={rootPage} />}
    </aside>
);

ReviewSidebar.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

export default ReviewSidebar;
