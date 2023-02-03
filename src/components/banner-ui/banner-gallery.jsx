import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import { images } from "next.config";

const url = images.domains[0]

// const myLoader = (({src}) => {
//     return src
// })

const BannerGallery = ({ className, pictures }) => (
    <div className="banner-gallery-loop">
        
        {pictures.map((image, index, arr) => (
            <div
                key={image.url}
                className={clsx(
                    "banner-gallery",
                    `banner-gallery-${index + 2}`,
                    (index === 0 || index === arr.length - 1) && "my--90"
                )}
            >
                <Image
                    priority
                    rel="preload"
                    // loader={myLoader}
                    src={`${url}${image?.url}`}
                    alt={image.alternativeText || "banner"}
                    width={300}
                    unoptimized={true}
                    height={250}
                    className="mb-5"
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
