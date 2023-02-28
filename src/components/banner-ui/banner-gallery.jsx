import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import { images } from "next.config";
import Link from "next/link";

const url = images.domains[0]

// const myLoader = (({src}) => {
//     return src
// })

const BannerGallery = ({ className, pictures }) => (
    <div className="banner-gallery-loop">
        {pictures.map((image, index, arr) => (
            <div
                key={image?.picture?.url}
                className={clsx(
                    "banner-gallery",
                    `banner-gallery-${index + 2}`,
                    (index === 0 || index === arr.length - 1) && "my--90"
                )}
            >
                <Link
                    // rel="dns-prefetch"
                    activeClass="active"
                    className="nav-link smoth-animation"
                    href={`/info/${image.game_slug}`}
                    to={`/info/${image.game_slug}`}
                    spy
                    smooth
                    offset={-50}
                    duration={500}
                >

                    <Image
                        fetchpriority="high"
                        loading="lazy"
                        // loader={myLoader}
                        src={`${image?.picture?.url}`}
                        alt={image?.picture?.alternativeText || "banner"}
                        width={300}
                        unoptimized={true}
                        height={250}
                        className="mb-5"
                    />
                </Link>

            </div>
        ))}
    </div>
)

BannerGallery.propTypes = {
    className: PropTypes.string,
    pictures: PropTypes.arrayOf(ImageType),
};

export default BannerGallery;
