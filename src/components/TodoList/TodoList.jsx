import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

import './TodoList.scss'

export const TodoList = ({
													 todos,
													 handleMarkDone,
													 handleMarkImportant,
													 onDeleteTodoItem }) => {

	const elements = todos.map( (item) => {
		const {id, ...labels } = item

		return (
			<li key={id} className='list-group-item'>
				<TodoItem
					{...labels}
					handleMarkImportant={ () => handleMarkImportant(id) }
					handleMarkDone={ () => handleMarkDone(id) }
					onDeleteTodoItem={ () => onDeleteTodoItem(id) }/>
			</li>
		)
	})

	if(!todos.length) return  <h3>Дел нет...</h3>

	return (
		<ul className='todo-list list-group'>
			{ elements }
		</ul>
	)
}