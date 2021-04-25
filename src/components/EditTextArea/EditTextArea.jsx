import React, { useState } from "react";

export const EditTextArea = ({ label, setEditLabel, id, handleLabel }) => {
	const [txtLabel, setTxtLabel] = useState(label)

	const sendLabel = () => {
		handleLabel(id, txtLabel)
		setEditLabel( edit => !edit )
	}

	return (
		<div className="form-group">
			<textarea
				className="form-control"
				onChange={ (e) => setTxtLabel( e.target.value )}
				value={txtLabel} rows="6"></textarea>
			<div className='mt-3'>
				<button
					className='btn btn-success'
					onClick={ sendLabel }>
					<i className="fas fa-check"></i>
				</button>

				<button
					className='btn btn-danger'
					onClick={ () => setEditLabel( edit => !edit ) }>
					<i className="fas fa-ban"></i>
				</button>
			</div>
		</div>
	)
}