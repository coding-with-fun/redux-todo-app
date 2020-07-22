let localList = localStorage.getItem("todo");
localList = !localList ? [] : JSON.parse(localList);
const initState = {
	todoList: localList,
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_TODO": {
			let newItem = {
				id:
					state.todoList.length > 0
						? state.todoList[state.todoList.length - 1].id + 1
						: 0,
				title: action.title,
				completed: false,
			};

			localList = [...state.todoList, newItem];
			localStorage.setItem("todo", JSON.stringify(localList));

			return {
				...state,
				todoList: [...state.todoList, newItem],
			};
		}

		case "CLEAR_TODO": {
			localStorage.clear();
			return {
				...state,
				todoList: [],
			};
		}

		case "TOGGLE_TODO": {
			let newList = state.todoList.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				} else {
					return todo;
				}
			});

			localStorage.setItem("todo", JSON.stringify(newList));

			return {
				...state,
				todoList: newList,
			};
		}

		default: {
			return state;
		}
	}
};

export default rootReducer;
