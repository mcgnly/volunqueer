import React, {Component} from 'react';
import Top from './top';
import Home from './home';
import {connect} from 'react-redux';
import {randomNumberAction, addTag} from './actions/topActions.js'

class TopContainer extends Component{//Component is coming from React
	
	render(){//render is coming from component
		//Note: if your action isn't working, it's probably because you are trying to run it directly out of the import, 
			//without remembering to bring it in from the props. It won't dispatch properly to the reducer if you forget. 
		const { selectedTags, number, timesCalled, randomNumberAction, addTag} = this.props;

		//Note: components HAVE to have capitalized names or else they won't work.
		return(
				<div className = "container">
					<Home selectedTags={selectedTags} addTag={addTag} />
				</div>
			);
	}
}
					// <Top  r={number} randomNumberAction={randomNumberAction} timesCalled={timesCalled}/>

function mapStateToProps(state){//gets invoked in the connect function below
	console.log (state);
	return{
		//state.values go here
        number : state.topReducer.number,
        timesCalled : state.topReducer.timesCalled,
        selectedTags: state.topReducer.selectedTags
	}
}

//connect is the magic redux function that connects the state and the actions to the props that can be used by the app
export default connect(mapStateToProps,{
	//actions go here so you can dispatch them properly
	randomNumberAction,
	addTag
})(TopContainer);