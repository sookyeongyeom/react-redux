import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { useCallback, React } from 'react';
import useActions from '../hooks/useActions';

const TodosContainer = () => {
	const { input, todos } = useSelector(({ todos }) => ({
		input: todos.input,
		todos: todos.todos,
	}));
	// const dispatch = useDispatch();
	// const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
	// const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
	// const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
	// const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
	// 디스패치 함수를 자동으로 생성해주는 useActions 훅으로 대체
	const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
		[changeInput, insert, toggle, remove],
		[],
	);

	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		/>
	);
};

export default React.memo(TodosContainer);

// export default connect(
// 	({ todos }) => ({
// 		input: todos.input,
// 		todos: todos.todos,
// 	}),
// 	{
// 		changeInput,
// 		insert,
// 		toggle,
// 		remove,
// 	},
// )(TodosContainer);
