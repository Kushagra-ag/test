import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/default';
import SectionHeading from '../components/SectionHeading';

export default function DMZ() {
    return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>About DMZ</title>
                </Head>
                <div className="mx-4 mx-lg-5">
                    <div className="row section bg-black">
                        <div className="col-12 text-center text-md-right">
                            <Image
                                className="ml-auto d-block"
                                src="/images/DMZ-token1.png"
                                height={187}
                                width={187}
                                alt="Demons"
                            />
                        </div>
                        <div className="col-12 text-center mt-n3 mt-md-n5">
                            <SectionHeading content="What are DMZ?" light />
                            <span className="f-85">
                                (Pronounced dee-em-zee)
                            </span>
                            <div className="mt-5 mx-5">
                                DMZ is the Utility and governance token for
                                DeMonVerse
                                <br />
                                Holding each NFT will yield experience in the
                                form of a ZRC2 token named DMZ.
                                <br />
                                DMZs are tokens minted in and owned by the
                                DeMonverse. These tokens expedite and enhance
                                your experience of the activities you do in the
                                DeMonverse.
                                <br />
                                <br />
                                The only ticket holders to the epic saga of the
                                DeMonverse are the holders of DMZ.
                            </div>
                        </div>
                        <div className="col-12 text-center text-md-left">
                            <Image
                                className=""
                                src="/images/DMZ-token2.png"
                                height={347}
                                width={347}
                                alt=""
                            />
                        </div>
                        <div className="col-12 text-center mt-n5 mb-4">
                            <Image
                                className=""
                                src="/svg/icons/arrow-circle-down.svg"
                                height={33}
                                width={33}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="row section text-center align-items-center">
                        <div className="col-12 mb-5">
                            <SectionHeading content="DMZ Utility" />
                        </div>
                        <div className="col-12">
                            <div className="row align-items-center justify-content-around">
                                <div className="col-md-6 col-lg-3">
                                    <div className="bg-white card-shadow border-20 p-3 my-2">
                                        <Image
                                            className=""
                                            src="/svg/icons/utility-1.svg"
                                            height={76}
                                            width={55}
                                            alt=""
                                        />
                                        <div className="font-weight-bolder mt-3">
                                            Liquidity <br /> Mining
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="bg-white card-shadow border-20 p-3 my-2">
                                        <Image
                                            className=""
                                            src="/svg/icons/utility-2.svg"
                                            height={76}
                                            width={55}
                                            alt=""
                                        />
                                        <div className="font-weight-bolder mt-3">
                                            Voting <br /> Portal
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="bg-white card-shadow border-20 p-3 my-2">
                                        <Image
                                            className=""
                                            src="/svg/icons/utility-3.svg"
                                            height={76}
                                            width={55}
                                            alt=""
                                        />
                                        <div className="font-weight-bolder mt-3">
                                            Marketplace <br /> Purchases
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="bg-white card-shadow border-20 p-3 my-2">
                                        <Image
                                            className=""
                                            src="/svg/icons/utility-4.svg"
                                            height={76}
                                            width={55}
                                            alt=""
                                        />
                                        <div className="font-weight-bolder mt-3">
                                            Level <br /> Up
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section text-center align-items-center">
                        <div className="col-12 mb-5">
                            <SectionHeading content="Token Metrics" />
                        </div>
                        <div className="col-12">
                            <img
                                src="/svg/tokenmetrics.svg"
                                className="w-100"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
