import { setLocale, useIntl } from 'umi';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ossImg } from '@/utils';

import 'swiper/swiper-bundle.css';
import './index.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const imgs = [
  {
    img: ossImg('bbd633b13583aff67e149da24f3110e7.png'),
  },
  {
    img: ossImg('bb4b43fe3f5d7cea7defc13e77c98a1b.png'),
  },
  {
    img: ossImg('7a96a2f5d66123b0d07f7098dd512700.png'),
  }
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section id="certify2">
      <Swiper
        // effect="coverflow"
        navigation
        // pagination={{
        //   clickable: true,
        //   renderBullet: (index, className) => {
        //     // console.log('index', index, className);
        //     return `<div class="${className}"></div>`;
        //   },
        // }}
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        // spaceBetween={50}
        // parallax={true}
        loop
        // slidesPerView={1}
        // loopedSlides={2}
        autoplay
        onProgress={function (progress, a) {
          // console.log('progress', this);
          // for (let i = 0; i < this.slides.length; i++) {
          //   let slide = this.slides.eq(i);
          //   let slideProgress = this.slides[i].progress;
          //   let modify = 1;
          //   if (Math.abs(slideProgress) > 1) {
          //     modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
          //   }
          //   let w = window.innerWidth * 0.67 * 0.8;
          //   // console.log('w', w);
          //   let translate = slideProgress * modify * w + 'px';
          //   let scale = 1 - Math.abs(slideProgress) / 5;
          //   let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          //   slide.transform(
          //     'translateX(' + translate + ') scale(' + scale + ')',
          //   );
          //   // console.log('slide', this.slides[i]);

          //   slide.css('zIndex', zIndex);
          //   slide.css('opacity', 1);
          //   if (Math.abs(slideProgress) > 3) {
          //     slide.css('opacity', 0);
          //   }
          //   if (Math.abs(slideProgress) > 0.5) {
          //     slide.css('opacity', 0.6);
          //   }
          // }
        }}
        onSetTransition={function (swiper, transition) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }}
      >
        {imgs.map((v, i) => (
          <SwiperSlide key={i}>
            <img
              src={v.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
