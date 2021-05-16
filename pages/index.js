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
                            <DarkButton
                                content="View Gallery"
                                className="mr-2"
                            />
                            <OutlineButton
                                content="Know more"
                                className="ml-2"
                            />
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
                                        We'll be incentivising people for
                                        holding NFTs. You'll be earning
                                        interests and utility for holding NFTs.
                                        Goal is to create a NFT circular
                                        economy, and we'll be the first team to
                                        ever do that to NFTs. <br />
                                        It's a first NFT series built on Bonding
                                        curve on zilliqa Blockchain and First
                                        NFT series to be gamified.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6"></div>
                </div>
            </div>
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
        </DefaultLayout>
    );
}
