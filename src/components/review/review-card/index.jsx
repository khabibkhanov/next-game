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
                    // console.log(image)
                    // image?.data?.map((img, index) => (
                        image.data.attributes.url && (
                            <div className="thumbnail">
                                {console.log(image.data.attributes.url)}
                                <Anchor path={`${rootPage}/${slug}`}>
                                    <Image
                                        className="display-block"
                                        loading="lazy"
                                        loader={myLoader}
                                        unoptimized={true}
                                        src={`${url}${image.data.attributes.url}`}
                                        layout={image.data.attributes?.height ? "responsive" : "fill"}
                                        alt={image.data.attributes.alternativeText}
                                        width={image.data.attributes?.width || 489}
                                        height={image.data.attributes?.height || 366}
                                    />
                                </Anchor>
                            </div>
                        )
                    // ))
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
