import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <h1>Hi, {this.props.konten} </h1>
        )
    }
}
export default Article;