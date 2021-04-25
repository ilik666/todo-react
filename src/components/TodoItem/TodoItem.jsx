import React, {useState} from "react";

import './TodoItem.scss'
import {EditTextArea} from "../EditTextArea/EditTextArea";

export const TodoItem = ({
		id,
		label,
		important,
		done,
		date,
		handleLabel,
		handleMarkDone,
		handleMarkImportant,
		onDeleteTodoItem }) => {

	const [editLabel, setEditLabel] = useState(false)

	const cls = ['todo-item']
	if (important) cls.push('important')
	if (done) cls.push('done')

	const handleEdit = () => setEditLabel( edit => !edit )
	const viewLabelsOrTxtArea = editLabel ?
		<EditTextArea id={id} handleLabel={handleLabel} setEditLabel={ setEditLabel } label={ label }/> :
		<p> {label} </p>

	return (
		<div className={cls.join(' ')}>
			<div className="todo-item__header mb-4">
				<span>{date}</span>
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
			<div className='todo-item__content'>
				<label className="form-check-label">
					<input className="form-check-input" checked={done} onChange={handleMarkDone} type="checkbox"/>
				</label>
				{ viewLabelsOrTxtArea }
			</div>
		</div>
	)
}
