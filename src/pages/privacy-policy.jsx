import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import PrivacyPolicyArea from "@containers/privacy-policy";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const PrivacyPolicy = () => (
    <Wrapper>
        <SEO pageTitle="Mahfiylik siyosati" />
        <Header />
        <main id="main-content" className="mt--85">
            <Breadcrumb
                pageTitle="Maxfiylik siyosati"
                currentPage="Maxfiylik siyosati"
            />
            <PrivacyPolicyArea />
        </main>
        <Footer />
    </Wrapper>
);

export default PrivacyPolicy;
