import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/default';
import SectionHeading from '../components/SectionHeading';
import DarkButton from '../components/buttons/Dark';
import OutlineButton from '../components/buttons/Outline';

export default function Gallery() {
    const [showFilter, setShowFilter] = useState(false);
    const [order, setOrder] = useState('chronological');
    const [filters, setFilters] = useState({
        priceRange: 1,
        family: 1,
        rarity: 1
    });

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const orderChange = e => {
        setOrder(e.target.value);
    };

    return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>Gallery</title>
                    {/*<link rel="icon" href="/favicon.ico" />*/}
                </Head>

                <div className="row">
                    <div className="col-12">
                        <SectionHeading content="Gallery" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 d-flex justify-content-between">
                        <div>
                            <select
                                value={order}
                                className="custom-select"
                                onChange={e => orderChange(e)}
                            >
                                <option value="chronological">
                                    Chronological
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            className={`btn btn-outline-light ${
                                showFilter ? 'btn-active' : ''
                            } mx-2 py-3`}
                            onClick={toggleFilter}
                        >
                            <i
                                className={`fa fa-filter pr-3 ${
                                    showFilter ? 'd-none' : ''
                                }`}
                                aria-hidden="true"
                            ></i>
                            Filters
                            <i
                                className={`fas fa-times pl-3 ${
                                    showFilter ? '' : 'd-none'
                                }`}
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
                <div className="row mw-100 overflow-hidden">
                    <div className="col-12 d-flex justify-content-between flex-column flex-md-row">
                        <div
                            className={`glry-filter ${
                                showFilter ? '' : 'close-filters'
                            } order-0 order-md-2 overflow-hidden text-center text-md-left pl-md-3`}
                        >
                            <div className="mb-4">
                                <span className="f-85 text-black-medium">
                                    Price range
                                </span>
                                <div className="mt-2">
                                    {/*<input type="range" min="10" max="100" className="glry-price-range position-absolute"/>*/}
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        className="glry-price-range"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="f-85 text-black-medium">
                                    Family
                                </span>
                                <select
                                    value={filters.family}
                                    className="d-block w-75 w-md-100 custom-select mt-2 mx-auto mx-md-0"
                                    onChange={e => orderChange(e)}
                                >
                                    <option value="1">Kawaii</option>
                                    <option value="11">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <span className="f-85 text-black-medium">
                                    Rarity
                                </span>
                                <select
                                    value={filters.rarity}
                                    className="d-block w-75 w-md-100 custom-select mt-2 mx-auto mx-md-0"
                                    onChange={e => orderChange(e)}
                                >
                                    <option value="1">Legendary</option>
                                    <option value="11">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="glry d-flex flex-row justify-content-md-start justify-content-center align-items-center flex-wrap order-1 mt-4 mt-md-0">
                            <div className="glry-card">
                                <Image
                                    src="/images/image1_home_demons.png"
                                    height={336}
                                    width={250}
                                    alt="Your Name"
                                />
                            </div>
                            <div className="glry-card">
                                <Image
                                    src="/images/image1_home_demons.png"
                                    height={336}
                                    width={250}
                                    alt="Your Name"
                                />
                            </div>
                            <div className="glry-card">
                                <Image
                                    src="/images/image1_home_demons.png"
                                    height={336}
                                    width={250}
                                    alt="Your Name"
                                />
                            </div>
                            <div className="glry-card">
                                <Image
                                    src="/images/image1_home_demons.png"
                                    height={336}
                                    width={250}
                                    alt="Your Name"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .glry {
                    transition: all 1s;
                }
                .glry-card {
                    padding: 0 20px 20px 0;
                }
                .glry-filter {
                    transition: all 1s;
                    min-width: 25%;
                    height: 100%;
                }
                input[type='range'] {
                    -webkit-appearance: none;
                    background-color: transparent;
                    width: 200px;
                    max-width: 100%;
                }
                input[type='range']::-webkit-slider-runnable-track {
                    width: 100%;
                    /*background: #fff
                        url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMjU2IDE0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDcuMDAwMTZDMCA2LjI5MjY4IDAuNTY1MDk5IDUuNzE0NzYgMS4yNzI0IDUuNjk4OTFMMjQ4LjUwMiAwLjE1NzAyOUMyNTIuMzQxIDAuMDcwOTY1NyAyNTUuNSAzLjE1OTggMjU1LjUgNy4wMDAxNlY3LjAwMDE2VjcuMDAwMTZDMjU1LjUgMTAuODQwNSAyNTIuMzQxIDEzLjkyOTMgMjQ4LjUwMiAxMy44NDMzTDEuMjcyNCA4LjMwMTQxQzAuNTY1MDk5IDguMjg1NTUgMCA3LjcwNzYzIDAgNy4wMDAxNlY3LjAwMDE2VjcuMDAwMTZaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNy4wMDAxNkMwIDYuMjkyNjggMC41NjUwOTkgNS43MTQ3NiAxLjI3MjQgNS42OTg5MUwyNDguNTAyIDAuMTU3MDI5QzI1Mi4zNDEgMC4wNzA5NjU3IDI1NS41IDMuMTU5OCAyNTUuNSA3LjAwMDE2QzI1NS41IDEwLjg0MDUgMjUyLjM0MSAxMy45MjkzIDI0OC41MDIgMTMuODQzM0wxLjI3MjQgOC4zMDE0MUMwLjU2NTA5OSA4LjI4NTU1IDAgNy43MDc2MyAwIDcuMDAwMTZaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjExOSIgaGVpZ2h0PSIxNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMSI+CjxyZWN0IHdpZHRoPSIxMzciIGhlaWdodD0iMTQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==')
                        no-repeat center;*/
                    background-size: contain;

                    background-color: #000;
                    mask-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMjU2IDE0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCA2Ljg0NDg4QzAgNi4xMzc0MSAwLjU2NTA5OSA1LjU1OTQ5IDEuMjcyNCA1LjU0MzYzTDI0OC41MDIgMC4wMDE3NTU4QzI1Mi4zNDEgLTAuMDg0MzA3NyAyNTUuNSAzLjAwNDUzIDI1NS41IDYuODQ0ODhDMjU1LjUgMTAuNjg1MiAyNTIuMzQxIDEzLjc3NDEgMjQ4LjUwMiAxMy42ODhMMS4yNzI0IDguMTQ2MTNDMC41NjUwOTkgOC4xMzAyOCAwIDcuNTUyMzYgMCA2Ljg0NDg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTAgNi44NDQ4OEMwIDYuMTM3NDEgMC41NjUwOTkgNS41NTk0OSAxLjI3MjQgNS41NDM2M0wyNDguNTAyIDAuMDAxNzU1OEMyNTIuMzQxIC0wLjA4NDMwNzcgMjU1LjUgMy4wMDQ1MyAyNTUuNSA2Ljg0NDg4QzI1NS41IDEwLjY4NTIgMjUyLjM0MSAxMy43NzQxIDI0OC41MDIgMTMuNjg4TDEuMjcyNCA4LjE0NjEzQzAuNTY1MDk5IDguMTMwMjggMCA3LjU1MjM2IDAgNi44NDQ4OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=');
                    -webkit-mask-size: contain;
                    mask-repeat: no-repeat;
                    mask-position: center;

                    /*border-style: solid;
                    	border-color: orange;
                    	border-width: 5px 5px 5px 1px;
                    	border-radius: 150px 30px 30px 150px / 30px 30px 30px 30px;
                    	background-color: fff;*/
                }
                input[type='range']::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    background-color: #000;
                    height: 20px;
                    width: 20px;
                    border: 3px solid #f0f;
                    border-radius: 50%;
                }
                .close-filters {
                    margin-right: -30%;
                }
                .btn {
                    color: var(--dark);
                    font-weight: 300;
                    border: 3px solid var(--light-grey);
                    border-radius: 30px;
                }
                .btn-active,
                .btn:hover {
                    color: white;
                    background-color: var(--dark);
                    border-color: transparent;
                }
                @media (max-width: 767px) {
                    .close-filters {
                        margin-right: unset;
                        height: 0;
                    }
                    .glry-card {
                        padding: 20px 0;
                    }
                }
            `}</style>
        </DefaultLayout>
    );
}
