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

                <div className="row section bg-black">
                    <div className="col-12 text-center">
                        <div>
                            <Image
                                className=""
                                src="/images/DMZ-token1.png"
                                height={207}
                                width={207}
                                alt=""
                            />
                        </div>
                        <SectionHeading content="What are DMZ?" light />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
