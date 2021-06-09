import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/default';
import SectionHeading from '../components/SectionHeading';

export default function Saga() {
    return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>The Saga</title>
                </Head>
                <div className="mx-4 mx-lg-5">
                	<div className="row section text-center text-md-left">
                		<div className="col-12">
                			<Image
                                    className=""
                                    src="/svg/saga-icon.svg"
                                    height={36}
                                    width={120}
                                    alt=""
                            />
                			<SectionHeading content="The Saga." className="mb-4 mt-1" />
                			<div>
                				The birth of DeMons traces back to the creation of Zilliverse; which in turn traces back to when the shards on the Zilliqa blockchain collided. These shards, traveling at a godspeed, led to a big-bang-esque explosion; spawning a brand new metaverse of monsters, called the DeMonverse.
                				<br /><br />
								Deep in the DeMonverse lies the planet Zion; inhabited by five mystical species. Out of these five, only two are known to humankind. One of them is the Godzilliqas- a magical kingdom of great war and wealth.
								<br /><br />
								Each of the Godzilliqa family is unequaled in its own way- possessing distinguishable powers.
								<br /><br />
								The remaining three shards are still a dark mystery, waiting to be unfolded exclusively by the people of the DeMonverse.
                			</div>
                		</div>
                	</div>

                	<div className="row section text-center align-items-center justify-content-center">
                		<div className="col">
                			<div className="card--dark card-1 border-20 p-5 my-2 mx-auto">
                				The GodZilliqa Shard
                			</div>
                		</div>
                		<div className="col">
                			<div className="card--dark card-2 border-20 py-5 px-4 my-2 mx-auto">
                				The Sharded Jungle of the CryptoApes
                			</div>
                		</div>
                		<div className="col">
                			<div className="card--dark card-3 border-20 p-5 my-2 mx-auto">
                				?
                			</div>
                		</div>
                		<div className="col">
                			<div className="card--dark card-4 border-20 p-5 my-2 mx-auto">
                				?
                			</div>
                		</div>
                		<div className="col">
                			<div className="card--dark card-5 border-20 p-5 my-2 mx-auto">
                				?
                			</div>
                		</div>
                	</div>

                	<div className="row section text-center align-items-start row-bg pt-5">
                        <div className="col-md-6 text-md-left ">
                            {/*<Image
                                className=""
                                src="/images/image1_home_demons.png"
                                height={300}
                                width={233.15}
                                alt="Your Name"
                            />
                            <br />*/}
                          
                            {/*<img src="/images/godzilliqa-saga-bg.png" className="position-absolute" alt="" />*/}
                            
                            <SectionHeading
                                content="GodZilliqa Shard"
                                className=""
                            />
                        </div>
                        <div className="col-md-6 text-md-left mb-5 mb-md-0">
                            
                            <div className="pl-md-5 pt-4">
                                Godzilliqa is a country forged out of contradictions- of technology that seems to be evolving at breakneck speed, co-existing with customs that date back centuries. These have been preserved and carefully passed down generation after generation.
                                <br /><br />
								It is a country of enormous wealth, and crumbling slums. Of magic-wielding families and bombs that are made to detonate before they ever hit the ground.
								<br /><br />
								And much like any other civilization, Godzilliqa is a nation forged out of war and peace. Of love and hope, and destruction and deaths. 
								<br /><br />
								But above all, it is a nation that preserves. Brick by brick. From war to wealth.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            	.card--dark {
            		display: flex;
            		align-items: center;
            		justify-content: center;
                    background: var(--dark) no-repeat right top;
                    background-size: cover;
                    color: #ffffffde;
                    font-family: 'clashdisplay';
                    max-width: 190px;
                    max-height: 177px;
                }
                .card-1 {
                    background-image: url('/images/godzilliqa-saga-bg.png');
                }
                .card-2 {
                    background-image: url('/images/cryptoapes-saga-bg.png');
                }
                .card-3, .card-4, .card-5 {
                	font-size: 300%;
                	color: #ffffff61;
                }
                .row-bg {
                	background: #fff url('/images/godzilliqa-saga-bg-1.png') no-repeat left top;
                	background-size: contain;
                }
            `}</style>
        </DefaultLayout>
    )
}