import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const RecentPostsWidget = ({ recentPosts, rootPage }) => (
    <div className="rbt-single-widget widget_recent_entries mt--40">
        <h3 className="title">So'nggi Maqolalar</h3>

        <div className="inner">
            <ul>
                {recentPosts?.map((post) => (
                    <li key={post.slug}>
                        <Anchor
                            className="d-block"
                            path={`${rootPage}/${post.slug}`}
                        >
                            {post.title}
                        </Anchor>
                        <span className="cate">{post.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

RecentPostsWidget.propTypes = {
    recentPosts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            category: PropTypes.shape({
                title: PropTypes.string,
            }),
        })
    ),
    rootPage: PropTypes.string,
};

RecentPostsWidget.defaultProps = {
    rootPage: "/reviews",
};

export default RecentPostsWidget;
