import PropTypes from 'prop-types';

export default function DarkButton({content, className=''}) {
    return (
        <>
            <button type="button" className={`btn btn-dark btn--dark my-2 mx-2 ${className}`}>
                {content}
            </button>
            <style jsx>{`
                .btn--dark {
                    background-color: var(--dark);
                    font-weight: 200;
                }
            `}</style>
        </>
    );
}

DarkButton.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string
};
