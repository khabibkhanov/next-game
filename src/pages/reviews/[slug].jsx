import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogDetailsArea from "@containers/blog-details";
import CommentsArea from "@containers/comments-area";
import CommentForm from "@components/comment-form";
import RelatedPostsArea from "@containers/related-posts";
import BlogSidebar from "@containers/blog-sidebar";
import { getAllPosts, getPostBySlug } from "../../lib/api";

const BlogDetails = ({ post, genres, relatedPosts, recentPosts, languages }) => (

    <Wrapper>
        <SEO pageTitle="Game Details" />
        <Header />
        <main id="main-content main-content-style position-relative">
            {/* <Breadcrumb pageTitle="Game Details" currentPage="Game Details" /> */}
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6 game-site-header">
                        <div className="header-offset"></div>
                        <div className="col-xl-8 col-lg-8">
                            <BlogDetailsArea post={post} languages={languages} />
                            <RelatedPostsArea
                                relatedPosts={relatedPosts}
                                rootPage="/reviews"
                            />
                        </div>

                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <BlogSidebar
                                genres={genres}
                                recentPosts={recentPosts}
                                rootPage="/reviews"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    const posts = await getAllPosts([
        "slug",
        "title",
        "genres",
        "release_date",
        "languages"
    ]);

    // map through to return post paths
    const paths = posts?.map((post) => ({
        params: {
            slug: post?.slug
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const posts = await getAllPosts([
        "reviews",
        "slug",
        "title",
        "release_date",
        "publisher",
        "developer",
        "age_restricts",
        "game_picture",
        "createdAt",
        "updatedAt",
        "purchase",
        "languages",
        "age_rating",
        "timeToRead",
        "publisher_notice",
        "features",
        "availables",
        "genres",
    ]);

    let poster = posts?.find((game) => game?.slug === slug);
    const genres = posts?.map((game) => [...game?.genres]);
    const languages = posts?.map((game) => game?.languages);
    const availables = posts?.map((game) => game?.availables)
    const publisher_notice = posts?.map((game) => game?.publisher_notice)
    const features = posts?.map((game) => game?.features)
    const game_pictures = posts?.map((game) => game?.game_picture);
    const age_rating = posts?.map((game) => game?.age_rating);
    const recentPosts = posts.reverse().slice(0, 4);

    let post = await getPostBySlug(poster, [
        "reviews",
        "title",
        "release_date",
        "publisher",
        "developer",
        "createdAt",
        "updatedAt",
        "languages",
        "age_restricts",
        "game_picture",
        "timeToRead",
        "publisher_notice",
        "features",
        "age_rating",
        "availables",
        "genres",
        "purchase",
        "slug",
    ]);

    post = JSON.parse(JSON.stringify(post));

    let relatedPosts =  posts.filter((post) => {
        let isRelated = false;
        post.genres.forEach((genre) => {
            if (poster.genres.find((g) => g.title === genre.title)) {
                isRelated = true;
            }
        });
        return isRelated && post.slug !== poster?.slug;
    }).slice(0, 3);

    return {
        props: {
            post,
            slug,
            availables,
            publisher_notice,
            features,
            recentPosts,
            languages,
            game_pictures,
            relatedPosts,
            age_rating,
            genres,
            className: "template-color-1",
        },
    };
}

BlogDetails.propTypes = {
    post: PropTypes.shape({}),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    game_picture: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    age_rating: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    languages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    publisher_notice: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    features: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    availables: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default BlogDetails;