import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Details() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div
                        className="card-shadow d-flex align-items-center p-3"
                        style={{ borderRadius: '15px' }}
                    >
                        <div className="flex-fill border-right">
                            <span className="d-block text-black-medium mb-2 f-85">
                                Owned by
                            </span>
                            <div className="d-inline-block overflow-hidden rounded-circle position-relative align-middle user-img-thumb">
                                <Image
                                    src="/images/user.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="User image"
                                />
                            </div>
                            <div
                                className="d-inline-block ml-4 font-weight-bolder text-truncate mt-2"
                                style={{ maxWidth: '13vw' }}
                            >
                                @amminus
                            </div>
                        </div>
                        <div className="flex-fill ml-3">
                            <div className="text-black-medium f-85">
                                Sold for
                            </div>
                            <div className="sold-price">200 DMZ</div>
                            <div className="text-black-medium font-weight-bolder">
                                $1000
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mb-4 text-black-medium">
                        Properties
                    </div>
                    <div
                        className="card-shadow p-3 mb-3 f-85"
                        style={{ borderRadius: '15px' }}
                    >
                        <div className="text-black-medium mb-2">
                            Serial Number
                        </div>
                        <div className="sold-price NFT-props">1</div>
                    </div>
                    <div
                        className="card-shadow p-3 mb-3 f-85"
                        style={{ borderRadius: '15px' }}
                    >
                        <div className="text-black-medium mb-2">NFT Level</div>
                        <div className="sold-price NFT-props">7</div>
                    </div>
                    <div
                        className="card-shadow p-3 mb-3 f-85"
                        style={{ borderRadius: '15px' }}
                    >
                        <div className="text-black-medium mb-2">
                            Accumulated DMZ
                        </div>
                        <div className="sold-price NFT-props">50</div>
                    </div>
                    <div
                        className="card-shadow p-3 mb-3 f-85"
                        style={{ borderRadius: '15px' }}
                    >
                        <div className="text-black-medium mb-2">
                            Community Ratings
                        </div>
                        <div className="sold-price NFT-props">Lorem Ipsum</div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .sold-price {
                    font-family: 'clashdisplay';
                    font-weight: 500;
                    font-size: 175%;
                    line-height: 90%;
                }
                .NFT-props {
                    font-family: inherit;
                }
            `}</style>
        </>
    );
}
