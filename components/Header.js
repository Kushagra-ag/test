import OutlineButton from './buttons/Outline';

export default function Header() {

	return(

		<nav className="navbar navbar-expand-lg navbar-light px-5 mb-5">
		  <a className="navbar-brand" href="#">Demons</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
		    <ul className="navbar-nav mx-auto">
		      <li className="nav-item mx-2">
		        <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item mx-2">
		        <a className="nav-link" href="#">Gallery</a>
		      </li>
		      <li className="nav-item mx-2">
		        <a className="nav-link" href="#">DMZ Token</a>
		      </li>
		      <li className="nav-item mx-2">
		        <a className="nav-link" href="#">Voting Portal</a>
		      </li>
		     {/* <li className="nav-item dropdown">
		        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Dropdown
		        </a>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a className="dropdown-item" href="#">Action</a>
		          <a className="dropdown-item" href="#">Another action</a>
		          <div className="dropdown-divider"></div>
		          <a className="dropdown-item" href="#">Something else here</a>
		        </div>
		      </li>*/}
		    </ul>
		    <OutlineButton content="My wallet" />
		  </div>

		  <style jsx>{`
                    .navbar {
                        background-color: #f4f4f4;
                        box-shadow: 0 4px 50px #0000000a;
                    }
          `}</style>
		</nav>
	)
}