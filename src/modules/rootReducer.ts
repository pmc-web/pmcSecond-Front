import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import sampleReducer, { SampleState } from 'src/modules/sample/slice';

type State = {
  sample: SampleState;
};

const rootReducer: Reducer<State, AnyAction> = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({ sample: sampleReducer });
      return combinedReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
