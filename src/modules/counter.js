// Ducks 패턴 = 기능 중심으로 파일을 분리
import { createAction, handleActions } from 'redux-actions';

// 다른 리듀서의 액션과 중복되지 않도록 [리듀서이름/액션이름]
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 밖에서 쓸 수 있게 액션 함수를 export
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = { number: 0 };

// function counter(state = initialState, action) {
// 	switch (action.type) {
// 		case INCREASE:
// 			return {
// 				number: state.number + 1,
// 			};
// 		case DECREASE:
// 			return {
// 				number: state.number - 1,
// 			};
// 		default:
// 			return state;
// 	}
// }

const counter = handleActions(
	{
		[INCREASE]: (state, action) => ({ number: state.number + 1 }),
		[DECREASE]: (state, action) => ({ number: state.number - 1 }),
	},
	initialState,
);

// 리듀서를 export default
export default counter;
