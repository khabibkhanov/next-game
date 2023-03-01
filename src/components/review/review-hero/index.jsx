import PropTypes from "prop-types";
import Image from "next/image";
import { getMonth } from "@utils/methods";
import { ImageType } from "@utils/types";import { images } from "next.config";

const url = images.domains[0]

const myLoader = (({src}) => {
    return src
})

const ReviewHero = ({
    post,
    age_rating,
    date
}) => (
    <div className="blog-content-top">
        <div className="game-headings mb-5">
            <div className="hero-items">
                <h1 className="title mb-2">{post.title}</h1>
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
            <div className="large-img mb--30">
                    {
                        post?.game_picture?.data.attributes.url && (
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
                    <div className="offset"></div>
            </div>
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
    </div>
);

ReviewHero.propTypes = {
    className: PropTypes.string,
};


export default ReviewHero;
