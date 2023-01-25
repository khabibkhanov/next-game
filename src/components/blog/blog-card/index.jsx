import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";
import { images } from "next.config";

const url = images.domains[0]

const myLoader = (({src}) => {
    return src
})


const BlogCard = ({
    className,
    title,
    slug,
    timeToRead,
    image,
    rootPage,
    layout,
    ...rest
}) => (
    <div>
        <div className={clsx("rn-blog", className)} {...rest}>
            <div className="inner">
                {
                    image?.data?.map((img, index) => (
                        img.attributes.url && (
                            <div className="thumbnail">
                                <Anchor path={`${rootPage}/${slug}`}>
                                    <Image
                                        key={index}
                                        className="display-block"
                                        loader={myLoader}
                                        unoptimized={true}
                                        src={`${url}${img.attributes?.url}`}
                                        layout={img?.attributes?.height ? "responsive" : "fill"}
                                        alt={img.attributes.alternativeText}
                                        width={img?.attributes?.width || 489}
                                        height={img?.attributes?.height || 366}
                                    />
                                </Anchor>
                            </div>
                        )
                    ))
                }
                <div className="content">
                        <div className="category-info">
                            <div className="meta">
                                <span>
                                    <i className="feather-clock" /> O'qish davomiyligi {timeToRead} minut
                                </span>
                            </div>
                        </div>
                        <h4 className="title">
                            <Anchor path={`${rootPage}/${slug}`}>
                                {title}
                                <i className="feather-arrow-up-right" />
                            </Anchor>
                        </h4>
                </div>
            </div>
        </div>

    </div>
);

BlogCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    image: ImageType,
    rootPage: PropTypes.string,
};

BlogCard.defaultProps = {
    rootPage: "/blog",
};

export default BlogCard;
