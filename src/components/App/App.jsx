import React, {useEffect, useState} from "react";
import {TodoList} from "../TodoList/TodoList";
import {Header} from "../Header/Header";
import {AddTodo} from "../AddTodo/AddTodo";

import './App.scss'

export const App = () => {

	const createTodo = (label) => ({
		id: Math.random(), // Времмено - заменить на уникальный подход для ключей
		label,
		date: new Date().toLocaleString('ru'),
		important: false,
		done: false
	})

	const [todoData, setTodoData] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const raw = localStorage.getItem('todos') ?? []
		setTodoData(JSON.parse(raw))
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoData))
	}, [todoData])

	const onDeleteTodoItem = (id) => {
		setTodoData(todos => todos.filter(item => item.id !== id))
	}

	const addNewTodoItem = (label) => {
		setTodoData(todos => [...todos, createTodo(label)])
	}

	const searchTodos = (array, term) => {
		if (term.length === 0) {
			return array
		}
		return array.filter(item => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
		})
	}

	const toggleProperty = (arr, id, propName, editLabel = undefined) => {
		const idx = arr.findIndex(el => el.id === id)
		const oldTodo = arr[idx]

		const changesTodo = {
			...oldTodo,
			[propName]: !oldTodo[propName],
			label: editLabel ?? oldTodo['label']
		}

		return [
			...arr.slice(0, idx),
			changesTodo,
			...arr.slice(idx + 1)
		]
	}
	const handleMarkDone = (id) => {
		setTodoData(todos => toggleProperty(todos, id, 'done'))
	}
	const handleMarkImportant = (id) => {
		setTodoData(todos => toggleProperty(todos, id, 'important'))
	}

	const countDone = todoData.filter(el => el.done).length
	const countTodos = todoData.length - countDone

	return (
		<>
			<div className="container ">
				<Header
					setSearchTerm={setSearchTerm}
					searchTerm={searchTerm}
					countTodos={countTodos}
					countDone={countDone}/>
				<AddTodo addNewTodoItem={addNewTodoItem}/>
				<TodoList
					todos={searchTodos(todoData, searchTerm)}
					handleMarkImportant={handleMarkImportant}
					handleMarkDone={handleMarkDone}
					onDeleteTodoItem={onDeleteTodoItem}/>
			</div>
		</>
	)
}