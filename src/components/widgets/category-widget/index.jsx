import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

const CategoryWidget = ({ categories, rootPage }) => {

    return (
        <div className="rbt-single-widget widget_categories">
            <h3 className="title">Janrlar</h3>
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
{/* <motion.div layout className="isotope-list item-4">
{products?.slice(0, 10)?.map((prod) => (
    <motion.div
        key={prod.id}
        className={clsx("grid-item")}
        layout
    >
        <Product
            placeBid={!!data.placeBid}
            title={prod.title}
            slug={prod.slug}
            latestBid={prod.latestBid}
            price={prod.price}
            likeCount={prod.likeCount}
            image={prod.images?.[0]}
            authors={prod.authors}
            bitCount={prod.bitCount}
        />
    </motion.div>
))}
</motion.div> */}
CategoryWidget.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

CategoryWidget.defaultProps = {
    rootPage: "/info",
};

export default CategoryWidget;
