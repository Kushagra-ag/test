import PropTypes from 'prop-types';

export default function GradientButton({content, className=''}) {
    return (
        <>
            <button type="button" className={`btn btn--gradient text-uppercase my-2 ${className}`}>
                {content}
            </button>
            <style jsx>{`
                .btn--gradient {
                	font-family: 'spacegrotesk';
                	color: #fff;
                    background-image: linear-gradient(86.44deg, #7B61FF 17.5%, #0066FF);
                    font-weight: 400;
                    letter-spacing: 0.2em;
                    border-radius: 25px;
                }
            `}</style>
        </>
    );
}

GradientButton.propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.string
};
