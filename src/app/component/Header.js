import React from "react";
import {render} from "react-dom";
import mainLogo from "./../css/assets/mainLogo.png";
import heading from "./../css/assets/ImageGallery-227x54.png";
import home from "./../css/assets/iconHome.png";
import iconGallery from "./../css/assets/IconGallery16x14.jpg";
import iconUpload from "./../css/assets/IconUpload19x19.jpg";
import {Link} from "react-router";

export class Header extends React.Component {
	render() {
		return (
				<header>
					<nav className ="navbar navbar-default">
						<div className ="container">
							<img className ="img-responsive logoImage" src={mainLogo} alt="Cognizant Logo"/>
							<img className ="img-responsive galleryImage" src={heading} alt="Image and UI gallery"/>
							<div className= "navigation">
								<div className="navHome">
									<Link to={"/home"} activeStyle = {{color : "red"}}><img src={home} alt="Home" /><span className="iconHome">Home</span></Link>
								</div>
								<div className="navGallery">
									<Link to={"/gallery"} activeStyle = {{color : "red"}}><img src={iconGallery} alt="IconGallery" /><span className="iconGallery">Gallery</span></Link>
								</div>
								<div className="navUpload">
									<Link to={"/upload"} activeStyle = {{color : "red"}}><img src={iconUpload} alt="IconUpload" /><span className="iconUpload">Upload</span></Link>
								</div>
							</div>
						</div>
					</nav>
				</header>

			);
	}
}