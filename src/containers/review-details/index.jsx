import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { getMonth } from "@utils/methods";
import { ImageType } from "@utils/types";
import { markdown } from "markdown"
import GameDetails from "@containers/review/game-details";
import { images } from "next.config";

const ReviewDetailsArea = ({ className, post }) => {
    post = post[0]
    const date = new Date(post.createdAt);

    const age_rating = post.age_rating.data.attributes
    const url = images.domains[0]

    const myLoader = (({src}) => {
        return src
    })

    return (
        <div className={clsx("blog-details-area", className)}>

            <div className="blog-content-top">
                <div className="bd-thumbnail">
                    <div className="large-img mb--30">

                        <div className="offset">
                            <div className="container">
                                <div className="game-headings d-flex mb-5">
                                    <h1 className="title mb-2">{post.title}</h1>

                                    {
                                        age_rating && (
                                            <div className="age-rating d-flex">
                                                <img src={`${age_rating.img_rating_url}`} className="me-4" alt="age rating pic" />

                                                <div className="age-rating-text">
                                                    <h5 className="mb-1">
                                                        {age_rating.title}
                                                    </h5>
                                                    <p>
                                                        {
                                                            post.purchase ? "O'yinda turli xil to'lovlar bo'lishi mumkin" : "O'yinda hech qanday to'lovlar mavjud emas!"
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="d-flex mb-0">
                                    <p className="reading-time mb-3 me-5"> 
                                        O'qish vaqti {post?.timeToRead} daqiqa
                                    </p>

                                    <p className="date mb-5">
                                        {
                                            `${date.getDate().toString().padStart(2, "0")} ${"-"}
                                            ${getMonth(date)}, ${date.getFullYear()}`
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {
                            // post?.game_picture?.data.map((img, index) => (
                                post?.game_picture?.data.attributes.url && (
                                    <Image
                                        priority="high"
                                        className="game-hero w-100"
                                        loader={myLoader}
                                        src={`${post?.game_picture?.data.attributes?.url}`}
                                        width={post?.game_picture?.data.attributes.width || 100}
                                        unoptimized={true}
                                        height={post?.game_picture?.data.attributes.height || 100}
                                        alt={post?.game_picture?.data.attributes.alternativeText}
                                        layout="responsive"
                                    />
                                )
                            // ))
                        }
                    </div>
                </div>
            </div>
  
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