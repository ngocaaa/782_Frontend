import React, { Component } from 'react';
import JSON from '../imageList.json';
import { Container, Side, LeftContainer, RightTopContainer, RightBottomContainer } from "./custom";

class Story extends Component {

    render() {
        return (
            <Container>
                <Side>
                    <LeftContainer src={JSON.left.palm.src} />
                </Side>
                <Side>
                    <RightTopContainer src={JSON.right.top.tiger.src} />
                    <RightBottomContainer src={JSON.right.bottom.plant1.src} />
                </Side>
            </Container>
        );
    }
}

export default Story;

