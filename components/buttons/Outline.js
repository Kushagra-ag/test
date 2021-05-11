import PropTypes from 'prop-types';

export default function OutlineButton({content, icon=null, className=''}) {
    return (
        <>
            <button
                type="button"
                className={`btn btn-outline-dark btn--outline-dark my-2 mx-2 ${className}`}
            >
                {icon && <span className="btn-icon mr-2"><img src={`/svg/icons/${icon}.svg`} height="15" alt={icon} /></span>}
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
    icon: PropTypes.string,
    className: PropTypes.string,
};
