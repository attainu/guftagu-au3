import React from 'react'
//const axios = require("axios");
const fetch=require('../../api')
class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('myImage',this.state.file);
        fetch.image(this.props,data)
    }
    onChange(e) {
        this.setState({file:e.target.file[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} onChange= {this.onChange}>
                <h1>File Upload</h1>
                <input type="file" name="myImage"  />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default FileUpload