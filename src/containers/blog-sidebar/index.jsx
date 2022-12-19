import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryWidget from "@widgets/category-widget";
import RecentPostsWidget from "@widgets/recent-posts-widget";
import TagWidget from "@widgets/tag-widget";


const BlogSidebar = ({
    className,
    categories,
    recentPosts,
    genres,
    rootPage,
}) => (
    <aside className={clsx("rwt-sidebar", className)}>
        {categories?.length > 0 && (
            <CategoryWidget categories={categories} rootPage={rootPage} />
        )}
        {recentPosts?.length > 0 && (
            <RecentPostsWidget recentPosts={recentPosts} rootPage={rootPage} />
        )}
        {genres?.length > 0 && <TagWidget genres={genres} rootPage={rootPage} />}
    </aside>
);

BlogSidebar.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    rootPage: PropTypes.string,
};

export default BlogSidebar;
