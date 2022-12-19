import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { flatDeep, slugify } from "@utils/methods";

const DetailsWidget = ({ details, heading }) => {
    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40 mb--40">
        <h5 className="title">{heading}</h5>

        <div className="inner mt--20">
            <div className="tagcloud">
                <span className="fs-3">
                    {details.map((item) => (item["attributes"].title)).join(", ")}
                </span> 
            </div>
        </div>
    </div>
    );
};

DetailsWidget.propTypes = {
    details: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default DetailsWidget;