import React from 'react'
import { ToDoProps } from '../interfaces/ToDoProps';

const Todo = ({ name, completed, id }: ToDoProps) => {
	return (
		<li className="todo stack-small">
			<div className="c-cb text-left">
				<input id={id} type="checkbox" defaultChecked={completed} />
				<label className="todo-label" htmlFor="todo-0">
					{name}
				</label>
			</div>
			<div className="btn-group">
				<button type="button" className="btn">
					Edit <span className="visually-hidden">Eat</span>
				</button>
				<button type="button" className="btn btn__danger">
					Delete <span className="visually-hidden">Eat</span>
				</button>
			</div>
		</li>
	);
}

export default Todo