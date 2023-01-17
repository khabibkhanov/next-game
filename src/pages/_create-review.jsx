import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer";
import Breadcrumb from "@components/breadcrumb";
import EditProfileArea from "@containers/edit-profile";
import ReviewInformation from "@containers/edit-review/edit-review";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const EditProfile = () => (
    <Wrapper>
        <SEO pageTitle="Edit Profile" />
        <Header />
        <main id="main-content">
            <ReviewInformation />
        </main>
        <Footer />
    </Wrapper>
);

export default EditProfile;
