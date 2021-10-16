import { addToast } from '../store/actions';

function useUiToasts(dispatch) {
	return {
		createToasts: (data: any) => dispatch(addToast(data)),
	};
}

export default useUiToasts;
