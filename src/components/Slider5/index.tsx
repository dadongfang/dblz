import { setLocale, useIntl, getIntl, getLocale } from 'umi';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './index.css';

import SectionTitle from '../SectionTitle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const tits = ['十大增值服务', '轻公司生态圈', '国际企业共联', '基础企业服务'];

const imgs = [
  {
    title: '十大增值服务',
    desc: '依托优势资源，结合企业发展所需，为企业提供人才、资金融集品牌推广、法律政策咨询等企业服务，为入驻企业排忧解难，共同成长。',
    img: '40f5f8a03b89df0e9742b22fda496c76.jpg',
  },
  {
    title: '轻公司生态圈',
    desc: '德必集团通过搭建“轻公司生态圈”，打通园区入驻企业资源通道，内外圈层，上下联动、跨界合作。无缝对接旗数千家企业、10余万名白领，实现自由交易合作，同频共振。',
    img: '29c9be012a23347fd57143a1cbae3d09.jpg',
  },
  {
    title: '国际企业共联',
    desc: '德必集团已覆盖欧美亚三大洲10余个国家和地区，担任企业“大使馆”，通过全球资源网络，为企业提供深度嵌入式“N+1”国际业务服务，实现企业客户的经济与社会效益最大化。',
    img: 'b5633292184e907b9294778afbec3b64.jpg',
  },
  {
    title: '基础企业服务',
    desc: '5A级智能化办公及物业服务系统，为所有客户提供专业化管理和国际标准化服务，包括日常楼宇服务、安全预防管理、紧急事件处理、智能运营服务。',
    img: 'c7058973f6c27138656db878fc5ed8cf.jpg',
  },
];

export default function IndexPage() {
  const intl = useIntl();
  // console.log('重新执行没？');

  window.swiper?.pagination.render(); // 重新渲染页码

  return (
    <section id="certify5" className="relative">
      <div className="absolute -z-1 lg:z-10 w-full top-4 lg:top-8 2xl:top-16">
        <SectionTitle
          title1={
            intl.formatMessage({
              id: 'title.品牌',
            }) +
            intl.formatMessage({
              id: 'title.服务',
            })
          }
          align="center"
          color="white"
        />
      </div>
      <Swiper
        touchEventsTarget="wrapper"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const intl2 = getIntl(getLocale());
            return `<div class="${className}">${intl2.formatMessage({
              id: 'section7.' + tits[index],
            })}</div>`;
          },
        }}
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
      >
        {imgs.map((v, i) => (
          <SwiperSlide key={i}>
            <img
              className="transform scale-150 md:scale-100"
              src={'https://wehome-image.oss-cn-shanghai.aliyuncs.com/' + v.img}
            />
            <div
              className="absolute w-full text-white px-5 lg:px-0"
              style={{ top: '40%' }}
            >
              <div className="container mx-auto text-left">
                <div className="text-sm lg:text-base xl:text-2xl">
                  {intl.formatMessage({
                    id: 'section7.' + v.title,
                  })}
                </div>
                <div className="text-xs lg:text-base xl:text-lg mt-2 lg:mt-4 lg:w-1/2">
                  {intl.formatMessage({
                    id: 'section7.' + v.title + i,
                  })}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
