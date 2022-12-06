import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// export const changeInput = (input) => ({
// 	type: CHANGE_INPUT,
// 	input,
// });
// 특별한 조작이 필요하지 않은 경우, 두번째 파라미터를 명시하는 것이 필수는 아니지만
// 해당 액션이 어떤 파라미터를 필요로 하는지 알기 쉽게 하기 위해 명시해주는 편이다
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 때마다 1씩 더해짐
// export const insert = (text) => ({
// 	type: INSERT,
// 	todo: {
// 		id: id++, // 후위 증감
// 		text,
// 		done: false,
// 	},
// });
export const insert = createAction(INSERT, (text) => ({
	id: id++,
	text,
	done: false,
}));

// export const toggle = (id) => ({
// 	type: TOGGLE,
// 	id,
// });
export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => ({
// 	type: REMOVE,
// 	id,
// });
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
	input: '',
	todos: [
		{
			id: 1,
			text: '리덕스 기초 배우기',
			done: true,
		},
		{
			id: 2,
			text: '리액트와 리덕스 사용하기',
			done: false,
		},
	],
};

// function todos(state = initialState, action) {
// 	switch (action.type) {
// 		case CHANGE_INPUT:
// 			return {
// 				...state,
// 				input: action.input,
// 			};
// 		case INSERT:
// 			return {
// 				...state,
// 				todos: state.todos.concat(action.todo),
// 			};
// 		case TOGGLE:
// 			return {
// 				...state,
// 				todos: state.todos.map((todo) =>
// 					todo.id === action.id ? { ...todo, done: !todo.done } : todo,
// 				),
// 			};
// 		case REMOVE:
// 			return {
// 				...state,
// 				todos: state.todos.filter((todo) => todo.id !== action.id),
// 			};
// 		default:
// 			return state;
// 	}
// }

const todos = handleActions(
	{
		// 객체 비구조화 시 payload를 적절한 이름의 변수에 새로 할당
		[CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
		[INSERT]: (state, { payload: todo }) => ({
			...state,
			todos: state.todos.concat(todo),
		}),
		[TOGGLE]: (state, { payload: id }) => ({
			...state,
			todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
		}),
		[REMOVE]: (state, { payload: id }) => ({
			...state,
			todos: state.todos.filter((todo) => todo.id !== id),
		}),
	},
	initialState,
);

export default todos;
