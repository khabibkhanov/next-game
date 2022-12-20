import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { flatDeep, slugify } from "@utils/methods";

const PublisherDetailsWidget = ({ details, heading }) => {
    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40 mb--40">
        <h5 className="title">{heading}</h5>

        <div className="inner mt--20">
            <div className="tagcloud">
                <span className="link fs-3">
                    {`Ishlab chiqarvuchi nomi: ${details?.title}`}
                </span>
                <a href={details?.publisher_site} target="_blank" rel="noreferrer">
                    {`O'yinning rasmiy sayti`}
                </a>
                <a href={details?.privacy_policy} target="_blank" rel="noreferrer">
                    {`Ishlab chiqaruvchi huquqlari`}
                </a>
                <a href={details?.publisher_support} target="_blank" rel="noreferrer">
                    {`ishlab chiqaruvchi bilan bog'lanish`}
                </a>
            </div>
        </div>
    </div>
    );
};

PublisherDetailsWidget.propTypes = {
    details: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default PublisherDetailsWidget;