// A hook searching for and making use of a list of videos

import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // Roughly equivalent to the componentDidMount in the class components
	useEffect(() => {
        search(defaultSearchTerm);
	}, [defaultSearchTerm]);

    const search = async (term) => {
		// console.log(term);
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 10,
				key: ''
			},
		});
		setVideos(response.data.items);
    };
    return [videos, search];
}

export default useVideos;