import PropTypes from 'prop-types';
import Image from 'next/image';

export default function History() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div
                        className="card-shadow d-flex align-items-center p-3"
                        style={{ borderRadius: '15px' }}
                    >
                        <div className="overflow-hidden rounded-circle position-relative user-img-thumb mr-3">
                            <Image
                                src="/images/user.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="User image"
                            />
                        </div>
                        <div>
                            <div className="text-medium-high">
                                Bid by <b>@samfowl</b>
                            </div>
                            <div className="text-black-medium">
                                April 20, 2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
