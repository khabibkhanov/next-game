import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import { images } from "next.config";

const { protocol, hostname = '192.168.0.87', port } = images.remotePatterns

const myLoader = (({src}) => {
    return src
})

const BannerGallery = ({ className, images }) => (
    <div className="banner-gallery-loop">
        {images.map((image, index, arr) => (
            <div
                key={image.attributes.url}
                className={clsx(
                    "banner-gallery",
                    `banner-gallery-${index + 2}`,
                    (index === 0 || index === arr.length - 1) && "my--90"
                )}
            >
                <Image
                    loader={myLoader}
                    src={`${protocol}${hostname}:${port}${image.attributes?.url}`}
                    alt={image.attributes.alternativeText || "banner"}
                    width={300}
                    unoptimized={true}
                    height={250}
                    className="mb-5"
                    priority
                />
            </div>
        ))}
    </div>
)

BannerGallery.propTypes = {
    className: PropTypes.string,
    images: PropTypes.arrayOf(ImageType),
};

export default BannerGallery;
