import PropTypes from "prop-types";
import clsx from "clsx";
import DetailsWidget from "@widgets/details-widget";
import PublisherDetailsWidget from "@components/widgets/publisher-details-widget";
import RequirementDetails from "@components/requirement-details";

const GameDetails = ({
    className,
    games
}) => (
    <section className={clsx("rwt-sidebar", className)}>
        {games?.publisher_notice !== undefined  && <PublisherDetailsWidget details={games?.publisher_notice?.data.attributes} heading="Ishlab chiqaruvchi xaqida" />}
        {games?.languages?.length > 0 && <DetailsWidget details={games?.languages}  heading="O'yindagi mavjud tillar" />}
        {games?.features?.data?.length > 0 && <DetailsWidget details={games?.features?.data}  heading="O'yinning xususiyatlari" />}
        {games?.availables?.data?.length > 0 && <DetailsWidget details={games?.availables?.data}  heading="O'yin mavjud bo'lgan davlatlar" />}
        {games?.system_requirements?.length > 0 && <RequirementDetails details={games?.system_requirements} heading="Kompyuter talablari" />} 
    </section>
);

GameDetails.propTypes = {
    className: PropTypes.string,
};

export default GameDetails;
