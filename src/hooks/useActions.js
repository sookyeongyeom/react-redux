import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function useActions(actions, deps) {
	const dispatch = useDispatch();

	return useMemo(
		() => {
			if (Array.isArray(actions)) {
				return actions.map((action) => bindActionCreators(action, dispatch));
			}
			return bindActionCreators(actions, dispatch);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		deps ? [dispatch, ...deps] : dispatch,
	);
}
