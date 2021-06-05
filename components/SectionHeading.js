import PropTypes from 'prop-types';

export default function SectionHeading({
    subHeadAbove = '',
    content = '',
    light = false,
    className = ''
}) {
    return (
        <>
            {subHeadAbove && <div>{subHeadAbove}</div>}
            <h1
                className={`heading ${
                    light ? 'text-white-high' : 'text-black-high'
                } ${className}`}
            >
                {content}
            </h1>
        </>
    );
}

SectionHeading.propTypes = {
    content: PropTypes.string.isRequired,
    subHeadAbove: PropTypes.string,
    light: PropTypes.bool,
    className: PropTypes.string
};
