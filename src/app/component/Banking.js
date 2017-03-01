import React from "react";
import {render} from "react-dom";
import {Gallery} from "./Gallery";
import home from "./../css/assets/home.png";
import values from "./../data/images.json";
import {Link} from "react-router";


export class Banking extends React.Component {
	render() {
		return(
				<main>
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
				      

				<ul className="ulContainer">
					 {values.banking.map((data, index)=> (
					  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 imageBox"  key={index}>
						  <div className="hovereffect" >
						       <li className="boxContainer">
						           <div className="inner">
						                <img className="img-responsive" src={data.imageUrl} alt={data.name} style={{width: "100%",height:"190px"}}/>

										    <div className="overlay">
												<label>{data.name}</label><br/>
												<p>RATING : {data.rating} / 5</p>
												<span className="description">
												{data.description}
												</span>
												<a href={data.imageUrl} className="btn btn-success downloadButton" download><span className="glyphicon glyphicon-download-alt">&ensp;DOWNLOAD</span></a>
										    </div>
										<p>{data.name}</p>
										<p>RATING : {data.rating} / 5</p>
									 </div>
								 </li>
							</div> 
					  </div>
				  ))}
  				</ul>
  				</div>
				</div>
			</section>
			</main>

			)
	}
}