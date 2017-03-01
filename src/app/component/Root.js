import React from "react";
import {Header} from "./Header";

export class Root extends React.Component {
	render() {
		return (
			<div className ="container">
				<div className ="row">
					<div>
						<Header/>
					</div>
				</div>
				<div className="row">
					<div>
						{this.props.children}
					</div>
				</div>
			</div> 


			);
	}
}