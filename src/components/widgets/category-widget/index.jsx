import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const CategoryWidget = ({ categories, rootPage }) => {

    return (
        <div className="rbt-single-widget widget_categories">
            <h3 className="title">Categories</h3>
            <div className="inner">
                <ul className="category-list">
                    {categories?.map((cat) => (
                       cat?.attributes?.games?.data?.length > 0 &&
                       <li key={cat?.attributes?.slug}>
                            <Anchor path={`${rootPage}/category/${cat.id}`}>
                                <span className="left-content">
                                    {cat?.attributes?.title}
                                </span>
                                <span className="count-text">{cat?.attributes?.games?.data?.length} </span>
                            </Anchor>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

CategoryWidget.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

CategoryWidget.defaultProps = {
    rootPage: "/info",
};

export default CategoryWidget;
