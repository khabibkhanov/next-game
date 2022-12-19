import PropTypes from "prop-types";
import clsx from "clsx";
import BlogCard from "@components/blog/blog-card";

const BlogArea = ({ className, data, rootPage }) => (
    <div className={clsx("blog-wrapper", className)}>
        {data?.posts?.map((post) => (
            <BlogCard
                key={post.slug}
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
                className="single-column mb--30"
                title={post.title}
                slug={post.slug}    
                publisher={post.publisher}
                category={post.category}
                timeToRead={post.timeToRead}
                image={{ ...post.game_picture, alt: post.title, width: 350, height: 200 }}
                rootPage={rootPage}
            />
        ))}
    </div>
);

BlogArea.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        posts: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    rootPage: PropTypes.string,
};

export default BlogArea;
