import React, { useState } from "react";

export const EditTextArea = ({ label, setEditLabel }) => (
	<div className="form-group">
		<textarea className="form-control" defaultValue={label} rows="6"></textarea>
		<div className='mt-3'>
			<button className='btn btn-success'><i className="fas fa-check"></i></button>
			<button className='btn btn-danger' onClick={ () => setEditLabel( edit => !edit ) }><i className="fas fa-ban"></i></button>
		</div>
	</div>
)