import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from 'react-bootstrap';
import { Analytics } from '@vercel/analytics/react';
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";

const MyApp = ({ Component, pageProps } ) => {
    const getLayout = Component.getLayout || ((page) => page);
    const router = useRouter();

    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);

    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    },[pageProps.className]);

    return (
        <SSRProvider>
            {getLayout(
               <ThemeProvider defaultTheme="dark">
                   <Component {...pageProps} />
               </ThemeProvider>
            )}
            <Analytics />
        </SSRProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;