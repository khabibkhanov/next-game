import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { flatDeep, slugify } from "@utils/methods";

const TagWidget = ({ genres, rootPage }) => {
    const tagss = [...new Set(flatDeep(genres).map((genres) => genres.title))];
    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40">
            <h3 className="title">genres</h3>
            <div className="inner mt--20">
                <div className="tagcloud">
                    {tagss?.map((genres) => (
                        <Anchor
                            key={genres}
                            path={`${rootPage}/tag/${slugify(genres)}`}
                        >
                            {genres}
                        </Anchor>
                    ))}
                </div>
            </div>
        </div>
    );
};

TagWidget.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    rootPage: PropTypes.string,
};

TagWidget.defaultProps = {
    rootPage: "/blog",
};
export default TagWidget;