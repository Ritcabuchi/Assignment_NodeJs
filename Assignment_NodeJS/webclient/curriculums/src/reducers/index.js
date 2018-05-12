var initialState = {curriculums:[]};

export default(state=initialState,action) =>
{
	switch(action.type)
	{
		case 'GETCURRICULUM' : 
			return{
				...state,
				curriculums:action.payload.data
			};
		default :
			return state;
	}
}
