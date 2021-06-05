import Link from 'next/link';
import DarkButton from '../buttons/Dark';

export default function Header() {
    const loggedIn = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between px-md-5 mb-5">
            <div className="text-lg-center nav-logo">
                <a className="navbar-brand font-weight-bold" href="/">
                    DeMons
                </a>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex">
                <div
                    className="collapse navbar-collapse align-items-center mr-4"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link href="/gallery">
                                <a className="nav-link">The Saga</a>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link href="#">
                                <a className="nav-link">DMZ Token</a>
                            </Link>
                        </li>

                        <li className="d-lg-none">
                            {loggedIn ? (
                                <div className="act-details card-shadow d-flex justify-content-end align-items-center py-1">
                                    <div className="mr-2">
                                        <div className="act-bal text-right">
                                            200 DMZ
                                        </div>
                                        <div className="act-address overflow-hidden">
                                            dsjhvbjhbhjbhjbfdvbfe
                                        </div>
                                    </div>
                                    <div className="act-img m-1 mr-2"></div>
                                </div>
                            ) : (
                                <div className="input-div mt-4 d-inline-flex">
                                    <input
                                        type="text"
                                        className="text-black-high"
                                        placeholder="Enter your email"
                                    />
                                    <div>
                                        <DarkButton content="Stay Updated" />
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-block text-right">
                    {loggedIn ? (
                        <div className="act-details card-shadow d-flex justify-content-end align-items-center py-1 my-1">
                            <div className="mr-2">
                                <div className="act-bal text-right">
                                    200 DMZ
                                </div>
                                <div className="act-address overflow-hidden">
                                    dsjhvbjhbhjbhjbfdvbfe
                                </div>
                            </div>
                            <div className="act-img m-1 mr-2"></div>
                        </div>
                    ) : (
                        <div className="input-div d-inline-flex">
                            <input
                                type="text"
                                className="text-black-high"
                                placeholder="Enter your email"
                            />
                            <div>
                                <DarkButton content="Stay Updated" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .navbar {
                    background-color: #fff;
                    box-shadow: 0 4px 50px #0000000a;
                }
                .navbar-collapse {
                    flex-grow: unset;
                }
                .act-details {
                    font-size: 75%;
                    width: 220px;
                    border-radius: 50px;
                }
                .act-bal {
                    font-weight: 500;
                }
                .act-img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid black;
                }
                .act-address {
                    max-width: 140px;
                }
                input {
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .input-div {
                    border: 1px solid #c4c4c4;
                    padding: 0 10px 0 20px;
                    border-radius: 10px;
                    transform: scale(0.8);
                }
                @media (min-width: 992px) {
                    .nav-logo {
                        width: 220px;
                    }
                }
            `}</style>
        </nav>
    );
}
