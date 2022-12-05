// 파일 이름을 index.js로 설정해주면 추후 불러올 때 디렉토리 이름만 입력하여 불러올 수 있음
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 리듀서를 하나로 합치기
const rootReducer = combineReducers({
	counter,
	todos,
});

export default rootReducer;
