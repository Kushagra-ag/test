import PropTypes from 'prop-types';

export default function SectionHeading({
    subHeadAbove = '',
    content = '',
    light = false,
    className=''
}) {
    return (
        <>
            {subHeadAbove && <div>{subHeadAbove}</div>}
            <h1 className={`heading ${className}`}>{content}</h1>
            <style jsx>{`
                .heading {
                    color: ${light ? '#fff' : 'inherit'};
                }
            `}</style>
        </>
    );
}

SectionHeading.propTypes = {
    content: PropTypes.string.isRequired,
    subHeadAbove: PropTypes.string,
    light: PropTypes.bool,
    className: PropTypes.string
};
