import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-03";
import BlogSidebar from "@containers/blog-sidebar";
import { getPostsByCategory, getAllPosts, getGenres } from "../../../lib/api";

const BlogSingleColumn = ({ posts, title, genres, recentPosts, tags }) => (
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
                                genres={genres}
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

export async function getStaticPaths() {
    let genres_name = await getGenres();
    genres_name = genres_name.data.map((genre) => genre.attributes.genre_name);
    // console.log(genres_name);
    return {
        paths: {
            params: {
                genres: genres_name,
            },
        },
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = getPostsByCategory(params.genres, [
        "title",
        "date",
        "slug",
        "image",
        "genres",
        "timeToRead",
    ]);
    const widgetPosts = getAllPosts(["title", "slug", "genres", "tags"]);
    const genres = widgetPosts.map((blog) => ({ ...blog.genres }));
    const tags = widgetPosts.map((blog) => [...blog.tags]);
    const recentPosts = widgetPosts.slice(0, 4);

    return {
        props: {
            posts,
            genres,
            recentPosts,
            tags,
            title: params.genres,
            className: "template-color-1",
        },
    };
}

BlogSingleColumn.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    title: PropTypes.string,
};

export default BlogSingleColumn;
