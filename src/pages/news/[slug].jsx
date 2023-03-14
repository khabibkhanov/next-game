import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import dynamic from 'next/dynamic'
import ReviewSidebar from "@containers/review-sidebar";
import { getAllNews, getAllReviews, getCategories } from "../../lib/api";

const NewsDetailsArea = dynamic(() => import('@containers/news/details'))

const ReviewSlug = ({ post, relatedPosts, recentPosts}) => {
    post = post[0]
    const date = new Date(post?.createdAt);

    return (
        <Wrapper>
            <SEO pageTitle="Game Details" />
            <Header />
            <main id="main-content main-content-style position-relative" className="mt--85">
                <div className="rn-blog-area rn-blog-details-default">
                    <div className="container">
                        <div className="row g-6 game-site-header pt--100">
                            <div className="col-xl-8 col-lg-10">
                                <NewsDetailsArea date={date} post={post} />
                                {
                                    relatedPosts.map(post => (
                                        <NewsDetailsArea date={new Date(post.createdAt)} post={post} />
                                    ) )
                                }
                            </div>

                            <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                                <ReviewSidebar
                                    genres={post?.genres}
                                    recentTitle="So'nggi yangiliklar"
                                    recentPosts={recentPosts}
                                    rootPage="/news"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Wrapper>
    )
};

export async function getServerSideProps(res) {
    const { slug } = res.params;

    const fields = [
        "reviews",
        "slug",
        "title",
        "createdAt",
        "game_picture",
        "timeToRead",
        "genres",
    ]

    const posts = await getAllNews(fields);
    let post = posts?.filter((game) => game?.slug === slug)
    if(!post) {

        return {
            notFound: true
        }
    }

    const recentPosts = posts.filter((filteredPost) => {
        let recentPostsNotCurrent = false;
        if (post.slug !== filteredPost.slug) {
            recentPostsNotCurrent = true
            return recentPostsNotCurrent
        }
    }).slice(0, 8)

    const relatedPosts = posts.filter((filterPost) => {
        if (filterPost.slug === post[0]?.slug) {
            return false; // exclude current post
        }
    
        let isRelated = false;
    
        post[0]?.genres.forEach((genre) => {
            if (filterPost.genres.find((g) => g.title === genre.title)) {
                isRelated = true;
            }
        });
    
        return isRelated;
    }).sort(() => 0.5 - Math.random());
    
    relatedPosts.forEach((relatedPost, index) => {
        relatedPost.isLast = index === relatedPosts.length - 1;
    });

    return {
        props: {
            post,
            recentPosts,
            relatedPosts,
            className: "template-color-1",
        },
    };
}

ReviewSlug.propTypes = {
    post: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ReviewSlug;