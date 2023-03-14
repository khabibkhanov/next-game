import PropTypes from "prop-types";
import clsx from "clsx";
import { markdown } from "markdown"
import { getMonth } from "@utils/methods";
import Image from "next/image";

const myLoader = (({src}) => {
    return src
})

const NewsDetailsArea = ({ className, post, date }) => (
        <div className={clsx("blog-details-area", className)}>
        <div className="blog-content-top mb-5 pt-0">
            <h2 className="title">{post?.title}</h2>
            <span className="date">
                {date.getDate().toString().padStart(2, "0")}{" "}
                {getMonth(date)}, {date.getFullYear()}
            </span>
        </div>
        <div className="bd-thumbnail">
            <div className="large-img mb--30">
                {
                    post?.game_picture?.data?.attributes?.url && (
                        <Image
                            priority="high"
                            className="game-hero"
                            loader={myLoader}
                            src={`${post?.game_picture?.data.attributes?.url}`}
                            width={post?.game_picture?.data.attributes.width || 100}
                            unoptimized={true}
                            height={post?.game_picture?.data.attributes.height || 100}
                            alt={post?.game_picture?.data.attributes.alternativeText}
                            layout="responsive"
                        />
                    )
                }
            </div>
        </div>
        <div
            className="news-details"
            dangerouslySetInnerHTML={{ __html: markdown.toHTML(post?.reviews ) }}
        />
        <hr className={`news-seperate-line ${post?.isLast}`} />
    </div>
);

NewsDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.shape({}),
};

export default NewsDetailsArea;
