import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js';

class Carousel extends Component {

    // Initialize Materialise carousel
    componentDidMount() {
        var elem = document.querySelector('.carousel');
        var ins = M.Carousel.init(elem, {
            duration: 200,
            fullWidth: true,
            indicators: true,
        });
    }

    // Set of different title
    state = {
        title: ''
    }

    changelTitle1 = () => {
        this.setState({
            title: 'About Us'
        });
    }

    changeTitle2 = () => {
        this.setState({
            title: 'Why Us?'
        });
    }

    changeTitle3 = () => {
        this.setState({
            title: 'Feature'
        });
    }

    render() {

        return (

            <div id="carousel-container">
                <div class="carousel carousel-slider">
                    <a class="carousel-item" href="#one!"><img className="responsive-img" src="https://images.unsplash.com/photo-1480342740034-d149f44bbeac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" /> </a>
                    <a class="carousel-item" href="#two!"><img className="responsive-img" src="https://images.unsplash.com/photo-1466071624063-c556307cb4d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" /> </a>
                    <a class="carousel-item" href="#three!"><img className="responsive-img" src="https://images.unsplash.com/photo-1526233185109-093c40faef34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" /> </a>
                    <a class="carousel-item" href="#four!"><img className="responsive-img" src="https://images.unsplash.com/photo-1488572749058-7f52dd70e0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" 
                    onClick={() => imageClick()}/> </a>
                    <a class="carousel-item" href="#five!"><img className="responsive-img" src="https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
                    onClick={() => imageClick()}/> </a>
                </div>
            </div>
        );
    }
}

export default Carousel;

