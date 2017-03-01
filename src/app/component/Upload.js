import React from "react";
import {render} from "react-dom";
import {Header} from "./Header";
import upload from "./../css/assets/upload.png";
import save from "./../css/assets/save.png";


export class Upload extends React.Component {
	render() {
		return(
			<main>
				<section>
					<div className="uploadBox">
						<div className="uploadTab">
							<img src={upload} alt="upload icon"/>
							<span>Upload an image from your desktop</span>
						</div>
						<form className="imageUploadForm">
							<table>
								<tbody>
									<tr>
										<td><label htmlFor="name">Name:</label></td>
										<td><input type="text" id="name" className="form-control formName"/></td>
										<td></td>
									</tr>
									<tr>
										<td><label htmlFor="identity">ID:</label></td>
										<td><input type="text" id="identity" className="form-control formName"/></td>
										<td></td>
									</tr>
									<tr>
										<td><label htmlFor="image">Image:</label></td>
										<td><input type="text" id="image" className="form-control formName"/></td>
										<td></td>
									</tr>
								</tbody>
							</table>
							<button className="btn btn-default uploadFile"><img src={save} alt="upload button icon"/>&ensp;UPLOAD A FILE</button>
						</form>
					</div>
				</section>
			</main>
			);
	}
}