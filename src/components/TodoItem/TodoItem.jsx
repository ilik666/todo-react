import React, {useState} from "react";

import './TodoItem.scss'
import {EditTextArea} from "../EditTextArea/EditTextArea";

export const TodoItem = ({
													 label,
													 important,
													 done,
													 date,
													 handleMarkDone,
													 handleMarkImportant,
													 onDeleteTodoItem
												 }) => {

	const [editLabel, setEditLabel] = useState(false)

	const cls = ['todo-item']
	if (important) cls.push('important')
	if (done) cls.push('done')

	const handleEdit = () => setEditLabel( edit => !edit )

	return (
		<div className={cls.join(' ')}>
			<label className="form-check-label">
				<input className="form-check-input" checked={done} onChange={handleMarkDone} type="checkbox"/>
			</label>
			<div>
				<span className='mb-3'>{date}</span>
				{ editLabel ?  <EditTextArea setEditLabel={ setEditLabel } label={ label }/> : <p> {label} </p> }
			</div>
			<button className='btn btn-danger' onClick={ onDeleteTodoItem }>
				<i className="far fa-trash-alt"></i>
			</button>
			<button
				onClick={ handleEdit }
				className='btn btn-info'>
				<i className="fas fa-pencil-alt"></i>
			</button>
			<button className='btn btn-warning' onClick={ handleMarkImportant }>
				<i className="fas fa-exclamation"></i>
			</button>
		</div>
	)
}
