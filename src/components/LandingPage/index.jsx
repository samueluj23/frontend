import React, { useState, useEffect } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Buynow from "./Buynow";
export default function Index() {
  return (
    <>
      <Header />
      <div className="site-wraper">
      <Buynow />
        {/* <section className="hero-section" id="home-sec">
          <div className="banner-images">
            <img src="images/bg-1.jpg" data-scroll="" data-scroll-speed="0.3" alt="" />
            <img src="images/bg-2.png" alt="" />
          </div>
          <div className="container">
            <div className="text-main">
              <img src="images/image-1.png" data-scroll="" data-scroll-speed="0.2" alt="" />
              <h1 data-scroll="" data-scroll-speed="0.2">
                MEOW{" "}
              </h1>
              <h4 data-scroll="" data-scroll-speed="0.2">
                The Dog Meme Magic on Solana!
              </h4>
              <p data-scroll="" data-scroll-speed="0.2">
                Unleash the Charm of MEOW
              </p>
              <h4 data-scroll="" data-scroll-speed="0.2">
                $Meow Presale Coming soon!
              </h4>
              <a href={hyperLink} className="btn btn-red mt-4 centerr m-auto" type="submit" target="_blank" rel="noreferrer">
                Buy Now
              </a>
            </div>
          </div>
        </section> */}
        <section id="about-sec" className="why-section section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="heading-text" data-scroll="" data-scroll-speed="0.1">
                  <h4>About MEOW</h4>
                  <p>
                    MEOW, the memecoin sensation on the Solana blockchain, is not just a token; it embodies the playful spirit of dog memes and community
                    camaraderie. Born in the Solana ecosystem, MEOW is set to redefine the memecoin experience with its canine charm and vibrant utilities.
                  </p>   <a href={"#home-sec"} className="btn btn-red mt-4 centerr" type="submit">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-md-6 ms-auto">
                <figure data-scroll="" data-scroll-speed="-0.1">
                  <img src="images/image2.png" width="100%" alt="" />
                </figure>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <figure data-scroll="" data-scroll-speed="0.1">
                  <img src="images/image3.png" width="100%" alt="" />
                </figure>
              </div>
              <div className="col-md-5 ms-auto">
                <div className="heading-text" data-scroll="" data-scroll-speed="-0.1">
                  <h4>The Birth of MEOW</h4>
                  <p>
                    Emerging from the delightful world of dog memes, MEOW is a testament to the blend of humor and technology. Created on the fast and
                    cost-effective Solana network, MEOW stands tall as a symbol of joy, laughter, and potential profits for all crypto enthusiasts.
                  </p>
                  {/* <button className="btn btn-red mt-4" type="submit">Buy Now</button> */}
                  <a href={"#home-sec"} className="btn btn-red mt-4 centerr" type="submit">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-section why-section-2 section-padding" id="qr-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <figure>
                  <img src="images/image5.png" width="100%" alt="" />
                </figure>
              </div>
              <div className="col-md-6 ms-auto">
                <div className="heading-text">
                  <h4>Dive into the MEOW Revolution - Presale Coming soon!</h4>
                  <p>
                    Emerging from the delightful world of dog memes, MEOW is a testament to the blend of humor and technology. Created on the fast and
                    cost-effective Solana network, MEOW stands tall as a symbol of joy, laughter, and potential profits for all crypto enthusiasts.
                  </p>
                  {/* <button className="btn btn-orange mt-4" type="submit">Buy now</button> */}
                  <a href={"#home-sec"} className="btn btn-orange mt-4 centerr btnWhite" type="submit">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-section section-padding" id="why-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="heading-text mb-4">
                  <h4>Why Choose MEOW?</h4>
                </div>
                <div className="list-why">
                  <ul>
                    <li>
                      <h4>Solana's Speed</h4>
                      <p>Take advantage of Solana’s rapid transaction speed as MEOW ensures swift and seamless transactions.</p>
                    </li>
                    <li>
                      <h4>Powered by Community</h4>
                      <p>MEOW fosters a collaborative environment where passionate members can connect and shape the future of meme and $MEOW</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 ms-auto">
                <figure>
                  <img src="images/image6.png" width="100%" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="utility-sec section-padding" id="utilities">
          <div className="container">
            <div className="heading-text mb-5 text-center">
              <h4>Beyond Memes - New Utilities Await!</h4>
              <h3>MEOWWear - Express Yourself with Doggie Merchandise</h3>
              <p>
                Explore the world of MEOWWear, where the community can purchase exclusive MEOW-themed merchandise, from clothing to accessories, showcasing
                their love for the dog meme revolution.
              </p>
            </div>
            <div className="row utility-box align-items-center">
              <div className="col-md-4">
                <div className="my-2">
                  <article>
                    <figcaption>
                      <h4>MEOWSwap</h4>
                      <span className="divider"></span>
                      <p>Effortlessly trade MEOW tokens on our decentralized exchange.</p>
                    </figcaption>
                  </article>
                </div>
                <div className="my-2">
                  <article>
                    <figcaption>
                      <h4>MEOWRafle</h4>
                      <span className="divider"></span>
                      <p>Engage in thrilling raffle events with your MEOW tokens.</p>
                    </figcaption>
                  </article>
                </div>
                <div className="my-2">
                  <article>
                    <figcaption>
                      <h4>Voting</h4>
                      <span className="divider"></span>
                      <p>Shape the community’s future by participating in important decisions using your MEOW.</p>
                    </figcaption>
                  </article>
                </div>
              </div>
              <div className="col-md-4">
                <img src="images/image7.png" className="imag7" alt="" />
              </div>
              <div className="col-md-4">
                <div className="my-2">
                  <article>
                    <figcaption>
                      <h4>Staking Pool</h4>
                      <span className="divider"></span>
                      <p>Multiply your holdings by staking MEOW tokens and earning rewards.</p>
                    </figcaption>
                  </article>
                </div>
                <div className="my-2">
                  <article>
                    <figcaption>
                      <h4>MEOWBridge</h4>
                      <span className="divider"></span>
                      <p>Connect MEOW with various blockchains for expanded possibilities.</p>
                    </figcaption>
                  </article>
                </div>
                <div className="my-2">
                  <article>
                    <figcaption>
                      <h4>Mini Games</h4>
                      <span className="divider"></span>
                      <p>Enjoy entertaining mini-games while earning MEOW rewards.</p>
                    </figcaption>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="crypto section-padding pt-0">
          <div className="video-bg">
            <img
              src="images/image5.png"
              width="100%"
              data-scroll=""
              data-scroll-css-progress=""
              data-scroll-offset="0%, 200%"
              style={{ transform: "scale(var(--progress))" }}
              alt=""
            />
          </div>
          <div className="container">
            <div className="crypto-in">
              <h2>MEOW</h2>
              <h4>Beyond Cryptocurrency </h4>
              <p>
                MEOW is not just a memecoin; it’s a revolutionary movement dedicated to enhancing Solana’s potential. More than a cryptocurrency, MEOW strives
                to create an inclusive and friendly environment within the Solana blockchain. Our mission is to provide a straightforward and accessible crypto
                experience for everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="tokono section-padding pt-0" id="tokenomics-sec">
          <div className="container">
            <div className="headings text-center mb-0">
              <h4>Tokenomics Overview</h4>
              <p>
                Explore the distribution of the $MEOW tokens, with a total supply of 1 billion, designed to foster sustainable growth, community engagement, and
                ecosystem development.
              </p>
            </div>
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <article>
                  <h4>Total Supply</h4>
                  <p>1 Billion MEOW</p>
                </article>
              </div>
              <div className="col-md-4 p-0">
                <article>
                  <h4>Liquidity Pool</h4>
                  <p>500 M MEOW </p>
                  <span>55%</span>
                </article>
              </div>
              <div className="col-md-4 p-0">
                <article>
                  <h4>Presale</h4>
                  <p>300 M MEOW </p>
                  <span>30%</span>
                </article>
              </div>
              <div className="col-md-4 p-0">
                <article>
                  <h4>Team and Development</h4>
                  <p>50 M MEOW</p>
                  <span>5%</span>
                </article>
              </div>
              <div className="col-md-4 p-0">
                <article>
                  <h4>Staking Rewards</h4>
                  <p>50 M MEOW </p>
                  <span>5%</span>
                </article>
              </div>
              <div className="col-md-4 p-0">
                <article>
                  <h4>Future Development</h4>
                  <p>50 M MEOW </p>
                  <span>5%</span>
                </article>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h5>
                MEOW’s tokenomics are designed to ensure a balanced distribution, fostering community participation and supporting ongoing development
                initiatives. The majority of the supply is allocated to the liquidity pool and presale, providing a solid foundation for market liquidity and
                community engagement. A portion is reserved for the team and development efforts, with additional allocations for staking rewards and future
                project enhancements. Transparency and sustainability are at the core of MEOW’s token distribution strategy.
              </h5>
            </div>
          </div>
        </section>

        <section className="join-secc section-padding pt-0">
          <div className="container">
            <div className="join-secc-in">
              <div className="join-left">
                <div className="heading-text">
                  <h4>Join MEOW on Solana Now!</h4>
                  <p>
                    Embrace the MEOW revolution and secure your spot in the community-driven movement. Participate in the presale and become a proud member of
                    the MEOW family.
                  </p>
                </div>
              </div>
              <div className="join-right">
                <img src="images/image9.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
