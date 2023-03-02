import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-03";
import BlogSidebar from "@containers/blog-sidebar";
import { getPostsByCategory, getAllPosts } from "../../../lib/api";

const GamesList = ({ posts, title, categories, recentPosts, tags }) => (
    <Wrapper>
        <SEO pageTitle="Blog Single Column" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle={title} currentPage="Blog Single Column" />
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <BlogArea
                                data={{ posts }}
                                rootPage="/blog-single-column"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <BlogSidebar
                                categories={categories}
                                recentPosts={recentPosts}
                                tags={tags}
                                rootPage="/blog-single-column"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Wrapper>
);

export async function getServerSideProps() {
    const posts = getAllReviews(params.genres, [
        "slug",
        "image",
        "genres",
        "timeToRead",
    ])

    const widgetPosts = getAllPosts(["title", "slug", "genres"]);
    const categories = widgetPosts.map((blog) => ({ ...blog.genres }));

    return {
        props: {
            posts,
            categories,
            title: params.category,
            className: "template-color-1",
        },
    };
}

GamesList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    title: PropTypes.string,
};

export default GamesList;
