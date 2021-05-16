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
        </>
    );
}
