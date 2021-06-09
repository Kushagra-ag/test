import Link from 'next/link';
import Image from 'next/image';
import LightButton from './buttons/Light';

export default function Footer() {
    return (
        <footer className="page-footer text-white-high">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-left mb-5 mb-md-0">
                        <h2>
                            Enter the world <br /> of Demons
                        </h2>
                        <div className="input-div mt-4 d-inline-flex">
                            <input
                                type="text"
                                className="text-white-high"
                                placeholder="Enter your email"
                            />
                            <LightButton content="Stay Updated" />
                        </div>

                        <div className="mt-5 d-inline-flex font-weight-lighter">
                                <div className="mr-3">
                                    <a href="https://instagram.com/decentralised_monsters" aria-label="DeMons Instagram page">
                                        <Image
                                            className=""
                                            src="/svg/social/instagram.svg"
                                            height={17}
                                            width={16}
                                            alt=""
                                        />
                                        <span className="ml-1 mb-2 align-middle d-inline-block"> Instagram </span>
                                    </a>
                                </div>
                                <div className="ml-3">
                                    
                                    <a href="https://twitter.com/de_monsters" aria-label="DeMons Twitter page">    
                                        <Image
                                            className=""
                                            src="/svg/social/twitter.svg"
                                            height={17}
                                            width={16}
                                            alt=""
                                        />
                                        <span className="ml-1 mb-2 align-middle d-inline-block"> Twitter </span>
                                    </a>
                                </div>
                        </div>

                    </div>
                    <div className="col-md-6 text-center text-md-right mt-5 mt-md-0">
                        <h2>DeMons</h2>
                        <div className="text-white-medium mt-4 font-weight-lighter">
                            <ul className="list-unstyled text-decoration-none">
                                <li className="mb-3">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/the-saga">
                                        <a>Saga</a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/dmz-token">
                                        <a>DMZ Token</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5 pt-1 font-weight-lighter">
                            &#169; DeMons 2021
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                input {
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .input-div {
                    border: 1px solid #ffffff38;
                    padding: 0 10px 0 20px;
                    border-radius: 10px;
                }
            `}</style>
        </footer>
    );
}
