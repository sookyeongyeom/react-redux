// connect = 컴포넌트와 리덕스를 연동하기 위해 react-redux에서 제공하는 함수
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
	return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수
// const mapStateToProps = (state) => ({
// 	number: state.counter.number,
// });

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위한 함수
// const mapDispatchToProps = (dispatch) => ({
// 	increase: () => {
// 		dispatch(increase());
// 	},
// 	decrease: () => {
// 		dispatch(decrease());
// 	},
// });

// connect에 mapStateToProps와 mapDispatchToProps를 넘겨주면 반환되는 함수에
// 컴포넌트를 전달해주면 리덕스와 연동된 컴포넌트가 만들어짐
export default connect(
	(state) => ({ number: state.counter.number }),
	// (dispatch) => ({
	// 	increase: () => dispatch(increase()),
	// 	decrease: () => dispatch(decrease()),
	// }),
	// (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
	// 아예 액션 생성 함수를 담은 객체 형태를 두번째 파라미터로 넣어주면
	// connect 함수가 내부적으로 bindActionCreators 작업을 대신함
	{
		increase,
		decrease,
	},
)(CounterContainer);
