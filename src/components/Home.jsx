import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonSquare,AiFillYoutube,AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai";
const Home = () => {
  return (
    <>
        <div className='home' id="Home">
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your Problems</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics"/>
            <div>
                <p>
                    We are your one and only solution to the tech problems 
                    you face
                    every day. We are leading tech company whose aim is to 
                    increase the 
                    problem solving ability in children.
                </p>
            </div>

        </div>
        <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                venenatis gravida pretium.
                Curabitur laoreet sed neque eget lacinia. In feugiat,
                leo vitae pretium facilisis, magna augue vehicula velit,
                nec elementum odio lacus eget dui. 
                Ut elementum ut dui at consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Phasellus auctor aliquet sapien, quis facilisis lectus lobortis euismod. Etiam non diam urna. Ut venenatis elementum vestibulum. Praesent ac convallis leo. Nunc sodales in magna non porttitor.
                </p>
            </div>
        </div>
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s",
                    }}>
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay:"0.5s",
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay:"0.7s",
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay:"1s",
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
  )
}

export default Home