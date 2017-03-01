import React from "react";
import {render} from "react-dom";
import {Header} from "./component/Header";
import {Home} from "./component/Home";
import {Upload} from "./component/Upload";
import {Root} from "./component/Root";
import {Router, Route,browserHistory,IndexRoute} from "react-router";
import {Gallery} from "./component/Gallery";
import {Banking} from "./component/Banking";
import {Entertainment} from "./component/Entertainment";
import {Education} from "./component/Education";
import {HealthCare} from "./component/HealthCare"
import {Retail} from "./component/Retail";
import './css/style.css'


class ImageGallery extends React.Component {
	render() {
		return (
				<Router history = {browserHistory}>
					<Route path = {"/"} component={Root}>
						<IndexRoute component={Home}/>
						<Route path={"home"} component = {Home}/>
						<Route path={"gallery"} component = {Gallery}/>
						<Route path = {"banking"} component={Banking}/>
						<Route path = {"entertainment"} component={Entertainment}/>
						<Route path = {"education"} component={Education}/>	
						<Route path = {"healthcare"} component={HealthCare}/>	
						<Route path = {"retail"} component={Retail}/>						
						<Route path = {"upload"} component = {Upload}/>

					</Route>
				</Router>
			);
	}
}

render(<ImageGallery/>,window.document.getElementById('imageGallery'));