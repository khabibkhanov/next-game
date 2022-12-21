import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { getMonth, slugify } from "@utils/methods";
import { ImageType } from "@utils/types";
import { markdown } from "markdown"
import GameDetails from "@containers/blog/game-details";

const BlogDetailsArea = ({ className, post }) => {
    const date = new Date(post.createdAt);
    const age_rating = post.age_rating.data.attributes

    return (
        <div className={clsx("blog-details-area", className)}>

            <div className="blog-content-top">
                <div className="bd-thumbnail">

                    <div className="large-img mb--30 position-absolute w-100 start-0 top-0">
                        <div className="offset"></div>
                        {
                            post?.game_picture?.data.map((img, index) => (
                                
                                img.attributes.url && (
                                    <Image
                                        key={index}
                                        z-index={-1}
                                        loader={() => "http://localhost:1337"+img.attributes.url}
                                        src={img.attributes.name}
                                        sizes="width: 100 min-height: 10"
                                        alt={img.attributes.alternativeText}
                                        layout="fill"
                                    />
                                )
                            ))
                        }
                    </div>
                </div>
                
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

                    <div>
                        {
                            age_rating && (
                                <div className="d-flex">
                                    <img src={`http://localhost:1337${age_rating.age_ratings_url}`} alt="age rating pic" />

                                    <div className="age-rating-text">
                                        <h5>
                                            {age_rating.title}
                                        </h5>
                                        <span>
                                            {age_rating.description}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
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
