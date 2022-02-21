import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import './index.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function IndexPage({ data }) {
  return (
    <section id="mainSlider">
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
        loop
        type={'progressbar'}
        slidesPerView={'auto'}
        loopedSlides={3}
        autoplay
        watchSlidesProgress
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const curIndex = index + 1
            // console.log('index', index, className);
            return `<div class="${className + ' index' + curIndex}"><span class="pre"> - </span><span class="index">0${curIndex}</span><span class="next"> - </span></div>`;
          }
        }}
      >
        {data.map((v, i) => (
          <SwiperSlide key={i}>
            <img
              className="transform scale-150 md:scale-100"
              referrerPolicy="no-referrer"
              src={v}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
