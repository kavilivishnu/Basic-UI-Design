import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenuLeft } from 'react-icons/cg';

function Design() {
    return (
        <div>
            <div className="side-drawer" >
                <h2 className="web-title" >Lorem<br/>Ipsum</h2>
                <h2 className="mobile-title" >Lorem</h2>
                <div className="web-side-drawer-contents" >
                    <p style={{ textDecoration: "line-through", textDecorationColor: "rgb(255, 77, 77)", marginLeft: "-7%" }} >About</p>
                    <p>Services</p>
                    <p style={{ marginLeft: "-7%" }}  >Cuisine</p>
                    <p style={{ marginLeft: "-4%" }}  >Gallery</p>
                    <p>Contact</p>
                    <p style={{ marginLeft: "-11%" }} >Book</p>
                </div>
                <button className="web-cart-button" >Cart</button>
                <span className="mobile-cart-icon" ><FiShoppingCart size="60px" color="rgb(255, 77, 77)" /></span>
                <span className="mobile-menu-icon" ><CgMenuLeft size="60px" color="rgb(255, 77, 77)" /></span>
            </div>
            <div className="body-content" >
                <div>
                    <br /><br /><br /><br /><br />
                    <h1 className="heading" ><span >What are you</span><br /><span className="part-of-heading" >having for Lunch?</span></h1>
                </div>
                <div className="description" >
                    <p>
                        Lorem ipsum dolor sit amet,<br/><span style={{ marginLeft: "-7%" }} >consectetur adipiscing elit,</span><br/><span style={{ marginLeft: "-15%" }} >sed do eiusmod tempor</span><br /><span style={{ marginLeft: "-20%" }} >incididunt ut labore et.</span><br />
                        <hr style={{ 
                            width: "70px", 
                            marginLeft: "0%", 
                            height: "3px",
                            backgroundColor: "rgb(255, 77, 77)",
                            border: "none"
                        }}/>
                    </p>
                </div>
                <div className="menu-content" >
                    <div className="image-cards" >
                        <img className="image1"
                        src="https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-400,h-300,fo-auto"
                         />
                         <br /><br />
                        <p style={{ fontWeight: "bold", fontFamily: 'Oxygen' }} >Mexican Taco</p>
                    </div>
                    <div className="image-cards" >
                        <img className="image2"
                        src="https://duyt4h9nfnj50.cloudfront.net/resized/7ab4b42b29ec391740d0af2bef3e019e-w2880-9b.jpg"
                         />
                        <p style={{ fontWeight: "bold", fontFamily: 'Oxygen' }} >Farmhouse Pizza</p>
                    </div>
                    <div className="image-cards" >
                        <img className="image3"
                        src="https://www.familyfoodonthetable.com/wp-content/uploads/2016/05/Cheddar-chicken-burgers-3-720x540.jpg"
                         />
                        <p style={{ fontWeight: "bold", fontFamily: 'Oxygen' }} >Chicken Burger</p>
                    </div>
                    <div className="image-cards" >
                        <img className="image4"
                        src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Spicy_Chicken_Nachos_Recipe_With_Salsa_And_Sour_Cream-1.jpg"
                         />
                        <p style={{ fontWeight: "bold", fontFamily: 'Oxygen' }} >Loaded Nachos</p>
                    </div>
                    <div className="image-cards" >
                        <img className="image5"
                        src="https://i.pinimg.com/originals/f3/31/8b/f3318b55f8c1e4453d841dd704cdbaa5.jpg"
                         />
                        <p style={{ fontWeight: "bold", fontFamily: 'Oxygen' }} >Hakka Noddles</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;
