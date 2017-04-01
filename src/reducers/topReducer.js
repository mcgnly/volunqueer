
const initialState = {
	number:0,
	timesCalled:0,
	selectedTags:[]
}

// Note: reducers are functions, which take in state and an action, and output a copy of the state.
	//you should use the spread operator or object.assign to avoid mutating state, because then you can't go back in time anymore.
function topReducer(state=initialState, action){//the initial state gets populated by the object above^^, it can also be empty, but not undefined.
	switch (action.type){//every action gets shouted at each reducer, so you have to filter out the noise and catch only the actions you care about
		case 'TOGGLE_TAG':
			let newSelectedTags = [...state.selectedTags];
			if(newSelectedTags.includes(action.tag)){
        newSelectedTags = newSelectedTags.filter(currentTag => {
          return currentTag !== action.tag;
        });
      } else {
        newSelectedTags.push(action.tag);
      }
			return {...state, selectedTags:newSelectedTags};

		default:
			return state;//if the reducer isn't affected by the current action, it can just return the state, unchanged
	}
}

export default topReducer;
