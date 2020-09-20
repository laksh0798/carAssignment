import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { Parallax, Background } from 'react-parallax';
import BackgroundImage from '../img/car3.jpg'
class AboutUs extends Component {
    render() {
        return (
            <div className="about">
                <Parallax strength={300}>
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1>About US</h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui. In ante metus dictum at tempor commodo. Massa sed elementum tempus egestas sed sed risus. Duis at consectetur lorem donec massa sapien faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Massa sapien faucibus et molestie. Amet purus gravida quis blandit turpis cursus. At elementum eu facilisis sed odio morbi quis. Maecenas pharetra convallis posuere morbi leo. Nunc scelerisque viverra mauris in aliquam sem fringilla. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Non diam phasellus vestibulum lorem sed. Nisi scelerisque eu ultrices vitae auctor eu augue. Id faucibus nisl tincidunt eget nullam non.
                            <br />
                            __________________
                        </Col>
                            <Col xs={12} md={12} className="history">
                                <h1>History</h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui. In ante metus dictum at tempor commodo. Massa sed elementum tempus egestas sed sed risus. Duis at consectetur lorem donec massa sapien faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Massa sapien faucibus et molestie. Amet purus gravida quis blandit turpis cursus. At elementum eu facilisis sed odio morbi quis. Maecenas pharetra convallis posuere morbi leo. Nunc scelerisque viverra mauris in aliquam sem fringilla. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Non diam phasellus vestibulum lorem sed. Nisi scelerisque eu ultrices vitae auctor eu augue. Id faucibus nisl tincidunt eget nullam non.
                            <br />
                            __________________
                        </Col>
                        </Row>
                    </Container>
                    <Background className="custom-bg paralexbg">
                        <img src={BackgroundImage} alt="fill murray" />
                    </Background>
                </Parallax>
            </div>
        );
    }
}

export default AboutUs;