import React from "react";
import {render} from "react-dom";
import home from "./../css/assets/home.png";
import values from "./../data/images.json";
import {Link} from "react-router";
import contentImage from "./../css/assets/contentImage.png"

export class Gallery extends React.Component {
	render() {
		return (
			<section className="galleryBG">
				<div className="uiGallery">
				    <div className="row gallery">
				    	
				        <div className="btn-group btn-breadcrumb">
				            <Link to={"/gallery"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}><img src={home} alt="Home Button"/></Link>
				            <Link to={"/entertainment"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}>Entertainment</Link>
				            <Link to={"/education"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}>Education</Link>
				            <Link to={"/healthcare"} className="btn forGallery btn-default " activeStyle = {{color : "red"}}>Healthcare</Link> 
				            <Link to={"/banking"} activeStyle = {{color : "red"}} className="btn forGallery btn-default ">Banking & Financial</Link>
				            <Link to={"/retail"} activeStyle = {{color : "red"}} className="btn forGallery btn-default ">Retail</Link>
				            <form className="navbar-form navbar-left">
						      <div className="input-group">
						        <input type="text" className="form-control searchBar" placeholder="Search"/>
						        <div className="input-group-btn">
						          <button className="btn btn-default search" type="submit">
						            <i className="glyphicon glyphicon-search"></i>
						          </button>
						        </div>
						      </div>
						    </form> 
				        </div>
				      
					</div>

					  <div className="galleryDisplay">
					     	<div className="dropdown">
						     	<span className="sort">Sort By:&ensp;</span>
							    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">RATING &ensp;
							    <span className="caret"></span></button>
							    <ul className="dropdown-menu">
							      <li><a href="#">1</a></li>
							      <li><a href="#">2</a></li>
							      <li><a href="#">3</a></li>
							      <li><a href="#">4</a></li>
							      <li><a href="#">5</a></li>
							    </ul>
						  </div>
				      </div>
				      <img src={contentImage} alt="Content Banner"/>
				</div>
			</section>

			)
	}
}