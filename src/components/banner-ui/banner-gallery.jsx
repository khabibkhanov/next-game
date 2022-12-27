import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";

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
                    src={`http://localhost:1337${image.attributes.url}`}
                    alt={image.attributes.alternativeText || "banner"}
                    width={300}
                    height={300}
                    className="mb-5"
                    priority
                />
            </div>
        ))}
    </div>
);

BannerGallery.propTypes = {
    className: PropTypes.string,
    images: PropTypes.arrayOf(ImageType),
};

export default BannerGallery;
