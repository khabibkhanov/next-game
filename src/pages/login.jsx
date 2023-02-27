import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import LoginArea from "@containers/login";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}


const Login = () => (
    <Wrapper>
        <SEO pageTitle="Log In" />
        <Header />
        <main id="main-content" className="mt--85">
            <Breadcrumb pageTitle="Nuron Login" currentPage="Nuron Login" />
            <LoginArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Login;
