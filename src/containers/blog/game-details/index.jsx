import PropTypes from "prop-types";
import clsx from "clsx";
import DetailsWidget from "@widgets/details-widget";
import PublisherDetailsWidget from "@components/widgets/publisher-details-widget";


const GameDetails = ({
    className,
    languages,
    publisher_notice,
    features,
    availables
}) => (
    <section className={clsx("rwt-sidebar", className)}>
        {publisher_notice !== undefined  && <PublisherDetailsWidget details={publisher_notice?.attributes} heading="Ishlab chiqaruvchi xaqida" />}
        {languages?.length > 0 && <DetailsWidget details={languages}  heading="O'yindagi mavjud tillar" />}
        {features?.length > 0 && <DetailsWidget details={features}  heading="O'yinning xususiyatlari" />}
        {availables?.length > 0 && <DetailsWidget details={availables}  heading="O'yin mavjud bo'lgan davlatlar" />}
    </section>
);

GameDetails.propTypes = {
    className: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    publisher_notice: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    features: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    availables: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default GameDetails;
