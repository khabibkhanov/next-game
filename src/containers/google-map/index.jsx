import PropTypes from "prop-types";
import clsx from "clsx";

const GoogleMapArea = ({ space, className }) => (
    <div
        className={clsx(
            "rn-contact-map-area position-relative",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.5825667177721!2d69.28332115929759!3d41.307479925738456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a739ee05d%3A0x3954c447257de13d!2s17%20Istikbol%20Street%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2sbd!4v1672221502866!5m2!1sen!2sbd"
                            height="550"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

GoogleMapArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

GoogleMapArea.defaultProps = {
    space: 1,
};

export default GoogleMapArea;
