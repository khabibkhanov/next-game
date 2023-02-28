import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ReviewDetailsArea from "@containers/review-details";
import RelatedPostsArea from "@containers/related-posts";
import ReviewSidebar from "@containers/review-sidebar";
import { getAllReviews, getOneReview } from "../../lib/api";

const ReviewSlug = ({ post, relatedPosts, recentPosts, languages }) => (
    <Wrapper>
        <SEO pageTitle="Game Details" />
        <Header />
        <main id="main-content main-content-style position-relative" className="mt--85">
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6 game-site-header">
                        <div className="header-offset"></div>
                        <div className="col-xl-8 col-lg-8">
                            <ReviewDetailsArea post={post} languages={languages} />
                            <RelatedPostsArea
                                relatedPosts={relatedPosts}
                                title="Boshqa shu kabi maqolalar"
                                rootPage="/info"
                            />
                        </div>

                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <ReviewSidebar
                                genres={post[0].genres}
                                recentPosts={recentPosts}
                                rootPage="/info"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Wrapper>
);

export async function getServerSideProps(res) {
    const { slug } = res.params;

    const fields = [
        "reviews",
        "slug",
        "title",
        "release_date",
        "publisher",
        "createdAt",
        "developer",
        "age_restricts",
        "game_picture",
        "purchase",
        "languages",
        "age_rating",
        "timeToRead",
        "publisher_notice",
        "features",
        "availables",
        "system_requirements",
        "genres",
    ]

    const posts = await getAllReviews(fields);
    let post = posts?.filter((game) => game?.slug === slug)

    if(!post) {
        return {
            notFound: true
        }
    }

    const languages = posts?.map((game) => game?.languages);
    const game_pictures = posts?.map((game) => game?.game_picture);
    const genres = posts?.map((game) => [...game?.genres]);

    const recentPosts = posts.filter((filteredPost) => {
        let recentPostsNotCurrent = false;
        if (post.slug !== filteredPost.slug) {
            recentPostsNotCurrent = true
            return recentPostsNotCurrent
        }
    }).slice(0, 4)

    const relatedPosts = posts.filter((filterPost) => {
        if (filterPost.slug === post[0].slug) {
            return false; // exclude current post
        }
    
        let isRelated = false;
    
        post[0].genres.forEach((genre) => {
            if (filterPost.genres.find((g) => g.title === genre.title)) {
                isRelated = true;
            }
        });
    
        return isRelated;
    }).sort(() => 0.5 - Math.random()).slice(0, 3);

    return {
        props: {
            post,
            slug,
            // availables,
            // publisher_notice,
            // features,
            recentPosts,
            languages,
            game_pictures,
            relatedPosts,
            // age_rating,
            genres,
            className: "template-color-1",
        },
    };
}

ReviewSlug.propTypes = {
    post: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    game_picture: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    // age_rating: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    // publisher_notice: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    // features: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    // availables: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ReviewSlug;