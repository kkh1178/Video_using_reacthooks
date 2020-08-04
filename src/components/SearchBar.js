import React, {useState} from "react";

// Rewriting the video react app to use hooks instead of class components.

const SearchBar = ({onFormSubmit}) => {
	const [term, setTerm] =useState('');

	// Had to rename onFormSubmit
	const onSubmit = (event) => {
		// The form likes to reset itself automatically when I hit enter. This prevents that.
		event.preventDefault();
		onFormSubmit(term);
		//Replacing this.props.onFormSubmit(this.state.term); with above.
	};

	const onInputChange = (event) => {
		setTerm(event.target.value)
		// replaced this.setState({ term: event.target.value }); with above
	};

	return (
		// These classNames are all coming from the semantic ui docs that we imported
		<div className="search-bar ui segment">
			{/* onSubmit might be a special handler too? */}
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video Search:</label>
					<input
						type="text"
						value={term}
						onChange={onInputChange}
						></input>
				</div>
			</form>
		</div>
	);


};

export default SearchBar;
