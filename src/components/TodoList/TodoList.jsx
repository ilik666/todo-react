import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

import './TodoList.scss'

export const TodoList = ({
													 todos,
													 handleLabel,
													 handleMarkDone,
													 handleMarkImportant,
													 onDeleteTodoItem }) => {

	const elements = todos.map( (item) => {

		return (
			<li key={item.id} className='list-group-item'>
				<TodoItem
					{...item}
					handleLabel={ handleLabel }
					handleMarkImportant={ () => handleMarkImportant(item.id) }
					handleMarkDone={ () => handleMarkDone(item.id) }
					onDeleteTodoItem={ () => onDeleteTodoItem(item.id) }/>
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