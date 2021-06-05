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
                    <title>DeMons</title>
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
                                src="/images/image1_home_demons.png"
                                height={406}
                                width={302}
                                alt="Your Name"
                            />
                        </div>
                        <div className="mt-4 side-cards" style={{ zIndex: 2 }}>
                            <Image
                                className="image2 mr-n2"
                                src="/images/image2.png"
                                height={406.56}
                                width={375}
                                alt="Your Name"
                            />

                            <Image
                                className="ml-n2"
                                src="/images/image3.png"
                                height={406.56}
                                width={375}
                                alt="Your Name"
                            />
                        </div>

                        <div className="row section bg-black card-row">
                            <div className="col-md-6 text-md-left pr-md-5">
                                <SectionHeading
                                    content="Yield rewards for holding."
                                    light
                                />
                                <div className="font-weight-light text-white py-5 pr-md-5">
                                    These DeMons use DeFi to yield you rewards.
                                    First of its kind, we're about to launch
                                    NFTs that come with their own, complete
                                    financial ecosystem. <br />
                                    <br />
                                    HOW? <br />
                                    SOW your NFTs & REAP big rewards. <br />
                                    <br />
                                    Your DeMons will earn for you simply by
                                    sitting in your wallet. All you gotta do as
                                    the owner of DeMons is, simply hold & claim
                                    rewards (in the form of DMZ) after every
                                    epoch cycle.
                                </div>
                            </div>
                            <div className="col-md-6 ripple-bg d-flex justify-content-center align-items-center mb-5 mb-md-0">
                                <div className="ripple__card border-20 bg-white py-4 px-5">
                                    <div className="text-black-medium">
                                        Rewards Earned
                                    </div>
                                    <h2 className="font-weight-bold">
                                        100 DMZ
                                    </h2>
                                    <DarkButton
                                        content="Claim"
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row section text-center">
                    <div className="col-md-6 text-md-left pr-md-5 mb-5 mb-md-0">
                        <SectionHeading
                            content="Level Up Your Demons."
                            className=""
                        />
                        <div className="pr-md-5 pt-4 text-black-medium">
                            When Caira said Level up, we listened. Levelling up
                            your NFTs opens doors to multiple privileges at each
                            level.
                            <br />
                            Each level-up unlocks a new, riveting feature, for
                            example reward yielding, name changing, voting
                            rights and more. <br />
                            Levelling up also increases their resale value of
                            the NFTs.
                            <br />
                            Stepping up a level requires a certain number of
                            DMZs to be burned.
                            <br />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="level-card card-shadow border-20 bg-white d-inline-flex align-items-end p-4 mb-3 mw-100">
                            <div className="text-black-medium text-left mr-4">
                                Level
                                <h2 className="text-black-high">8</h2>
                            </div>
                            <DarkButton
                                content="Level Up"
                                className="w-100 mx-md-1"
                            />
                        </div>
                        <br />
                        <Image
                            className=""
                            src="/images/image1_home_demons.png"
                            height={300}
                            width={233.15}
                            alt="Your Name"
                        />
                    </div>
                </div>

                <div className="row section text-center">
                    <div className="col-md-6 text-md-left order-1">
                        <Image
                            className=""
                            src="/images/image1_home_demons.png"
                            height={300}
                            width={233.15}
                            alt="Your Name"
                        />
                        <br />
                        <div className="level-card card-shadow border-20 bg-white d-inline-flex align-items-end p-4 mb-3 mw-100">
                            <Image
                                className=""
                                src="/images/home-sample.png"
                                height={220}
                                width={376}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-md-left pr-md-5 mb-5 mb-md-0 order-0 order-md-2">
                        <SectionHeading content="Voting Portal." className="" />
                        <div className="pr-md-5 pt-4 text-black-medium">
                            DeMons is a community-driven project. Community
                            governance will be facilitated through a voting
                            portal- wherein the members of the community cast
                            their opinions in the form of votes. We desire to
                            bring change in community engagement by DeFying
                            conventional voting and introducing quadratic
                            voting. <br />
                            This voting portal will be utilised to determine
                            community rating, the future story of DeMons & more
                        </div>
                    </div>
                </div>

                <div className="row section">
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

                .card-row {
                    margin-top: -13vw;
                    padding-top: calc(40vh + 20px);
                    z-index: 5;
                }
                .home-gradient-div__bg {
                    backgroun-image: linear-gradient(
                        178deg,
                        transparent,
                        transparent 5vw,
                        #1f2227 calc(5vw + 1px),
                        #1f2227
                    );

                    z-index: 5;
                }

                .gradient-content {
                }

                .ripple-bg {
                    background: url('/svg/ripple.svg') no-repeat center center;
                    background-size: contain;
                }

                .level-card {
                    width: 233px;
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
