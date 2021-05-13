import Link from 'next/link';
import OutlineButton from './buttons/Outline';

export default function Header() {
    const loggedIn = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between px-md-5 mb-5">
            <div className="text-lg-center nav-logo">
                <a className="navbar-brand font-weight-bold" href="#">
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

            <div
                className="collapse navbar-collapse align-items-center"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <li className="nav-item mx-2">
                        <Link href="#">
                        <a className="nav-link">
                            Overview <span className="sr-only">(current)</span>
                        </a>
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link href="/gallery">
                        <a className="nav-link">
                            Gallery
                        </a>
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link href="#">
                        <a className="nav-link">
                            DMZ Token
                        </a>
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link href="#">
                        <a className="nav-link">
                            Voting Portal
                        </a>
                        </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
		        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Dropdown
		        </a>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a className="dropdown-item" href="#">Action</a>
		          <a className="dropdown-item" href="#">Another action</a>
		          <div className="dropdown-divider"></div>
		          <a className="dropdown-item" href="#">Something else here</a>
		        </div>
		      </li>*/}
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
                            <OutlineButton content="My wallet" />
                        )}
                    </li>
                </ul>
            </div>
            <div
                className="d-none d-lg-block text-right"
                style={{ width: '220px' }}
            >
                {loggedIn ? (
                    <div className="act-details card-shadow d-flex justify-content-end align-items-center py-1 my-1">
                        <div className="mr-2">
                            <div className="act-bal text-right">200 DMZ</div>
                            <div className="act-address overflow-hidden">
                                dsjhvbjhbhjbhjbfdvbfe
                            </div>
                        </div>
                        <div className="act-img m-1 mr-2"></div>
                    </div>
                ) : (
                    <OutlineButton content="My wallet" />
                )}
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
                @media (min-width: 992px) {
                    .nav-logo {
                        width: 220px;
                    }
                }
            `}</style>
        </nav>
    );
}
