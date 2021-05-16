import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Tab({ changeTab, isSelected, title, bubble = 0 }) {
    return (
        <>
            <div onClick={changeTab}>
                <a
                    className="tab-link"
                    style={{
                        color: isSelected ? '#000' : '#00000099',
                        borderBottomColor: isSelected
                            ? 'var(--dark)'
                            : '#f2f2f2'
                    }}
                >
                    {title}
                    {!!bubble && (
                        <span className="tab-bbl d-inline-flex justify-content-center align-items-center">
                            {bubble}
                        </span>
                    )}
                </a>
            </div>
            <style jsx>{`
                .tab-bbl {
                    background-color: var(--dark);
                    color: #fff;
                    font-size: 75%;
                    height: 20px;
                    width: 20px;
                    margin: 0 8px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                .tab-link {
                    padding: 0 25px 15px;
                    margin: 0;
                    cursor: pointer;
                    text-decoration: none;
                    border-bottom-style: solid;
                    border-bottom-width: 3px;
                }
            `}</style>
        </>
    );
}

Tab.propTypes = {
    changeTab: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    bubble: PropTypes.number
};
