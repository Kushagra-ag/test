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
                <div className="mx-4 mx-lg-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <SectionHeading content="Reinventing NFTs." />
                            <div className="m-auto w-md-75">
                                Own your DeMon and be a part of a revolutionary digital art and collectable history
                            </div>
                            <div className="my-5">
                                <div className="input-div d-inline-flex justify-content-between w-md-75">
                                    <input
                                        type="text"
                                        className="text-black-high"
                                        placeholder="Enter your email"
                                    />
                                    <div>
                                        <DarkButton content="Stay Updated" />
                                    </div>
                                </div>
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
                                    alt="DeMons"
                                />
                            </div>
                            <div
                                className="mt-4 side-cards"
                                style={{ zIndex: 2 }}
                            >
                                <Image
                                    className="image2 mr-n2"
                                    src="/images/image2_home_demons.png"
                                    height={406.56}
                                    width={375}
                                    alt=""
                                />

                                <Image
                                    className="ml-n2"
                                    src="/images/image3_home_demons.png"
                                    height={406.56}
                                    width={375}
                                    alt=""
                                />
                            </div>

                            <div className="row section bg-black card-row">
                                <div className="col-md-6 text-md-left pr-md-5">
                                    <SectionHeading
                                        content="Yield rewards for holding."
                                        className="mt-4 mt-md-0"
                                        light
                                    />
                                    <div className="font-weight-light text-white-medium py-5 pr-md-5">
                                        These DeMons use DeFi to yield you
                                        rewards. First of its kind, we're about
                                        to launch NFTs that come with their own,
                                        complete financial ecosystem. <br />
                                        <br />
                                        HOW? <br />
                                        SOW your NFTs & REAP big rewards. <br />
                                        <br />
                                        Your DeMons will earn for you simply by
                                        sitting in your wallet. All you gotta do
                                        as the owner of DeMons is, simply hold &
                                        claim rewards (in the form of DMZ) after
                                        every epoch cycle.
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                    
                                    <div className="ripple__card border-20 bg-white pe-none py-4 px-5 mt-auto mb-5 mb-md-auto mb-xl-4">
                                        <div className="text-black-medium">
                                            Rewards Earned
                                        </div>
                                        <h2 className="font-weight-bold text-black-high">
                                            100 DMZ
                                        </h2>
                                        <DarkButton
                                            content="Claim"
                                            className="w-100"
                                        />
                                    </div>
                                    
                                        <Image
                                            className=""
                                            src="/images/image4_demons.png"
                                            height={339}
                                            width={300}
                                            alt=""
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row section text-center align-items-center">
                        <div className="col-md-6 text-md-left mb-5 mb-md-0">
                            <SectionHeading content="Level Up Your Demons." />
                            <div className="pr-md-5 pt-4 text-black-medium">
                                When Caira said Level up, we listened. Levelling
                                up your NFTs opens doors to multiple privileges
                                at each level.
                                <br />
                                Each level-up unlocks a new, riveting feature,
                                for example reward yielding, name changing,
                                voting rights and more. <br />
                                Levelling up also increases their resale value
                                of the NFTs.
                                <br />
                                Stepping up a level requires a certain number of
                                DMZs to be burned.
                                <br />
                            </div>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <div className="level-card card-shadow border-20 bg-white d-inline-flex align-items-end p-4 mb-3 mw-100 pe-none">
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

                    <div className="row section text-center align-items-center">
                        <div className="col-md-6 text-md-left order-1">
                            <Image
                                className=""
                                src="/images/image3_demons.png"
                                height={300}
                                width={233.15}
                                alt="Your Name"
                            />
                            <br />
                            <div className="level-card border-20 bg-transparent d-inline-flex align-items-end mb-3 mw-100">
                                <Image
                                    className="w-100"
                                    src="/images/home-sample.png"
                                    height={220}
                                    width={376}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-6 text-md-right mb-5 mb-md-0 order-0 order-md-2">
                            <SectionHeading
                                content="Voting Portal."
                            />
                            <div className="pl-md-5 pt-4 text-black-medium">
                                DeMons is a community-driven project. Community
                                governance will be facilitated through a voting
                                portal- wherein the members of the community
                                cast their opinions in the form of votes. We
                                desire to bring change in community engagement
                                by DeFying conventional voting and introducing
                                quadratic voting. <br />
                                This voting portal will be utilised to determine
                                community rating, the future story of DeMons &
                                more
                            </div>
                        </div>
                    </div>

                    <div className="row section text-center align-items-center">
                        <div className="col-md-6 text-md-left pr-md-5 mb-5 mb-md-0">
                            <SectionHeading
                                content="Name your DeMons"
                            />
                            <div className="pt-4 text-black-medium">
                                Your power to name your NFT makes you unfadingly
                                immortal on the blockchain. As the owner of a
                                piece of recherché art; your NFT helps prepare
                                for a thorough digital economy- by giving you an
                                ageless digital identity.
                            </div>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <Image
                                className=""
                                src="/images/image2_demons.png"
                                height={300}
                                width={233.15}
                                alt="Your Name"
                            />
                            <br />
                            <div className="level-card card-shadow mx-auto ml-md-auto mr-md-0 border-20 bg-white py-4 px-1 mb-3 mw-100 pe-none">
                                <div
                                    className="d-flex"
                                    style={{ transform: 'scale(.9)' }}
                                >
                                    <OutlineButton
                                        content="Enter name"
                                        className="mr-1 w-75 p-0"
                                    />
                                    <DarkButton
                                        content="Rename"
                                        className="ml-1 flex-shrink-1 px-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section bg-black pt-4">
                        <div className="col-md-6 text-center text-md-left py-5">
                            <SectionHeading
                                content="Resell Marketplace"
                                light
                            />
                        </div>
                        <div className="col-md-6 pb-5 pt-4 pt-md-5 text-center text-md-left">
                            <div className="font-weight-light text-white-medium pl-md-5">
                                In the pursuit of making everything conveniently
                                available at one place for our buyers; we
                                introduce to you DeMonverse’s very own
                                marketplace- so that no buyer/seller/traders has
                                to go elsewhere.
                                <br />
                                <br />
                                Avoid the extra fees and hassle of other
                                platforms.
                            </div>
                        </div>
                        <div className="col-12 resell-section">
                            <img
                                src="/images/homepage-site.png"
                                className="w-100 position-absolute"
                                style={{left:'50%', transform:'translateX(-50%)'}}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="row section partner-section text-center align-items-center justify-content-around">
                        <div className="col-12 mb-3">
                            <SectionHeading content="Our Partners" />
                        </div>
                        <div className="col-12">
                            <div className="row align-items-center justify-content-around">
                                <div className="col-md-2 my-3 px-md-4 px-lg-5">
                                    <Image
                                        src="/images/partners/1.png"
                                        height={66}
                                        width={108}
                                        alt="Zilliqa"
                                    />
                                </div>
                                <div className="col-md-2 my-3 px-md-4 px-lg-5">
                                    <Image
                                        src="/images/partners/2.png"
                                        height={37}
                                        width={164}
                                        alt="Zilpay"
                                    />
                                </div>
                                <div className="col-md-2 my-3 px-md-4 px-lg-5">
                                    <Image
                                        src="/images/partners/3.png"
                                        height={45}
                                        width={108}
                                        alt="Zilhive"
                                    />
                                </div>
                                <div className="col-md-2 my-3 px-md-4 px-lg-5">
                                    <Image
                                        src="/images/partners/4.png"
                                        height={45}
                                        width={124}
                                        alt="QVote"
                                    />
                                </div>
                                <div className="col-md-2 my-3 px-md-4 px-lg-5">
                                    <Image
                                        src="/images/partners/5.png"
                                        height={41}
                                        width={178}
                                        alt="Zilswap"
                                    />
                                </div>
                                <div className="col-md-2 my-3 px-md-4 px-lg-5">
                                    <Image
                                        src="/images/partners/6.png"
                                        height={35}
                                        width={203}
                                        alt="Zillacracy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .side-cards {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                }
                input {
                    background: transparent;
                    border: none;
                    outline: none;
                    width: 60%;
                }
                .input-div {
                    border: 1px solid #c4c4c4;
                    padding: 0 10px 0 20px;
                    border-radius: 10px;
                    max-width: 480px;
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

                .resell-section {
                    margin-bottom: 21vw;
                }

                .partner-section {
                    margin-top: 31vw;
                }

                .ripple-bg {
                    background: url('/svg/ripple.svg') no-repeat center center;
                    background-size: contain;
                }

                .bg-black-img>div {
                    height: 100%;
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
