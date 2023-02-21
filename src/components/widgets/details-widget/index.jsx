const DetailsWidget = ({ details, heading }) => {
    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40 mb--40">
        <h5 className="title">{heading}</h5>

        <div className="inner mt--20">
            <div className="tagcloud">
                <span className="fs-3">
                    {details.map((item) => (item["attributes"] ? item["attributes"].title : item )).join(", ")}
                </span> 
            </div>
        </div>
    </div>
    );
};

export default DetailsWidget;
