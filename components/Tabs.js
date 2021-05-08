import Link from "next/link";
import PropTypes from 'prop-types';

export default function Tab({ href, isSelected, title, bubble=0 }) {
    return (
    <>
    <Link href={href}>
      <a
      	className="tab-link"
        style={{
          color: isSelected ? "#000" : "#00000099",
          borderBottomColor: isSelected ? "var(--dark)" : "#f2f2f2",
        }}
      >
        {title}
        {!!bubble && <span className="tab-bbl d-inline-flex justify-content-center align-items-center">{bubble}</span>}
      </a>
      
    </Link>
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
                	padding: 0 15px 15px;
		          margin: 0;
		          font-weight: 500;
		          text-decoration:none;
		          border-bottom-style: solid;
		          border-bottom-width: 3;
                }
            `}</style>
    </>
   )
}

Tab.propTypes = {
	href: PropTypes.string.isRequired,
	isSelected: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	bubble: PropTypes.number
}