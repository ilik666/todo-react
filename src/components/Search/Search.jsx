import React from "react";

import './Search.scss'

export const Search = ({searchTerm, setSearchTerm}) => {
	const icon = searchTerm.length > 0 ? <i className="fas fa-times"></i> : <i className="fas fa-search"></i>;

	return (
		<div className='input-group  mb-3'>
			<input
				type="text"
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Поиск...'
				value={searchTerm}
				className='form-control'/>
			<div className='input-group-append'>
				<button
					type='button'
					onClick={ () => { setSearchTerm('') }}
					className='btn btn-primary'>
					{ icon }
				</button>
			</div>
		</div>
	)
}