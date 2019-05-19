import React, { Component } from 'react';
import JSON from '../imageList.json';

import 'materialize-css/dist/css/materialize.min.css'

class Story extends Component {
    render() {
        const rightList = JSON.map(o => {
            return (
                <div className="row">
                    <img className="responsive-img" src={o.imageURL} />
                </div>
            );
        });
        
        return (
            <div className="row">
                <div class="col s12 m6 l6">
                    <img className="responsive-img" src="https://images.unsplash.com/photo-1553649546-77f40959f2fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" />
                </div>
                <div class="col s12 m6 l6">
                    {rightList}
                </div>
            </div>
        );
    }
}

export default Story;

