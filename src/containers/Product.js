import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import CardImage from '../img/card.jpg'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

class Product extends Component {

    render() {
        return (
            <div>
                <h1 className="title">Products</h1>
                <div className="productContainer">
                    <Carousel breakPoints={breakPoints}>
                        <Item>
                            <img src={CardImage} className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage } className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage} className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage } className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage} className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage } className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage} className="productCard" alt="product"/>
                        </Item>
                        <Item>
                            <img src={CardImage } className="productCard" alt="product"/>
                        </Item>
                        
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Product;