import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import 'swiper/swiper-bundle.css';
import { ossImg } from '@/utils';

import './index.css';

import logo from '@/assets/logo.png';
import banner_logo from '@/assets/slider/banner_logo.png';

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const data = [{
  img: ossImg('289d907623e4bcd221f01d130798c22d.jpg'),
  desc: [
    banner_logo,
    '科创名城',
    '数字赋能',
    '长三角（合肥）数字经济科创中心'
  ]
}, {
  img: ossImg('be9890ffc541165da07be9949030cc05.png'),
  desc: [
    banner_logo,
    '城·在廻归',
    '隅·见新生',
    '老城里的创意新空间'
  ]
}, {
  img: ossImg('19f1fb2dfed3954e4fb6b20ac7e1214b.png'),
  desc: [
    logo,
    '创意办公',
    '火热招租',
    '100-1100㎡精装办公 拎包入驻'
  ]
}]

export default function IndexPage() {
  const intl = useIntl();

  return (
    <section id="mainSlider">
      <Swiper
        navigation
        onSwiper={swiper => (window.swiper = swiper)}
        // spaceBetween={50}
        loop
        // type={'progressbar'}
        watchSlidesProgress
        centeredSlides
        // slidesPerView={'auto'}
        // loopedSlides={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const curIndex = index + 1
            // console.log('index', index, className);
            return `<div class="${className + ' index' + curIndex}"><span class="pre"> - </span><span class="index">0${curIndex}</span><span class="next"> - </span></div>`;
          }
        }}
      >
        {data.map((v, i) => {
          const {img, desc} = v

          return (
            <SwiperSlide key={i}>
              <div className="relative">
                <img
                  // className="transform scale-150 md:scale-100"
                  referrerPolicy="no-referrer"
                  src={img}
                />
                {/* <ScrollOverPack playScale="0.1" className="h-full"> */}
                  <QueueAnim reversed className="absolute w-3/4 mx-auto bottom-1/3 sm:bottom-1/2 text-white flex flex-col items-start  transform translate-y-1/3" style={{left: '13%'}}>
                    <img
                      className="w-52 hidden sm:block"
                      referrerPolicy="no-referrer"
                      src={desc[0]}
                    />
                    <span className="text-3xl mt-8 mb-4 tracking-widest">
                      {intl.formatMessage({
                        id: `banner.${desc[1]}`,
                      })}
                      &nbsp;&nbsp;
                      {intl.formatMessage({
                        id: `banner.${desc[2]}`,
                      })}
                    </span>
                    <span className="text-red py-0.5 px-2.5 border" style={{borderColor: i == 2 ? '#E2D7D1' : '#FE5E10', color: i == 2 ? '#E2D7D1' : '#FE5E10'}}>
                      {intl.formatMessage({
                        id: `banner.${desc[3]}`,
                      })}
                    </span>
                  </QueueAnim>
                {/* </ScrollOverPack> */}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}
