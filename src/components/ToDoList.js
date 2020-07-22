import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleToDo } from "../actions/todoActions";

class ToDoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos &&
					this.props.todos.map((todo) => (
						<li key={todo.id}>
							<div onClick={() => this.props.toggleEntry(todo.id)}>
								{!todo.completed && (
									<div className="incomplete">{todo.title}</div>
								)}
								{todo.completed && (
									<div className="completed">{todo.title}</div>
								)}
							</div>
						</li>
					))}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todoList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleEntry: (id) => {
			dispatch(toggleToDo(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
