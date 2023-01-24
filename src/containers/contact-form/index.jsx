import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import ContactForm from "@components/contact-form";
import GoogleMapArea from "@containers/google-map";


const ContactFormArea = ({ space, className }) => (
    <div
        className={clsx(
            "login-area message-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
            <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <GoogleMapArea />
                </div>
                
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
);

ContactFormArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContactFormArea.defaultProps = {
    space: 1,
};

export default ContactFormArea;
