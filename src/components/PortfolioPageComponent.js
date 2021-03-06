import React, { Component }  from 'react';


export default function PortfolioPageComponent(){
    return(
            <div className="arlo_tm_section relative" id="portfolio">
      <div className="arlo_tm_portfolio_wrapper_all">
                <div className="arlo_tm_second_portfolio">
        <div className="container">
          <div className="arlo_tm_portfolio_wrap">
            <div className="arlo_tm_title_holder portfolio">
              <h3>Creative Works</h3>
              <span>Check out our latest creative works</span>
            </div>
            <div className="arlo_tm_portfolio_titles"></div>
            <ul className="arlo_tm_portfolio_filter">
              <li><a href="#" className="current" data-filter="*">All</a></li>
              <li><a href="#" data-filter=".design">Design</a></li>
              <li><a href="#" data-filter=".photography">Photography</a></li>
              <li><a href="#" data-filter=".development">Development</a></li>
            </ul>
            <ul className="arlo_tm_portfolio_list gallery_zoom">
              <li className="design">
                <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Aoc Productions" data-category="Design">
                  <a href="portfolio-single.html">
                    <img src="img/portfolio/600x600.jpg" alt="" />
                    <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/1.jpg"></div>
                  </a>
                </div>
              </li>
              <li className="photography">
                <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Ind Hed" data-category="Photography">
                  <a href="portfolio-single-2.html">
                    <img src="img/portfolio/600x600.jpg" alt="" />
                    <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/2.jpg"></div>
                  </a>
                </div>
              </li>
              <li className="development">
                <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Paper Mockup" data-category="Development">
                  <a href="portfolio-single-3.html">
                    <img src="img/portfolio/600x600.jpg" alt="" />
                    <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/3.jpg"></div>
                  </a>
                </div>
              </li>
              <li className="photography">
                <div className="entry arlo_tm_portfolio_animation_wrap" data-title="The Nordic" data-category="Photography">
                  <a href="portfolio-single-4.html">
                    <img src="img/portfolio/600x600.jpg" alt="" />
                    <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/4.jpg"></div>
                  </a>
                </div>
              </li>
              <li className="design">
                <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Creatives Castle" data-category="Design">
                  <a href="portfolio-single-5.html">
                    <img src="img/portfolio/600x600.jpg" alt="" />
                    <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/5.jpg"></div>
                  </a>
                </div>
              </li>
              <li className="photography">
                <div className="entry arlo_tm_portfolio_animation_wrap" data-title="White Bag" data-category="Photography">
                  <a href="portfolio-single-6.html">
                    <img src="img/portfolio/600x600.jpg" alt="" />
                    <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/6.jpg"></div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      </div>
      </div>
        
  );
}

