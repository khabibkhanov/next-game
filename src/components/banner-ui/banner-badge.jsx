import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";

const BannerBadge = ({ className, image, title, ...rest }) => (
    <div className={clsx("banner-badge-top", className)} {...rest}>
        {image?.src && (
            <div className="icon">
                <Image
                    loading="lazy"
                    src={image.src}
                    alt={image?.alt || title}
                    width={image?.width || 20}
                    height={image?.height || 20}
                    priority
                />
            </div>
        )}

        <span className="subtitle">{title}</span>
    </div>
);

BannerBadge.propTypes = {
    className: PropTypes.string,
    image: ImageType.isRequired,
    title: PropTypes.string.isRequired,
};

export default BannerBadge;
