import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/default';
import SectionHeading from '../components/SectionHeading';
import GradientButton from '../components/buttons/Gradient';
import OutlineButton from '../components/buttons/Outline';
import Tabs from '../components/Tabs';
import Story from '../components/sections/story';
import History from '../components/sections/history';
import Details from '../components/sections/details';

export default function Owned() {
    const [activeTab, setActiveTab] = useState('story');

    const changeTab = e => {
        if (e !== activeTab) setActiveTab(e);
    };

    return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>My NFTs</title>
                </Head>
                <div className="row">
                    <div className="col-md-6 flex-fill text-center">
                        <div className="card-box d-inline-flex flex-column flex-md-row mb-4">
                            <div className="d-flex flex-md-column justify-content-between mr-0 mr-md-3 order-1">
                                <div className="card-filter card-shadow mt-2 mt-md-0">
                                    <Image
                                        src="/svg/icons/arrow-left.svg"
                                        height={29}
                                        width={16}
                                        alt="View Gallery"
                                    />
                                </div>
                                <div className="card-filter card-shadow mt-auto">
                                    <Image
                                        src="/svg/icons/download.svg"
                                        height={29}
                                        width={16}
                                        alt="View Gallery"
                                    />
                                </div>
                                <div className="card-filter card-shadow mt-2">
                                    <Image
                                        src="/svg/icons/heart.svg"
                                        height={29}
                                        width={16}
                                        alt="View Gallery"
                                    />
                                </div>
                                <div className="card-filter card-shadow mt-2">
                                    <Image
                                        src="/svg/icons/share.svg"
                                        height={29}
                                        width={16}
                                        alt="View Gallery"
                                    />
                                </div>
                                <div className="card-filter card-shadow mt-2">
                                    <Image
                                        src="/svg/icons/full-screen.svg"
                                        height={29}
                                        width={16}
                                        alt="View Gallery"
                                    />
                                </div>
                            </div>
                            <div className="order-0 order-md-2">
                                <Image
                                    src="/images/image1_home_demons.png"
                                    height={403.2}
                                    width={300}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 flex-fill text-center text-md-left mt-4 mt-md-0">
                        <GradientButton content="Legendary" className="mb-4" />
                        <SectionHeading
                            content="Mecha Dragonzilla"
                            className="mb-4"
                        />
                        <div>
                            <OutlineButton
                                content="Rename"
                                icon="edit"
                                className="ml-n2"
                            />
                            <OutlineButton content="Sell Demon" />
                        </div>
                        <div className="mt-5 d-flex justify-content-center justify-content-md-start">
                            <Tabs
                                title="Story"
                                isSelected={activeTab === 'story'}
                                changeTab={() => changeTab('story')}
                                // bubble={1}
                            />
                            <Tabs
                                title="Details"
                                isSelected={activeTab === 'details'}
                                changeTab={() => changeTab('details')}
                            />
                            <Tabs
                                title="History"
                                isSelected={activeTab === 'history'}
                                changeTab={() => changeTab('history')}
                            />
                        </div>
                        <div className="mt-5">
                            {activeTab === 'story' && (
                                <Story
                                    number={76}
                                    height={984}
                                    gender="M"
                                    age={50}
                                    content=""
                                />
                            )}
                            {activeTab === 'details' && <Details />}
                            {activeTab === 'history' && <History />}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card-filter {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 40px;
                    width: 40px;
                    border-radius: 10px;
                    cursor: pointer;
                }
            `}</style>
        </DefaultLayout>
    );
}
