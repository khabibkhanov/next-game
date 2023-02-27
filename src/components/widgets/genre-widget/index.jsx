import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { flatDeep } from "@utils/methods";

const GenreWidget = ({ genres, rootPage }) => {
    const settingGenres = [...new Set(flatDeep(genres).map((genres) => genres.title))];

    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40">
            <h3 className="title">Janrlar</h3>
            <div className="inner mt--20">
                <div className="tagcloud">
                    {settingGenres?.map((genres) => (
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


GenreWidget.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    rootPage: PropTypes.string,
};

GenreWidget.defaultProps = {
    rootPage: "/info",
};
export default GenreWidget;