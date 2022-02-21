import { setLocale, useIntl } from 'umi';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './index.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function IndexPage({ data }) {
  const intl = useIntl();
  return (
    <section id="certify4">
      <Swiper
        // effect="coverflow"
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // console.log('index', index, className);
            return `<div class="${className}"></div>`;
          },
        }}
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
        loop
        slidesPerView={5}
        loopedSlides={5}
        onProgress={function (progress, a) {
          let nowIndex = progress.activeIndex;
          let len = this.slides.length;

          // console.log('aaa', nowIndex, len);
          let slide1 = this.slides.eq(nowIndex - 2);
          let slide2 = this.slides.eq(nowIndex - 1);
          let slide = this.slides.eq(nowIndex);
          let slide3 = this.slides.eq(nowIndex + 1);
          let slide4 = this.slides.eq(nowIndex + 2);

          slide.css('transform', 'rotateY(0deg)');
          slide1.css('transform', 'rotateY(60deg)');
          slide2.css('transform', 'rotateY(60deg)');
          slide3.css('transform', 'rotateY(60deg)');
          slide4.css('transform', 'rotateY(60deg)');
        }}
        onSetTransition={function (transition) {
          for (var i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }}
      >
        {data.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
