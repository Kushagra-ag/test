import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/default';
import SectionHeading from '../components/SectionHeading';
import DarkButton from '../components/buttons/Dark';
import OutlineButton from '../components/buttons/Outline';

export default function Home() {
    return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="row">
                    <div className="col-12 text-center">
                        <SectionHeading content="Collect. Earn. Trade" />
                        <div className="m-auto w-75">
                            DeMons is a decentralised collectible NFT universe
                            spawned from the Zilliqa blockchain.
                        </div>
                        <div className="my-5">
                            <DarkButton content="View Gallery" />
                            <OutlineButton content="Know more" />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <div
                            className="position-absolute mx-auto"
                            style={{ left: 0, right: 0, zIndex: 10 }}
                        >
                            <Image
                                className=""
                                src="/images/image1_home_demons.png" // Route of the image file
                                height={406} // Desired size with correct aspect ratio
                                width={302} // Desired size with correct aspect ratio
                                alt="Your Name"
                            />
                        </div>
                        <div className="mt-4 side-cards" style={{ zIndex: 2 }}>
                            <Image
                                className="image2 mr-n2"
                                src="/images/image2.png" // Route of the image file
                                height={406.56} // Desired size with correct aspect ratio
                                width={375} // Desired size with correct aspect ratio
                                alt="Your Name"
                            />

                            <Image
                                className="ml-n2"
                                src="/images/image3.png" // Route of the image file
                                height={406.56} // Desired size with correct aspect ratio
                                width={375} // Desired size with correct aspect ratio
                                alt="Your Name"
                            />
                        </div>
                        <div className="gradient-angle position-relative px-md-5 px-lg-5">
                            <div className="container">
                                <div className="col-md-6 text-md-left px-md-4 px-lg-5 gradient-content">
                                    <SectionHeading
                                        content="Reinventing how NFTs work"
                                        light
                                    />
                                    <div className="font-weight-light text-white py-5">
                                        We'll be incentivising people for holding
                                        NFTs. You'll be earning interests and
                                        utility for holding NFTs. Goal is to create
                                        a NFT circular economy, and we'll be the
                                        first team to ever do that to NFTs. <br />
                                        It's a first NFT series built on Bonding
                                        curve on zilliqa Blockchain and First NFT
                                        series to be gamified.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6"></div>
                </div>

                <div className="grid">
                    <a href="https://nextjs.org/docs" className="card">
                        <h3>Documentation &rarr;</h3>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className="card">
                        <h3>Learn &rarr;</h3>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className="card"
                    >
                        <h3>Examples &rarr;</h3>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="card"
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>

                <footer>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="logo"
                        />
                    </a>
                </footer>

                <style jsx>{`
                    .side-cards {
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                    }

                    .gradient-angle {
                        margin: -15vw 0 0 -50vw;
                        width: 100vw;
                        background-image: linear-gradient(
                            178deg,
                            transparent,
                            transparent 5vw,
                            #1f2227 calc(5vw + 1px),
                            #1f2227
                        );
                        left: 50%;
                        z-index: 5;
                    }

                    .gradient-content {
                        padding-top: calc(50vh + 20px);
                    }

                    main {
                        padding: 5rem 0;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    footer {
                        width: 100%;
                        height: 100px;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    footer img {
                        margin-left: 0.5rem;
                    }

                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    a {
                        color: inherit;
                        text-decoration: none;
                    }

                    .title a {
                        color: #0070f3;
                        text-decoration: none;
                    }

                    .title a:hover,
                    .title a:focus,
                    .title a:active {
                        text-decoration: underline;
                    }

                    .title {
                        margin: 0;
                        line-height: 1.15;
                        font-size: 4rem;
                    }

                    .title,
                    .description {
                        text-align: center;
                    }

                    .description {
                        line-height: 1.5;
                        font-size: 1.5rem;
                    }

                    code {
                        background: #fafafa;
                        border-radius: 5px;
                        padding: 0.75rem;
                        font-size: 1.1rem;
                        font-family: Menlo, Monaco, Lucida Console,
                            Liberation Mono, DejaVu Sans Mono,
                            Bitstream Vera Sans Mono, Courier New, monospace;
                    }

                    .grid {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;

                        max-width: 800px;
                        margin-top: 3rem;
                    }

                    .card {
                        margin: 1rem;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        text-align: left;
                        color: inherit;
                        text-decoration: none;
                        border: 1px solid #eaeaea;
                        border-radius: 10px;
                        transition: color 0.15s ease, border-color 0.15s ease;
                    }

                    .card:hover,
                    .card:focus,
                    .card:active {
                        color: #0070f3;
                        border-color: #0070f3;
                    }

                    .card h3 {
                        margin: 0 0 1rem 0;
                        font-size: 1.5rem;
                    }

                    .card p {
                        margin: 0;
                        font-size: 1.25rem;
                        line-height: 1.5;
                    }

                    .logo {
                        height: 1em;
                    }

                    @media (max-width: 767px) {
                        .side-cards {
                            visibility: hidden;
                        }
                        .gradient-content {
                        }
                    }

                    @media (max-width: 575px) {
                        .gradient-content {
                            padding-top: 50vh;
                        }
                    }
                `}</style>

                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                            Droid Sans, Helvetica Neue, sans-serif;
                    }

                    * {
                        box-sizing: border-box;
                    }
                `}</style>
            </div>
        </DefaultLayout>
    );
}
