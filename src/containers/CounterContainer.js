// connect = 컴포넌트와 리덕스를 연동하기 위해 react-redux에서 제공하는 함수
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
	return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수
const mapStateToProps = (state) => ({
	number: state.counter.number,
});

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위한 함수
const mapDispatchToProps = (dispatch) => ({
	// 임시 함수
	increase: () => {
		console.log('increase');
	},
	decrease: () => {
		console.log('decrease');
	},
});

// connect에 mapStateToProps와 mapDispatchToProps를 넘겨주면 반환되는 함수에
// 컴포넌트를 전달해주면 리덕스와 연동된 컴포넌트가 만들어짐
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
