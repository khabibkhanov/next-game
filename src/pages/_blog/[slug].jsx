// import PropTypes from "prop-types";
// import SEO from "@components/seo";
// import Wrapper from "@layout/wrapper";
// import Header from "@layout/header/header-01";
// import Footer from "@layout/footer-01";
// import Breadcrumb from "@components/breadcrumb";
// import BlogDetailsArea from "@containers/blog-details";
// import CommentsArea from "@containers/comments-area";
// import CommentForm from "@components/comment-form";
// import RelatedPostsArea from "@containers/related-posts";
// import BlogSidebar from "@containers/blog-sidebar";
// import { getAllReviews, getReviewsBySlug } from "../../lib/api";

// const BlogDetails = ({ post, categories, recentPosts, genres, relatedPosts }) => (
//     <Wrapper>
//         <SEO pageTitle="Game Details" />
//         <Header />
//         <main id="main-content">
//             <Breadcrumb pageTitle="Game Details" currentPage="Game Details" />
//             <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
//                 <div className="container">
//                     <div className="row g-6">
//                         <div className="col-xl-8 col-lg-8">
//                             <BlogDetailsArea post={post} />
//                             <RelatedPostsArea relatedPosts={relatedPosts} />
//                         </div>
//                         <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
//                             <BlogSidebar
//                                 categories={categories}
//                                 recentPosts={recentPosts}
//                                 genres={genres}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//         <Footer />
//     </Wrapper>
// );

// export async function getStaticPaths() {
//     const posts = getAllReviews(["slug"]);

//     // map through to return post paths
//     const paths = posts.map((post) => ({
//         params: {
//             slug: post.slug,
//         },
//     }));


//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const { slug } = params;
//     const post = getReviewsBySlug(slug, [
//         "content",
//         "title",
//         "date",
//         "slug",
//         "image",
//         "category",
//     ]);
//     const posts = getAllReviews([
//         "category",
//         "slug",
//         "title",
//         "genres",
//         "image",
//         "timeToRead",
//     ]);
//     const categories = posts.map((blog) => ({ ...blog.category }));
//     const genres = posts.map((blog) => [...blog.genres]);
//     const recentPosts = posts.slice(0, 4);
//     const relatedPosts = posts
//         .filter((blog) => blog.category.slug === post.category.slug)
//         .slice(0, 3);

//     return {
//         props: {
//             post,
//             slug,
//             categories,
//             recentPosts,
//             genres,
//             relatedPosts,
//             className: "template-color-1",
//         },
//     };
// }

// BlogDetails.propTypes = {
//     post: PropTypes.shape({}),
//     categories: PropTypes.arrayOf(PropTypes.shape({})),
//     recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
//     genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
//     relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
// };

// export default BlogDetails;
