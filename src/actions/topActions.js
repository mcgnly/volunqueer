export function toggleTag(tagName){//you have to export the actions you would like to call from elsewhere
	return {
		type:'TOGGLE_TAG', //normal actions output an object, which has to have a "type" property
		tag: tagName//they can also contain whatever data you would like to pass around
	}
};
