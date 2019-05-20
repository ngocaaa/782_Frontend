import React, { Component } from 'react';
import imgJSON from '../imageList.json';
import { Container, Side, LeftBox, RightTopBox, RightBottomBox } from "./custom";

class Story extends Component {


    render() {
        return (
            <Container>
                <Side>
                    <LeftBox src={imgJSON.left.palm.src} />
                </Side>
                <Side>
                    <RightTopBox src={imgJSON.right.top.tiger.src} />
                    <RightBottomBox src={imgJSON.right.bottom.plant1.src} />
                </Side>
            </Container>
        );
    }
}

export default Story;

