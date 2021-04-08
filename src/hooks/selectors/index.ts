import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/modules/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
