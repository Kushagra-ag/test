import { useState } from 'react';
import PropTypes from 'prop-types';
import DarkButton from '../../buttons/Dark';
import OutlineButton from '../../buttons/Outline';
import CancelButton from '../../buttons/Cancel';

export default function Timed() {
    const [duration, setDuration] = useState(24);

    const changeDuration = e => {
        if (e !== duration) {
            setDuration(e);
        }
    };

    return (
        <>
            <div className="font-weight-bolder">Auction duration</div>
            <div className="d-flex justify-content-center justify-content-md-start mb-3 mt-2 mx-auto mx-md-0">
                <div onClick={() => changeDuration(24)}>
                    {duration === 24 ? (
                        <DarkButton content="24 hours" className="mr-2" />
                    ) : (
                        <OutlineButton content="24 hours" className="mr-2" />
                    )}
                </div>

                <div onClick={() => changeDuration(48)}>
                    {duration === 48 ? (
                        <DarkButton content="48 hours" className="mx-2" />
                    ) : (
                        <OutlineButton content="48 hours" className="mx-2" />
                    )}
                </div>

                <div onClick={() => changeDuration(72)}>
                    {duration === 72 ? (
                        <DarkButton content="72 hours" className="ml-2" />
                    ) : (
                        <OutlineButton content="72 hours" className="ml-2" />
                    )}
                </div>
            </div>
            <div className="text-black-medium f-85 mb-5">
                Any bid placed in the last 10 minutes extends the auction by 10 minutes.
                <br />
                <a href="#">
                    <u>Learn more how timed auctions work</u>
                </a>
            </div>
            <div className="font-weight-bolder">Minimum Bid</div>
            <div className="custom-field input-group mb-3 mt-2 mx-auto mx-md-0">
                <input
                    type="text"
                    className="form-control border-right-0 py-4 f-85"
                    placeholder="Enter price"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                    <span
                        className="input-group-text bg-white border-left-0 font-weight-bolder f-85"
                        id="basic-addon2"
                    >
                        DMZ
                    </span>
                </div>
            </div>
            <div className="text-black-medium f-85 mb-5">
                Bids below this won’t be accepted.
            </div>
            <div className="d-flex mb-5 justify-content-center justify-content-md-start">
                <DarkButton content="Put up for sale" className="mr-2" />
                <CancelButton content="Cancel" className="ml-2" />
            </div>
            <style jsx>{`
                .custom-field {
                    max-width: calc(80% + 1em);
                }
                .form-control:focus {
                    box-shadow: none;
                    border-color: initial;
                    color: initial;
                }
                .form-control:focus + .input-group-append > span {
                    border-color: initial;
                }
                .form-control {
                    border-radius: 10px;
                }
                .input-group-text {
                    color: #000;
                    border-radius: 10px;
                    transition: border-color 0.15s ease-in-out;
                }
            `}</style>
        </>
    );
}
