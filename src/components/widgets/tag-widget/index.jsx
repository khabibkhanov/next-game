import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { flatDeep, slugify } from "@utils/methods";

const TagWidget = ({ genres, rootPage }) => {
    const tags = [...new Set(flatDeep(genres).map((genres) => genres.title))];

    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40">
            <h3 className="title">Janrlar</h3>
            <div className="inner mt--20">
                <div className="tagcloud">
                    {tags?.map((genres) => (
                        <Anchor
                            key={genres}
                            path={rootPage}
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
    rootPage: "/reviews",
};
export default TagWidget;