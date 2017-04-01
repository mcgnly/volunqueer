import topReducer from './topReducer';

import { combineReducers } from 'redux';

export default combineReducers({//here you build the single-book-of-truth from the individual chapters
	topReducer
});

//this is more or less the long-version of what the combineReducers does:

// export default function (state = {}, action) {
//   return {
//     number: topReducer(state, action),
//     timesCalled: topReducer(state, action),
//     redditTopHeadline: redditReducer(state, action)
//   }
// }


