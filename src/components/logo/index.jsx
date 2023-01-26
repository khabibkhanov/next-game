import Anchor from "@ui/anchor";
import PropTypes from "prop-types";
import clsx from "clsx";

const Logo = ({ className, logo }) => (
    <div className={clsx("logo-thumbnail logo-custom-css", className)}>
        {logo?.[0]?.src && (
            <Anchor className="logo-light" path="/">
                <h4 className="m-0">Game</h4>
            </Anchor>
        )}
        {logo?.[1]?.src && (
            <Anchor className="logo-dark" path="/">
                <h4 className="m-0">Game</h4>
            </Anchor>
        )}
    </div>
);

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ),
};

export default Logo;
