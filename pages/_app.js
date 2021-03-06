import Head from 'next/head';
import '../stylesheets/global.css';
import 'lightbox-react/style.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
}
