import React, { Component } from 'react';
import imageList from '../imageList.json';

import 'materialize-css/dist/css/materialize.min.css'

class Story extends Component {
    render() {
        // const rightList = JSON.map(o => {
        //     return (
        //         <div className="row">
        //             <img src={o.imageURL} />
        //         </div>
        //     );
        // });

        // return (
        //     <div className="row">
        //         <div id="app1" class="col s12 m6 l6">
        //             {/* <img src="https://images.unsplash.com/photo-1553649546-77f40959f2fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" /> */}
        //         </div>
        //         <div id="app2" class="col s12 m6 l6">
        //             {rightList}
        //         </div>
        //     </div>
        // );

        return (
            <div className="row">
                <div id="app1" class="col s12 m6 l6"></div>

                <div className="row">
                    <div id="app2" className="row"></div>
                    <div id="app3" className="row"></div>
                </div>
            </div>
        );


        // return (
        //     <div className="row">
        //         <div id="app1" class="col s12 m6 l6"></div>
        //         <div class="col s12 m6 l6">
        //             <div id="app2" className="row"></div>
        //             <div id="app3" className="row"></div>
        //         </div>
        //     </div>
        // );

        // return (
        //     <div className="con">
        //         <div id="app1"></div>
        //         <div id="app2"></div>
        //         <div id="app3"></div>
        //     </div>
        // );
    }
}

export default Story;

