import axios from "axios";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
});

// Getting a 400 error so modified the below code in app.js and the above create
// export default axios.create({
// 	baseURL: "https://www.googleapis.com/youtube/v3",
// 	params: {
// 		part: "snippet",
// 		type: "video",
// 		maxResults: 5,
// 		key: key,
// 	},
// });
