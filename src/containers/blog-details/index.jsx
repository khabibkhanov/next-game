import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { getMonth, slugify } from "@utils/methods";
import { ImageType } from "@utils/types";
import { markdown } from "markdown"
import Anchor from "@ui/anchor";
import DetailsWidget from "@components/widgets/details-widget";
import GameDetails from "@containers/blog/game-details";

const BlogDetailsArea = ({ className, post }) => {
    const date = new Date(post.createdAt);

    return (
        <div className={clsx("blog-details-area", className)}>
            <div className="blog-content-top">
                <div className="bd-thumbnail">
                    <div className="large-img mb--30">
                        {
                            post?.game_picture?.data.map((img, index) => (
                                img.attributes.url && (
                                    <Image
                                        key={index}
                                        className="w-100"
                                        loader={() => "http://localhost:1337"+img.attributes.url}
                                        src={img.attributes.name}
                                        width={img.attributes.width}
                                        height={img.attributes.height}
                                        alt={img.attributes.alternativeText}
                                        layout="responsive"
                                    />
                                )
                            ))
                        }
                    </div>
                </div>
                <h2 className="title text-center">{post.title}</h2>

                <div className="blog-meta d-flex justify-content-center">
                    <span className="reading-time me-5"> 
                        {post?.timeToRead} min read
                    </span>

                    <span className="date">
                        {
                            `${date.getDate().toString().padStart(2, "0")} ${" "}
                            ${getMonth(date)}, ${date.getFullYear()}`
                        }
                    </span>
                </div>
            </div>
            <div
                className="news-details mb-5"
                dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.reviews.replaceAll("/uploads", "http://localhost:1337/uploads")) }}
            />
            <div className="blog-content-bottom">
                <GameDetails publisher_notice = {post?.publisher_notice?.data} />
                <GameDetails languages={post?.languages?.data} />
                <GameDetails features = {post?.features?.data} />
                <GameDetails availables = {post?.availables?.data} />
            </div>    
        </div>
    );
};

BlogDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        game_picture: ImageType,
        reviews: PropTypes.string,
    }),
};

export default BlogDetailsArea;
