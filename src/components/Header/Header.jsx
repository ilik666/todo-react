import React from "react";

import './Header.scss'
import {Search} from "../Search/Search";

export const Header = ({countTodos, countDone, setSearchTerm, searchTerm}) => {
	return (
		<header className='header'>
			<h1> Список дел </h1>
			<p> список дел:
				<span className="badge badge-primary badge-pill"> { countTodos }</span>
				, выполненные дела:
				<span className="badge badge-primary badge-pill"> {  countDone }</span>
			</p>
			<Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
		</header>
	)
}