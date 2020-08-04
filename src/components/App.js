import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	// Roughly equivalent to the componentDidMount in the class components
	useEffect(() => {
		onTermSubmit("pancakes");
	}, []);

	const onTermSubmit = async (term) => {
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
		setSelectedVideo(response.data.items[0]);
		
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="ui container" style={{ marginTop: "10 px" }}>
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={onVideoSelect}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);

};

// class App extends React.Component {
// 	state = { videos: [], selectedVideo: null };

// 	componentDidMount() {
// 		// This component will automatically load a default search of
// 		// pancakes before we do anything
// 		this.onTermSubmit("pancakes");
// 	}

// 	onTermSubmit = async (term) => {
// 		// console.log(term);
// 		const response = await youtube.get("/search", {
// 			params: {
// 				q: term,
// 				part: "snippet",
// 				maxResults: 5,
// 				key: 'AIzaSyA4HDm1zGpVfQtm3ncH41EmOsOUDVk_gSg'
// 			},
// 		});

// 		// console.log(response);
// 		this.setState({
// 			videos: response.data.items,
// 			selectedVideo: response.data.items[0],
// 		});
// 	};

// 	onVideoSelect = (video) => {
// 		// console.log("from the app!", video);
// 		this.setState({ selectedVideo: video });
// 	};

// 	render() {
// 		return (
// 			<div className="ui container" style={{ marginTop: "10 px" }}>
// 				<SearchBar onFormSubmit={this.onTermSubmit} />
// 				<div className="ui grid">
// 					<div className="ui row">
// 						<div className="eleven wide column">
// 							<VideoDetail video={this.state.selectedVideo} />
// 						</div>
// 						<div className="five wide column">
// 							<VideoList
// 								onVideoSelect={this.onVideoSelect}
// 								videos={this.state.videos}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
