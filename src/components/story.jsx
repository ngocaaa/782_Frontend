import React, { Component } from 'react';
import JSON from '../imageList.json';
import { Container, Side, LeftBox, RightTopBox, RightBottomBox } from "./custom";

class Story extends Component {


    render() {
        return (
            <Container>
                <Side>
                    <LeftBox src={JSON.left.palm.src} />
                </Side>
                <Side>
                    <RightTopBox src={JSON.right.top.tiger.src} />
                    <RightBottomBox src={JSON.right.bottom.plant1.src} />
                </Side>
            </Container>
        );
    }
}

export default Story;

