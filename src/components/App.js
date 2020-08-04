import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos';

const App = () => {
	
	const [selectedVideo, setSelectedVideo] = useState(null);
	const[videos, search] = useVideos('blueberry pancakes');

	// Automatically selects the first video in the list
	useEffect(() => {
		setSelectedVideo(videos[0]);
	})
	


	return (
		<div className="ui container" style={{ marginTop: "10 px" }}>
			<SearchBar onFormSubmit={search} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							// Equivalent to an inline function (video) => setSeletectedVideo(video)
							onVideoSelect={setSelectedVideo}
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
