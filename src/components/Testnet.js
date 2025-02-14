import React from 'react';

import sei from "../assets/img/sei.png";
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
//Logo
import bitcoin from "../assets/img/bitcoin.png";
import babylon from "../assets/img/babylon.png";
import rose from "../assets/img/rose.png";
import pendle from "../assets/img/pendle.png";
import vanry from "../assets/img/vanry.png";
import blockx from "../assets/img/blockx.png";
import uptick from "../assets/img/uptick.png";
import notcoin from "../assets/img/notcoin.png";
import api3 from "../assets/img/API3.png";
import celestia from "../assets/img/celestia.png";
import render from "../assets/img/rendertoken.png";
import tao from "../assets/img/tao.png";
import eth from "../assets/img/eth.png";
import sol from "../assets/img/sol.png";
import fart from "../assets/img/fartcoin.png";

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
                        <p>Disclaimer: not all altcoin portfolios are displayed. below is just a portion of the altcoin portfolio owned by Karva Capital</p>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://bittensor.com/" target="_blank">  <img src={tao} alt="Image" /></a>
                            <a href="https://bittensor.com//" target="_blank">  <h5>Bittensor</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://bitcoin.org" target="_blank"> <img src={bitcoin} alt="Image" /></a>
                            <a href="https://bitcoin.org" target="_blank">  <h5>Bitcoin</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://ethereum.org" target="_blank"> <img src={eth} alt="Image" /></a>
                            <a href="https://ethereum.org" target="_blank">  <h5>Ethereum</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://rendernetwork.com/" target="_blank"> <img src={render} alt="Image" /></a>
                            <a href="https://rendernetwork.com/" target="_blank">  <h5>Render Token</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://solana.com/" target="_blank"> <img src={sol} alt="Image" /></a>
                            <a href="https://solana.com/" target="_blank"> <h5>Solana</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.infinitebackrooms.com/dreams/conversation-1721540624-scenario-terminal-of-truths-txt" target="_blank"> <img src={fart} alt="Image" /></a>
                            <a href="https://www.infinitebackrooms.com/dreams/conversation-1721540624-scenario-terminal-of-truths-txt" target="_blank"> <h5>Fartcoin</h5></a>
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
