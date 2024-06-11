import React from 'react';

import andromeda from "../assets/img/andromeda.png";
import sei from "../assets/img/sei.png";
import babylon from "../assets/img/babylon.png";
import blockx from "../assets/img/blockx.png";
import uptick from "../assets/img/uptick.png";
import celestia from "../assets/img/celestia.png";
import coreum from "../assets/img/coreum.png";
import defund from "../assets/img/defund.png";
import dymension from "../assets/img/dymension.png";
import gitopia from "../assets/img/gitopia.png";
import humans from "../assets/img/humans.png";
import mars from "../assets/img/mars.png";
import neutron from "../assets/img/neutron.jpg";
import nibiru from "../assets/img/nibiru.png";
import sui from "../assets/img/sui.png";
import nois from "../assets/img/nois.png";
import nolus from "../assets/img/nolus.jpg";
import okp4 from "../assets/img/okp4.png";
import quasar from "../assets/img/quasar.png";
import realio from "../assets/img/realio.png";
import saage from "../assets/img/saage.png";
import terp from "../assets/img/terp.png";
import tidefi from "../assets/img/tidefi.png";
import lava from "../assets/img/lava.png";
import source from "../assets/img/source.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> a Portofolio of Karva Capital✨</h2>
                        <p>Here's a lil portofolio's on Cryptocurrency</p>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://bitcoin.org/en/" target="_blank">  <img src={andromeda} alt="Image" /></a>
                            <a href="https://bitcoin.org/en/" target="_blank">  <h5>Bitcoin</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://vanarchain.com/ko/vanry.html" target="_blank"> <img src={babylon} alt="Image" /></a>
                            <a href="https://vanarchain.com/ko/vanry.html" target="_blank">  <h5>Vanar Chain</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.renzoprotocol.com/" target="_blank"> <img src={blockx} alt="Image" /></a>
                            <a href="https://www.renzoprotocol.com/" target="_blank">  <h5>Renzo</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://rendernetwork.com/" target="_blank"> <img src={coreum} alt="Image" /></a>
                            <a href="https://rendernetwork.com/" target="_blank">  <h5>Render Token</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://jasmy.global/" target="_blank"> <img src={gitopia} alt="Image" /></a>
                            <a href="https://jasmy.global/" target="_blank"> <h5>Jasmy Token</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.pendle.finance/" target="_blank"> <img src={humans} alt="Image" /></a>
                            <a href="https://www.pendle.finance/" target="_blank"> <h5>Pendle</h5></a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}
