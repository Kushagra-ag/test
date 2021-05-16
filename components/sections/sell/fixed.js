import PropTypes from 'prop-types';
import DarkButton from '../../buttons/Dark';
import CancelButton from '../../buttons/Cancel';

export default function FixedPrice() {
    return (
        <>
            <div className="font-weight-bolder">Price</div>
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
                Service fee{' '}
                <span className="text-black-high font-weight-bolder">10%</span>
                <br />
                You will recieve{' '}
                <span className="text-black-high font-weight-bolder">
                    100 DMZ ($1000)
                </span>
            </div>
            <div className="py-5">
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
