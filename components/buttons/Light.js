import PropTypes from 'prop-types';

export default function LightButton({ content, className = '' }) {
    return (
        <>
            <button
                type="button"
                className={`btn btn-light btn--light text-black-high my-2 ${className}`}
            >
                {content}
            </button>
            <style jsx>{`
                .btn--light {
                    background-color: #fff;
                    font-weight: 400;
                }
            `}</style>
        </>
    );
}

LightButton.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string
};
