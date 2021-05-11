import PropTypes from 'prop-types';

export default function Story ({number, height, gender, age, content}) {

	return(
		<>
		<div className="row">
			<div className="col-6 col-md-3">
				
					<span className="text-black-medium">Number</span> <br />
					<span className="font-weight-bolder">{`#${number}`}</span>
			</div>
			<div className="col-6 col-md-3">
					<span className="text-black-medium">Height</span> <br />
					<span className="font-weight-bolder">{`${height}ft`}</span>
			</div>
			<div className="col-6 col-md-3">
					<span className="text-black-medium">Gender</span> <br />
					<span className="font-weight-bolder">{gender === 'M' ? 'Male' : 'Female'}</span>
			</div>
			<div className="col-6 col-md-3">
					<span className="text-black-medium">Age</span> <br />
					<span className="font-weight-bolder">{`${age} years`}</span>
			</div>
		</div>
		<div className="row mt-5">
			<div className="col-12 text-black-medium">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem accumsan, quisque odio elit lectus et risus. Tristique felis vel nunc mauris dolor ornare. Quis eget eu ultricies faucibus facilisis ullamcorper imperdiet. Sagittis, nec hac varius mollis elit arcu nunc pellentesque amet. Purus lacinia nam pulvinar non sagittis sodales praesent etiam. Elementum, aliquam integer sit adipiscing ac, aliquam.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem accumsan, quisque odio elit lectus et risus. Tristique felis vel nunc mauris dolor ornare. Quis eget eu ultricies faucibus facilisis ullamcorper imperdiet. Sagittis, nec hac varius mollis elit arcu nunc pellentesque amet. Purus lacinia nam pulvinar non sagittis sodales praesent etiam. Elementum, aliquam integer sit adipiscing ac, aliquam.
			</div>

		</div>
		</>
	)

}

Story.propTypes = {
    number: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['M', 'F']).isRequired,
    age: PropTypes.number.isRequired,
};