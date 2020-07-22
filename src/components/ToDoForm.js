import React, { useState } from "react";
import { connect } from "react-redux";
import { createToDo } from "../actions/todoActions";

function ToDoForm(props) {
	const [todo, setTodo] = useState();

	const createFun = (e) => {
		e.preventDefault();
		todo && props.createEntry(todo);
		setTodo("");
	};

	return (
		<form className="todoForm">
			<div className="form-row">
				<div className="col">
					<input
						maxLength="50"
						type="text"
						name="todo"
						className="form-control"
						placeholder="Add new task..."
						value={todo || ""}
						onChange={(e) => setTodo(e.target.value)}
						autoFocus
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={createFun}>
					Add
				</button>
			</div>
		</form>
	);
}

const mapDispatchToProp = (dispatch) => {
	return {
		createEntry: (title) => {
			dispatch(createToDo(title));
		},
	};
};

export default connect(null, mapDispatchToProp)(ToDoForm);
