import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { connect } from "react-redux";
import { clearToDo } from "../actions/todoActions";

function ToDoMain(props) {
	return (
		<div className="main">
			<div className="todoMain">
				<h3>Todo List</h3>
				<div>
					<ToDoForm />
				</div>
				<div>
					<ToDoList />
				</div>
			</div>
			<div className="btn" onClick={(e) => props.clearEntries()}>
				<svg
					width="2em"
					height="2em"
					viewBox="0 0 16 16"
					className="bi bi-trash-fill"
					fill="red"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
					/>
				</svg>
			</div>
		</div>
	);
}

const mapDispatchToProp = (dispatch) => {
	return {
		clearEntries: () => dispatch(clearToDo()),
	};
};

export default connect(null, mapDispatchToProp)(ToDoMain);
