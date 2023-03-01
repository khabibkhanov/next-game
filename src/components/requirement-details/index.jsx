import PropTypes from "prop-types";

const RequirementDetails = ({details, heading}) => (
        <div className="rbt-single-widget widget_tag_cloud mb--40 col-50">
            <h5 className="title align-text-center">{heading}</h5>

            <div className="requirement inner mt--20">
                {
                    details.map((detail, index) => (
                        <div className={details.length >= 3 ? `tagcloud col-sm-4 p-4` : `tagcloud p-4`} key={index}>
                            <h6>{detail.heading}</h6>
                            <ul>
                                {Object.entries(detail)
                                    .filter(([key, value]) => value && key !== "id" && key !== "__component" && key !== "bit64" && key !== "heading")
                                    .map(([key, value]) => (
                                        <li key={key}>
                                            <b>{key.replace('_', ' ')}:</b> {value}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
);

RequirementDetails.propTypes = {
    heading: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.shape({})),
};

export default RequirementDetails;
