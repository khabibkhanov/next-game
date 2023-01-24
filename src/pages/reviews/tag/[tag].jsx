import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-03";
import BlogSidebar from "@containers/blog-sidebar";
import { flatDeep } from "@utils/methods";
import { getPostsByTag, getAllReviews } from "../../../lib/api";

const GamesList = ({ posts, title, categories, recentPosts, genres }) => (
    <Wrapper>
        <SEO pageTitle="Blog" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle={title} currentPage="Our Blog" />
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <BlogArea
                                data={{ posts }}
                                rootPage="/reviews"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <BlogSidebar
                                categories={categories}
                                recentPosts={recentPosts}
                                genres={genres}
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

export async function getServerSideProps({ params }) {
    const posts = await getPostsByTag(params.genres, [
        "title",
        "release_date",
        "slug",
        // "image",
        // "category",
        "timeToRead",
        "genres",
    ]);
    const widgetPosts = getAllReviews(["title", "slug", "release_date", "genres"]);
    // const categories = widgetPosts.map((blog) => ({ ...blog.category }));
    const genres = widgetPosts.map((blog) => [...blog.genres]);
    const recentPosts = widgetPosts.slice(0, 4);
    return {
        props: {
            posts,
            // categories,
            recentPosts,
            genres,
            title: params.genres,
            className: "template-color-1",
        },
    };
}

GamesList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    // categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    title: PropTypes.string,
};

export default GamesList;
