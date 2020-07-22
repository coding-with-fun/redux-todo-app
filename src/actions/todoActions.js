export const createToDo = (title) => {
	return {
		type: "CREATE_TODO",
		title,
	};
};

export const toggleToDo = (id) => {
	return {
		type: "TOGGLE_TODO",
		id,
	};
};

export const clearToDo = () => {
	return {
		type: "CLEAR_TODO",
	};
};
