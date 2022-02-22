import { setLocale, useIntl } from 'umi';
import React, { useState } from 'react';
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

import design_after from '@/assets/design/design_after.png';
import drag from '@/assets/design/drag.png';
import left from '@/assets/left.png';
import right from '@/assets/right.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const imgs = [
  {
    title: '门头-改造前后对比',
    before: ossImg('003c52f6f1ed31c793d2f28587b46865.jpg'),
    after: ossImg('d510414c6bb23c183e1c2d6a56615ee9.jpg'),
  },
  {
    title: '一楼大堂-改造前后对比',
    before: ossImg('e75ebe38b8aacb6c6f85e8cba4c1e69e.jpg'),
    after: ossImg('69d7f5e25387903f453e2f498b6e9902.jpg'),
  },
  {
    title: '5F共享空间-改造前后对比',
    before: ossImg('27549292e8ed2d148d96fb49a84d5bda.jpg'),
    after: ossImg('fac3094ba4f029be5bf1f4c0b87be98b.jpg'),
  },
  {
    title: '5F过道-改造前后对比',
    before: ossImg('782cc3f764fbe0541cc9d8622f1b4440.jpg'),
    after: ossImg('3c04bdfb6de4fff096e3a6171a1fc177.jpg'),
  },
  {
    title: '办公空间-改造前后对比',
    before: ossImg('270390fe5d670f5d539ce474aee07071.jpg'),
    after: ossImg('20f9916c601241805f85440a2d6a3788.jpg'),
  }
];

export default function IndexPage() {
  const intl = useIntl();
  const [curIndex, setCurIndex] = useState(0);
  const [curPos, setCurPos] = useState(50);
  const [startPos, setStartPos] = useState();

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    const { clientX } = e
    setStartPos(clientX)
    // console.info('handleDragEnter', clientX)
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    const { clientX } = e
    const curPos1 = clientX * curPos / startPos
    setCurPos(curPos1)
    setStartPos(clientX)
    // console.info('handleDragOver', clientX, startPos, curPos, curPos1)
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    const { clientX } = e
    const curPos1 = clientX * curPos / startPos
    setCurPos(curPos1)
    // console.info('handleDragLeave', clientX, startPos, curPos, curPos1)
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    // console.info('handleDrop', e)
  };

  return (
    <section id="sliderDesign" className="relative w-full">
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
          allowTouchMove={false}
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
          onSlideChange={function (swiper) {
            const { realIndex, activeIndex } = swiper
            // console.info(realIndex, activeIndex, this.slides.length)
            setCurIndex(realIndex)
          }}
        >
          {imgs.map((v, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <img src={v.after} />
                <div className="absolute inset-0 flex flex-row">
                  <div className="bg-cover bg-left h-full" style={{
                    backgroundImage: `url(${v.before})`,
                    width: `${curPos}%`
                  }}></div>
                  <div className="bg-transparent relative" style={{width: `${100 - curPos}%`}}>
                    <img src={design_after} className="h-full w-auto" style={{width: 'auto', marginLeft: 0}} />
                    <div
                      className="absolute top-1/2 left-0 w-28 h-28 transform -translate-x-1/2 -translate-y-1/2 cursor-move bg-cover bg-center bg-no-repeat"
                      draggable="true"
                      onDrop={e => handleDrop(e)}
                      onDragOver={e => handleDragOver(e)}
                      onDragEnter={e => handleDragEnter(e)}
                      onDragLeave={e => handleDragLeave(e)}
                      style={{backgroundImage: `url(${drag})`}}
                    >
                      {/* <img src={drag} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="index flex flex-row justify-around items-start h-16 relative">
          {
            imgs.map((img, index) => {
              return (
                <div key={index} className="relative mt-px cursor-pointer p-2 pt-0" onClick={() => window.swiper.slideTo(index + 1)}>
                  <span className={`inline-block text-red w-2 h-2 rounded-full bg-current relative ${curIndex == index ? 'ring-1 ring-current ring-offset-4' : ''}`}></span>
                  {
                    curIndex == index && (
                      <span className="font-black mt-1 absolute -bottom-8 left-1/2 whitespace-nowrap transform -translate-x-1/2">
                        {intl.formatMessage({
                          id: `design.${img.title}`,
                        })}
                      </span>
                    )
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      <img src={left} className="hidden lg:block w-16 h-44 pb-28 absolute -left-24 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => window.swiper.slidePrev()} />
      <img src={right} className="hidden lg:block w-16 h-44 pb-28 absolute -right-24 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => window.swiper.slideNext()} />
    </section>
  );
}
