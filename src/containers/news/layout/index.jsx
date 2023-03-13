import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { getMonth } from "@utils/methods";

const NewsLayout = ({
    title,
    slug,
    createdAt,
    timeToRead,
    image,
    className,
}) => {
    const date = new Date(createdAt)

    return (
        <>
            <div className={clsx("lg-product-wrapper", className)}>
                <div className="inner">
                    <div className="lg-left-content">
                        {image?.data && (
                            <Anchor
                                path={`/news/${slug}`}
                                className="thumbnail"
                            >
                                <Image
                                    src={image.data.attributes.formats.small.url}
                                    alt={image.data.attributes.formats.small.name || "NFT_portfolio"}
                                    objectFit="cover"
                                    width={430}
                                    height={430}
                                />
                            </Anchor>
                        )}
                        <div className="read-content">
                            <Anchor path={`/news/${slug}`}>
                                <h2 className="title">{title}</h2>
                            </Anchor>
                            <div className="share-wrapper d-flex">
                                <span className="mr--15">
                                    {
                                        `${date.getDate().toString().padStart(2, "0")} ${"-"}
                                        ${getMonth(date)}, ${date.getFullYear()}`
                                    }
                                </span>
                                <span>O'qish vaqti: {timeToRead} daqiqa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

NewsLayout.propTypes = {
    className: PropTypes.string,
}

export default NewsLayout;
