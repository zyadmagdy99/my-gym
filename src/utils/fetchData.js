export const url = 'https://exercisedb.p.rapidapi.com/status';
export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key':process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key':"37a9d68e78msh52b1ca76567b9b6p12992ajsn61b91ed5f0a3"
	}
};
export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}