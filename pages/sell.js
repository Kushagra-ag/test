import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DefaultLayout from '../layouts/default';
import SectionHeading from '../components/SectionHeading';
import OutlineButton from '../components/buttons/Outline';

export default function Sell() {

	const [method, setMethod] = useState('fixed');

	const changeMethod = (e) => {
		console.log(e);

		if(e !== method) {
			method === 'fixed' ? setMethod('timed') : setMethod('fixed');
		}
	}

	return(
		<DefaultLayout>
			<div className="container">
	            <Head>
	                <title>Sell NFT</title>
	            </Head>
	            <div className="row">
	            	<div className="col-md-6 flex-fill text-center text-md-left">
	            		<SectionHeading content="Sell your Demon" />
	            		<div className="font-weight-bolder mt-4 mb-3">
	            			Choose your method of selling
	            		</div>
	            		<div className="d-flex">
	            			<div className={`method-box mr-2 ${method==='fixed' ? 'method-box--active' : ''}`} onClick={() => changeMethod("fixed")}>
		            			<div className="method-box-content">
		            				<Image
		                                src="/svg/icons/tag.svg" 
		                                height={47}
		                                width={36}
		                                alt=""
	                            	/>
	                            	<div className="pt-2">Fixed Price</div>
	                            </div>
	            			</div>
	            			<div className={`method-box ml-2 ${method==='timed' ? 'method-box--active' : ''}`} onClick={() => changeMethod("timed")}>
	            				<div className="method-box-content">
		            				<Image
		                                src="/svg/icons/stopwatch.svg" 
		                                height={47}
		                                width={36}
		                                alt=""
	                            	/>
	                            	<div className="pt-2">Timed Auction</div>
	                            </div>
	            			</div>
	            		</div>
	            	</div>
	            	<div className="col-md-6 flex-fill text-center">
	            		<Image
                                src="/images/image1_home_demons.png" 
                                height={403.2}
                                width={300}
                                alt=""
                            />
	                </div>
	            </div>
	        </div>
	        <style jsx>{`
                .method-box {
                	position: relative;
                	display: flex;
                	justify-content: center;
                	align-items: center;
                    padding: 20% 0;
                    width: 40%;
                    border: 2px solid #aaabad;
                    border-radius: 10px;
                    overflow: hidden;
                    cursor: pointer;
                }
                .method-box--active {
                	background-color: var(--dark);
                	color: #fff;
                	border-color: var(--dark);
                }
                .method-box-content {
                	position: absolute;
                	text-align: center;
                	height: 80%;
				    width: 90%;
				    padding: 10% 5%;
                }
            `}</style>
	    </DefaultLayout>

	)
}