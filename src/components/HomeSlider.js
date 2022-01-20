import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import { Link } from "gatsby";

import slider1 from '../images/slider-image.png';
import slider2 from '../images/slider-image.png';
import slider3 from '../images/slider-image.png';
import slider4 from '../images/slider-image.png';

const items = [
  {

    src: slider1,
    class: "slider1",
    altText: '<h1>Cybersecurity & Information Risk Management</h2> <br /><h3>for SaaS Companies</h3>',
    alt: 'cyber security service',
    caption: '<h1>Cybersecurity & Information Risk Management<br /><span>for your SaaS Business</span></h1>',
    caption2: 'abc',
    buttontext: 'Book Now !! – Free Consultation',
    buttonurl: '/cybersecurity-consulting-appointments'
  },

  {
    src: slider3,
    class: "slider3",
    altText: '<h2>The Intelligent Choice</h2> <br /><h3>for your SaaS Business</h3>',
    caption: '<h2>The Intelligent Choice <br /><span>for your SaaS Business</span></h2>',
    caption2: 'abc',
    alt: 'cyber security service',
    buttontext: 'Contact Us',
    buttonurl: '/cybersecurity-consulting-contact-us'
  },
  {
    src: slider2,
    class: "slider2",
    altText: '<h2>Cybersecurity & Information Risk Management</h2> <br /><h3>for your SaaS Business</h3>',
    caption: '<h2>Cybersecurity & Information Risk Management<br /><span>for your SaaS Business</span></h2>',
    caption2: 'abc',
    alt: 'cyber security service',
    buttontext: 'Get Free Consultation',
    buttonurl: '/cybersecurity-consulting-appointments'
  },
  {
    src: slider4,
    class: "slider4",
    altText: 'Slide 3',
    caption: '<h2>Just Taking Care of the Security of<br /> <span>your SaaS Business</span></h2>',
    caption2: 'abc',
    alt: 'cyber security service',
    buttontext: 'Contact Us',
    buttonurl: '/cybersecurity-consulting-contact-us'
  }
];

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
        className={item.class}
        style={{ background: `url(${item.src})` }}
      >
        <div className="carousel-caption content-box d-none d-md-block">
          <div className="crousal-lineh" dangerouslySetInnerHTML={{ __html: (item.caption) }} />
          <div className="button">
            <Link className="theme-btn btn-style-one" to={item.buttonurl}><span>{item.buttontext}</span></Link>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <section className="slider-section banner-sec">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <Carousel autoPlay={true}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={4000}
            hover={true}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default HomeSlider;