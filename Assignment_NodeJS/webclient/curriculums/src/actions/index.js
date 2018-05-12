import axios from 'axios';

const URL = 'http://localhost:8000/api/curriculums';

export function getcurriculum()
{
	let response = axios.get(URL);
	return {
		type:'GETCURRICULUM',
		payload:response
	};
}

export function createcurriculum(data)
{
	let response = axios.post(URL,data);
	return{
		type:'GETCURRICULUM',
		payload:response
	}
}

export function deletecurriculum(id)
{
	let response = axios.delete(URL+'/'+id)
	return{
		type:'GETCURRICULUM',
		payload:response
	}
}
