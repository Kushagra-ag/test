import PropTypes from 'prop-types';

export default function CancelButton({ content, className = '' }) {
    return (
        <>
            <button
                type="button"
                className={`btn btn-outline-danger btn--dar my-2 ${className}`}
            >
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

CancelButton.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string
};
