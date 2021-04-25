import React, {useState} from "react";

import './AddTodo.scss'

export const AddTodo = ({ addNewTodoItem }) => {
	const [todoTitle, setTodoTitle] = useState('')

	const addNewItemForLabel = (e) => {
		e.preventDefault()

		if(todoTitle.trim().length > 0) {
			addNewTodoItem(todoTitle)
			setTodoTitle('')
		}
	}

	return (
		<form className='add-todo input-group' onSubmit={ addNewItemForLabel }>
			<input
				className='form-control'
				placeholder='Введите текст'
				type="text"
				onChange={ (e) =>  setTodoTitle(e.target.value) }
				value={ todoTitle }/>
			<div className='input-group-append'>
				<button type='submit' className='btn btn-primary'><i className="fas fa-plus"></i></button>
			</div>
		</form>
	)
}