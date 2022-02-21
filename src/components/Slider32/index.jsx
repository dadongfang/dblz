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

const imgs = [
  {
    title: '"前沿智能设施加持"',
    desc: '创享未来科技体验',
    img: '4d8a1f0f7a5172c9e4f935c7d560cd2e.jpg',
  },
  {
    title: '"灵动多变 打破传统办公格局"',
    desc: '创意不再被空间束缚',
    img: '44338fa1419cf3d5d1cba60e3ab27416.jpg',
  },
  {
    title: '"全方位安心守护"',
    desc: '不放过每一处细节',
    img: '5648752b2e22c1d979933b6d5c551301.jpg',
  },
  {
    title: '"高品质精装入驻"',
    desc: '为企业节省30%空间成本',
    img: '891d1c44ed176b9e70727e7f996727f4.jpg',
  },
  {
    title: '"生态赋能建筑 无界花园"',
    desc: '打造绿色低碳办公社区',
    img: 'b44231525e153409e443de754e7b81ef.jpg',
  },
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section id="certify32">
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
        loop
        slidesPerView={'auto'}
        loopedSlides={5}
        autoplay
        onProgress={function (progress, a) {
          // console.log('progress', this);
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let w = window.innerWidth * 0.67 * 0.8;
            // console.log('w', w);
            let translate = slideProgress * modify * w + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              'translateX(' + translate + ') scale(' + scale + ')',
            );
            // console.log('slide', this.slides[i]);

            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
            if (Math.abs(slideProgress) > 0.5) {
              slide.css('opacity', 0.6);
            }
          }
        }}
        onSetTransition={function (swiper, transition) {
          console.log('transition', transition);
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }}
      >
        {imgs.map((v, i) => (
          <SwiperSlide key={i}>
            <img
              src={'https://wehome-image.oss-cn-shanghai.aliyuncs.com/' + v.img}
            />
            <div className="absolute bottom-4 w-full text-center xl:left-8 xl:bottom-8 text-white">
              <div className="text-base lg:text-lg">
                {intl.formatMessage({
                  id: 'section3.' + v.title,
                })}
              </div>
              <div className="text-xs lg:text-sm">
                {intl.formatMessage({
                  id: 'section3.' + v.desc,
                })}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
