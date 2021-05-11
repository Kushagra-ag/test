import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DefaultLayout from '../layouts/default';
import Tab from '../components/Tabs';

export default function Tabs() {
    const { query } = useRouter();

    const isTabOneSelected = !!query.tabOne;
    const isTabTwoSelected = !!query.tabTwo;
    const isTabThreeSelected = !!query.tabThree;

    return (
        <div>
            <Head>
                <title>Tab template</title>
            </Head>

            <main>
                <h1>Title</h1>

                <div>
                    <Tab
                        href="/tab?tabOne=true"
                        title="Tab One"
                        isSelected={isTabOneSelected}
                        bubble={1}
                    />
                    <Tab
                        href="/tab?tabTwo=true"
                        title="Tab Two"
                        isSelected={isTabTwoSelected}
                    />
                    <Tab
                        href="/tab?tabThree=true"
                        title="Tab Three"
                        isSelected={isTabThreeSelected}
                    />
                </div>

                <section>
                    <p>{JSON.stringify(query)}</p>
                </section>
            </main>
        </div>
    );
}
