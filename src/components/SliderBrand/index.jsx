import { setLocale, useIntl } from 'umi';
import SwiperCore, {
  Autoplay,
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

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const imgs = [
  {
    img: ossImg('bbd633b13583aff67e149da24f3110e7.png'),
  },
  {
    img: ossImg('02aab598a5acc3f51ea1a17fea9ef363.png'),
  },
  {
    img: ossImg('06f0b08dcb7ab137dc8142c6a4de7d93.png'),
  }
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section id="certify2" className="relative w-full">
      <div className="slider">
        <Swiper
          // effect="coverflow"
          // navigation
          // pagination={{
          //   clickable: true,
          //   renderBullet: (index, className) => {
          //     // console.log('index', index, className);
          //     return `<div class="${className}"></div>`;
          //   },
          // }}
          // watchSlidesProgress
          centeredSlides
          onSwiper={(swiper) => (window.brandSwiper = swiper)}
          // spaceBetween={50}
          // parallax={true}
          loop
          // slidesPerView={1}
          // loopedSlides={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
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
      </div>
      <div className="prev hidden lg:block w-16 h-44 pb-28 absolute -left-24 top-1/2 transform -translate-y-1/2 cursor-pointer bg-contain bg-no-repeat" onClick={() => window.brandSwiper.slidePrev()}></div>
      <div className="next hidden lg:block w-16 h-44 pb-28 absolute -right-24 top-1/2 transform -translate-y-1/2 cursor-pointer bg-contain bg-no-repeat" onClick={() => window.brandSwiper.slideNext()}></div>
    </section>
  );
}
