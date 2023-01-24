import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import SignUpArea from "@containers/signup";
import { useRouter } from "next/router";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const token = typeof window !== "undefined" && window.localStorage.getItem('access_token');
const router = useRouter()

// if (!token || token == undefined) {
    const SignUp = () => (
        <Wrapper>
            <SEO pageTitle="Sign Up" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="Sign Up" currentPage="Sign Up" />
                <SignUpArea />
            </main>
            <Footer />
        </Wrapper>
    )
// }

export default SignUp;