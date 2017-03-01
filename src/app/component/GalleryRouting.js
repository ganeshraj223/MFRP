import React from "react";
import {render} from "react-dom";
import {Header} from "./component/Header";
import {Home} from "./component/Home";
import {Upload} from "./component/Upload";
import {Root} from "./component/Root";
import {Router, Route,browserHistory,IndexRoute} from "react-router";
import {Gallery} from "./component/Gallery";
import {Banking} from "./Banking";
import './css/style.css'


class GalleryRouting extends React.Component {
	render() {
		return (
				<Router history = {browserHistory}>
					<Route path = {"gallery"} component={GalleryRoot}>
						<IndexRoute component={Gallery}/>
						<Route path={"banking"} component = {Banking}/>
					</Route>
				</Router>
			);
	}
}
