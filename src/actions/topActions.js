
export function randomNumberAction(){//you have to export the actions you would like to call from elsewhere
	console.log("calling an action!");
	const randomNumber=Math.floor(Math.random()*10);
	return {
		type:'RANDOM_NUMBER', //normal actions output an object, which has to have a "type" property
		number:randomNumber//they can also contain whatever data you would like to pass around
	}
};

export function addTag(tagName){//you have to export the actions you would like to call from elsewhere
	return {
		type:'ADD_TAG', //normal actions output an object, which has to have a "type" property
		tag: tagName//they can also contain whatever data you would like to pass around
	}
};