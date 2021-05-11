import PropTypes from 'prop-types';

export default function OutlineButton({content, className=''}) {
    return (
        <>
            <button
                type="button"
                className={`btn btn-outline-dark btn--outline-dark my-2 mx-2 ${className}`}
            >
                {content}
            </button>
            <style jsx>{`
                .btn--outline-dark {
                    color: var(--dark);
                    font-weight: 300;
                }
                .btn--outline-dark:hover {
                    color: white;
                    background-color: var(--dark);
                }
            `}</style>
        </>
    );
}

OutlineButton.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string
};
