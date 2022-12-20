import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { getMonth, slugify } from "@utils/methods";
import { ImageType } from "@utils/types";
import { markdown } from "markdown"
import GameDetails from "@containers/blog/game-details";

const BlogDetailsArea = ({ className, post }) => {
    const date = new Date(post.createdAt);

    return (
        <div className={clsx("blog-details-area", className)}>

            <div className="blog-content-top">
                <div className="game-headings">
                    <h2 className="title mb-2">{post.title}</h2>
                    
                    <div className="blog-meta">
                        <span className="reading-time d-block mb-3 me-5"> 
                            {post?.timeToRead} min read
                        </span>

                        <span className="date mb-5">
                            {
                                `${date.getDate().toString().padStart(2, "0")} ${" "}
                                ${getMonth(date)}, ${date.getFullYear()}`
                            }
                        </span>
                    </div>
                </div>

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

                    <div>
                        <span>
                            {post.age_restricts}
                        </span>
                    </div>
                </div>
            </div>

            <div
                className="news-details mb-5"
                dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.reviews.replaceAll("/uploads", "http://localhost:1337/uploads")) }}
            />
            <div className="blog-content-bottom">
                <GameDetails games = {post} />
            </div>    
        </div>
    );
};

BlogDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        age_restricts: PropTypes.string,
        release_date: PropTypes.string,
        game_picture: ImageType,
        reviews: PropTypes.string,
    }),
};

export default BlogDetailsArea;
