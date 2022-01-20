/*
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import { Link } from "gatsby"
import slider1 from '../images/slider/1.webp'
import slider2 from '../images/slider/2.webp'
import slider3 from '../images/slider/3.webp'
import slider4 from '../images/slider/4.webp'

const items = [
  {

    src: slider1,
    altText: '<h1>Cybersecurity & Information Risk Managment</h2> <br /><h3>for SaaS Companies</h3>',
    alt: 'cyber security service',
    caption: '<h1>Cybersecurity & Information Risk Managment</h1><br /> <h3>for SaaS Companies</h3>',
    caption2: 'abc',
    buttontext: 'BOOK NOW! - FREE CONSULTATION',
    buttonurl: '/cybersecurity-consulting-appointments'
  },
  {
    src: slider2,
    altText: '<h2>Cybersecurity & Information Risk Managment</h2> <br /><h3>for your SaaS Business</h3>',
    caption: '<h1>Cybersecurity & Information Risk Managment</h1> <br /><h3>for your SaaS Business</h3>',
    caption2: 'abc',
    alt: 'cyber security service',
    buttontext: 'Get Free Consultation',
    buttonurl: '/cybersecurity-consulting-appointments'
  },
  {
    src: slider3,
    altText: '<h2>The Intelligent Choice</h2> <br /><h3>for your SaaS Business</h3>',
    caption: '<h1>The Intelligent Choice</h1> <br /><h3>for your SaaS Business</h3>',
    caption2: 'abc',
    alt: 'cyber security service',
    buttontext: 'Contact Us',
    buttonurl: '/cybersecurity-consulting-contact-us'
  },
  {
    src: slider4,
    altText: 'Slide 3',
    caption: '<h1>Just Taking Care of the Security of your SaaS Business</h1>',
    caption2: 'abc',
    alt: 'cyber security service',
    buttontext: 'Contact Us',
    buttonurl: '/cybersecurity-consulting-contact-us'
  }
];

const HomeSlider = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}

      >
        <img src={item.src} alt={item.alt} title={item.alt} />
        <div className="carousel-caption d-none d-md-block">

          <div className="crousal-lineh" dangerouslySetInnerHTML={{
            __html: (item.caption)
          }} />
          <div className="button">
            <Link className="cr-btn cr-btn-lg b-t-btn b-t-btn" to={item.buttonurl}><span>{item.buttontext}</span></Link>
          </div>
        </div>



      </CarouselItem>
    );
  });

  return (
    <Carousel autoPlay={true}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={4000}
      hover={true}
      mouseEnter={true}
      mouseLeave={true}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}

      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HomeSlider;
*/