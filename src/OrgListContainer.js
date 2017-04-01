import React, {Component} from 'react';
import OrgList from './orgList';
import {connect} from 'react-redux';
'./actions/OrgListActions.js'

class OrgListContainer extends Component{//Component is coming from React

	render(){//render is coming from component
		//Note: if your action isn't working, it's probably because you are trying to run it directly out of the import,
			//without remembering to bring it in from the props. It won't dispatch properly to the reducer if you forget.
		const { selectedTags } = this.props;

		//Note: components HAVE to have capitalized names or else they won't work.
		return(
				<div className = "container">
					<OrgList selectedTags={selectedTags} />
				</div>
			);
	}
}
					// <OrgList  r={number} randomNumberAction={randomNumberAction} timesCalled={timesCalled}/>

function mapStateToProps(state){//gets invoked in the connect function below
	console.log (state);
	return{
    selectedTags: state.topReducer.selectedTags
	}
}

//connect is the magic redux function that connects the state and the actions to the props that can be used by the app
export default connect(mapStateToProps,{
	//actions go here so you can dispatch them properly

})(OrgListContainer);