import { setLocale, useIntl, getLocale } from 'umi';
import React, { useState, useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SliderBanner from '@/components/SliderBanner';
import SliderBrand from '@/components/SliderBrand';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import ZuLin from '@/components/ZuLin';
// import OssImg from '@/components/OssImg';
import Contact from '@/components/Contact';
import BrandData from '@/components/BrandData';
import SliderDesign from '@/components/SliderDesign';
import ShareFacility from '@/components/ShareFacility'
import Service from '@/components/Service'

import { getSingle, addEvent, ossImg } from '@/utils';

import './index.css';

// import fixmeet from '@/assets/fix_meet.png';
// import fixtel from '@/assets/fix_tel.png';
// import fixmsg from '@/assets/fix_msg.png';

import metro from '@/assets/address/metro.png';
import bus from '@/assets/address/bus.png';
import car from '@/assets/address/car.png';
import metro_active from '@/assets/address/metro_active.png';
import bus_active from '@/assets/address/bus_active.png';
import car_active from '@/assets/address/car_active.png';

let popMapIns = null,
  popMobileIns = null;

const metro_img = ossImg('a8564d082eb392df45e39b28fc6bf5ee.png');
const bus_img = ossImg('19bd623c80374559d1ac343d16bf7e0a.png');
const car_img = ossImg('3e78c2c8d47b4a50ba59acf427a09882.png');
const address = ossImg('98d989dffe3d44bb9a8398a3a9a7d09a.png');

export default function IndexPage() {
  const intl = useIntl();
  const [isFrame, setIsFrame] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [curLocation, setCurLocation] = useState(0);

  useEffect(() => {
    // console.log('...');
    const handleScroll = (e) => {
      // console.log('...2');
      if (window.scrollY > window.innerHeight) {
        !sideMenu && setSideMenu(true);
      } else {
        sideMenu && setSideMenu(false);
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  });
  const popMap = getSingle(function () {
    const popDiv = document.createElement('div');
    const popImg = document.createElement('img');
    popImg.src = address;
    popImg.className = 'w-3/4 md:w-1/2 mx-auto border-4 border-gray';
    // popDiv.innerHTML = '我是登录浮窗';
    popDiv.appendChild(popImg);
    popDiv.style.background = 'rgba(0,0,0,0.54)';
    popDiv.style.zIndex = '999';
    popDiv.className =
      'w-full h-screen flex items-center justify-center fixed inset-0';

    addEvent(popDiv, 'click', function () {
      this.style.display = 'none';
    });

    document.body.appendChild(popDiv);
    return popDiv;
  });

  const popMobile = getSingle(function () {
    const popDiv = document.createElement('div');
    const popSpan = document.createElement('div');
    popSpan.innerHTML =
      '<div class="py-4 px-8 bg-white rounded-lg">0551-62628008</div>';
    popSpan.className = 'p-4 rounded-lg';
    popSpan.style.backgroundColor = 'rgba(0, 201, 208, 0.52)';
    popDiv.appendChild(popSpan);
    popDiv.style.background = 'rgba(0,0,0,0.3)';
    popDiv.style.zIndex = '999';
    popDiv.className =
      'w-full h-screen flex items-center justify-center fixed inset-0';

    addEvent(popDiv, 'click', function () {
      this.style.display = 'none';
    });

    document.body.appendChild(popDiv);
    return popDiv;
  });

  const location = [{
    icon: metro,
    icon_active: metro_active,
    name: '地铁',
    img: metro_img,
    desc: [{
      top: [
        200,
        '米'
      ],
      bottom: '2号线、5号线（在建）三孝口站'
    }]
  }, {
    icon: bus,
    icon_active: bus_active,
    name: '公交',
    img: bus_img,
    desc: [{
      top: [
        500,
        '米内'
      ],
      bottom: '约25条公交线路接驳全城'
    }]
  }, {
    icon: car,
    icon_active: car_active,
    name: '驱车',
    img: car_img,
    desc: [{
      top: [
        '约',
        10,
        'min'
      ],
      bottom: '合肥火车站'
    }, {
      top: [
        '约',
        15,
        'min'
      ],
      bottom: '合肥南站'
    }, {
      top: [
        '约',
        30,
        'min'
      ],
      bottom: '新桥机场'
    }]
  }]

  return (
    <main>
      <a href="" id="id0"></a>
      {/* heaser */}
      <Header />
      {/* banner */}
      <SliderBanner />
      {/* <div
        style={{
          zIndex: 99,
        }}
        className={`absolute top-0 bottom-0 items-center justify-center md:inset-auto md:top-1/3 w-full md:w-96 left-0 md:left-2/3 px-10 md:px-0 hidden md:block`}
      >
        <Contact onSubmit={() => {}} />
      </div> */}

      <div
        style={{
          zIndex: 99,
        }}
        className={`fixed top-0 bottom-0 items-center justify-center md:inset-auto md:top-1/3 w-full md:w-96 left-0 md:left-2/3 px-10 md:px-0 ${
          showContact ? ' flex md:block' : ' hidden'
        }`}
        onClick={() => {
          setShowContact(false);
        }}
      >
        <Contact
          onSubmit={() => {
            setShowContact(false);
          }}
        />
      </div>

      {/* 前世今生 */}
      <a id="id1"></a>
      <div className="w-full relative">
        <div className="pastPresent w-full lg:absolute" style={{background: 'rgb(12,20,65)'}}>
          <div className="lg:flex flex-row lg:divide-x divide-white divide-opacity-30 container w-11/12 lg:4/5 xl:w-3/4 m-auto">
            <div className="lg:w-1/3 text-white pt-10 text-center lg:text-left text-lg">
              <span className="text-red text-2xl">
                Past and Present
              </span>
              <br/>
              前世今生
            </div>
            <div
              className="text-center lg:text-right mt-10 lg:mb-10 text-sm leading-6 2xl:leading-8"
              style={{
                color: '#FFFFFF',
                flex: 1
              }}
            >
              <div className="whitespace-pre-line">
                {intl.formatMessage({
                  id: 'section1.con1',
                })}
              </div>
              <div>
                {intl.formatMessage({
                  id: 'section1.con2',
                })}
              </div>
              <div>
                {intl.formatMessage({
                  id: 'section1.con3',
                })}
              </div>
            </div>
          </div>
        </div>
        <img src={ossImg('1766ce675d3ce5862ea253ca940c2aa3.png')} className="-mt-px" />
      </div>

      {/* 公司品牌 */}
      <Section
        hrefid="id2"
        className="pt-20 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${require('@/assets/brand/brand_bg.png')})`
        }}
        width="md:w-3/4"
        title1={
          <div>
            <span className="text-red">
              DoBe Introduction
            </span>
            <br />
            公司品牌
          </div>
        }
      >
        <SliderBrand />
      </Section>
      <BrandData />
      {/* 区位交通 */}
      <Section hrefid="id3" full>
        <div className="flex flex-wrap flex-col-reverse lg:flex-row text-white">
          <div
            className="locationLeft relative w-full lg:w-2/5 py-8 px-8 xl:py-12 xl:px-20 2xl:py-16 2xl:px-24"
          >
            <SectionTitle
              title1={
                <div>
                  <span>Location</span>
                  <br />
                  区位交通
                </div>
              }
              align="left"
              color="white"
            />
            <div className="pt-6 xl:pt-8 text-base">
              {intl.formatMessage({
                id: 'location.desc',
              })}
              <br />
              {intl.formatMessage({
                id: 'location.desc2',
              })}
            </div>
            <div className="pt-10">
              <div
                className="mapBtn border border-white border-opacity-60 rounded-full px-5 py-2"
                onClick={() => {
                  if (popMapIns) {
                    popMapIns.style.display = 'flex';
                  } else {
                    popMapIns = popMap();
                  }
                }}
              >
                {intl.formatMessage({
                  id: 'location.查看区位图',
                })}
              </div>
            </div>
            <div className="xl:pt-4">
              <ScrollOverPack playScale="0.1" className="h-full">
                <QueueAnim leaveReverse className="flex flex-row justify-between">
                  {
                    location.map((type, index) => {
                      const { icon, icon_active, name } = type
                      const isActive = curLocation == index

                      return (
                        <div key={index} className="flex flex-col items-center my-10 w-20 lg:w-24 2xl:w-28 justify-center cursor-pointer" onClick={() => setCurLocation(index)}>
                          <div className="h-20 lg:h-24 2xl:h-28 flex items-end">
                            <img
                              className={isActive ? 'w-20 h-20 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28' : 'w-12 h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20'}
                              src={isActive ? icon_active : icon}
                              alt=""
                            />
                          </div>
                          <div className="h-5 flex flex-col justify-center my-4">
                            <span
                              className={isActive ? 'w-4 h-4 inline-block border-4 border-white rounded-full' : 'inline-block border-4 border-white rounded-full'}
                              style={{backgroundColor: isActive ? '#FE5E10' : 'transparent'}}
                            ></span>
                          </div>
                          <div className="h-6 flex flex-col justify-center">
                            <span className={isActive ? 'font-black text-xl' : ''}>
                              {intl.formatMessage({
                                id: `location.${name}`,
                              })}
                            </span>
                          </div>
                        </div>
                      )
                    })
                  }
                </QueueAnim>
              </ScrollOverPack>
            </div>
          </div>
          <div
            className="w-full h-96 lg:h-auto lg:w-3/5 bg-center bg-cover relative"
            style={{
              backgroundImage: `url(${location[curLocation].img})`,
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className={`w-full grid ${location[curLocation].desc.length == 3 ? 'grid-cols-3 locationDesc' : 'grid-cols-1'}`}>
                {
                  location[curLocation].desc.map((desc, index) => {
                    return (
                      <div key={index} className="flex flex-col justify-center items-center">
                        <div className="tracking-widest">
                          {
                            desc.top.map((top, j) => <span key={j} className={location[curLocation].desc.length > 1 ? (typeof top == 'number' ? 'text-4xl' : '') : (typeof top == 'number' ? 'text-6xl' : '')}>
                              {
                                typeof top == 'number' ? top : intl.formatMessage({
                                  id: `location.${top}`,
                                })
                              }
                            </span>)
                          }
                        </div>
                        <span>
                          {intl.formatMessage({
                            id: `location.${desc.bottom}`,
                          })}
                        </span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* 设计理念 */}
      <Section
        hrefid="id4"
        className="pt-20 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${require('@/assets/design/design_bg.png')})`
        }}
        width="lg:w-3/5"
        title1={
          <div>
            <span className="text-red">
              DESIGN
            </span>
            <br />
            设计理念
          </div>
        }
        desc={
          <div
            className="leading-8 px-5 my-10 text-sm 2xl:text-base"
            style={{ color: '#666' }}
          >
            <div>
              {intl.formatMessage({
                id: 'design.con1',
              })}
            </div>
            <div>
              {intl.formatMessage({
                id: 'design.con2',
              })}
              <span className="font-black">
                {intl.formatMessage({
                  id: 'design.con3',
                })}
              </span>
              {intl.formatMessage({
                id: 'design.con4',
              })}
              <span className="font-black">
                {intl.formatMessage({
                  id: 'design.con5',
                })}
              </span>
            </div>
          </div>
        }
      >
        <div className="pb-16 xl:pb-24 2xl:pb-32">
          <div className="text-center mb-4">
            <span className="text-red">←</span>
            <span className="font-black mx-2">移动中轴查看变化</span>
            <span className="text-red">→</span>
          </div>
          <SliderDesign />
        </div>
      </Section>
      {/* 共享配套 */}
      <Section
        hrefid="id5"
        className="pt-20 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${require('@/assets/share/share_bg.png')})`
        }}
        width="sm:w-10/12"
        title1={
          <div>
            <span className="text-red">
              SHARE
            </span>
            <br />
            共享配套
          </div>
        }
        desc={
          <div
            className="leading-8 px-5 my-10 text-sm 2xl:text-base"
            style={{ color: '#666' }}
          >
          <div>
            <span className="font-black">
              {intl.formatMessage({
                id: 'share.con1',
              })}
            </span>
            {intl.formatMessage({
              id: 'share.con2',
            })}
            <span className="font-black">
              {intl.formatMessage({
                id: 'share.con3',
              })}
            </span>
          </div>
          <div>
            {intl.formatMessage({
              id: 'share.con4',
            })}
          </div>
          </div>
        }
      >
        <div className="mx-auto pt-10 pb-24">
          <ShareFacility />
        </div>
      </Section>
      {/* 增值服务 */}
      <Section
        hrefid="id6"
        className="pt-20 pb-10 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${ossImg('23a879eebfb6b24460101257efe2cf44.png')})`
        }}
        width="md:w-3/5"
        title1={
          <div>
            <span className="text-red">
              SERVICES
            </span>
            <br />
            <span className="text-white">
              增值服务
            </span>
          </div>
        }
        desc={
          <div className="leading-10 my-5 px-5 relative">
            <div
              className="text-xs 2xl:text-sm mt-2 leading-6 2xl:leading-7 whitespace-pre-line"
              style={{ color: '#666' }}
            >
              {intl.formatMessage({
                id: 'service.con1',
              })}
              <span className="font-black text-white">
                {intl.formatMessage({
                  id: 'service.con2',
                })}
              </span>
              {intl.formatMessage({
                id: 'service.con3',
              })}
              <span className="font-black text-white">
                {intl.formatMessage({
                  id: 'service.con4',
                })}
              </span>
              {intl.formatMessage({
                id: 'service.con5',
              })}
              <span className="font-black text-white">
                {intl.formatMessage({
                  id: 'service.con6',
                })}
              </span>
              {intl.formatMessage({
                id: 'service.con7',
              })}
            </div>
          </div>
        }
      >
        <Service />
      </Section>
      {/* 租赁信息 */}
      <Section
        hrefid="id7"
        className="py-20"
        style={{background: '#F3F0EF'}}
        width="sm:w-10/12"
        title1={
          <div>
            <span className="text-red">
              PARAMENTS
            </span>
            <br />
            租赁信息
          </div>
        }
      >
        <ZuLin />
      </Section>
      {/* footer */}
      <Footer />
      {/* <div
        className={`${
          sideMenu ? 'right-0 opacity-100' : '-right-full opacity-0'
        } fixed top-1/2 z-10 transition-all duration-500`}
      >
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-14 xl:w-24 text-white text-center p-2 cursor-pointer"
          style={{ backgroundColor: '#00C9D0' }}
          onClick={() => {
            setShowContact(!showContact);
          }}
        >
          <img className="block w-2/3 mx-auto" src={fixmsg} alt="" />
          <span className="hidden md:inline">
            {intl.formatMessage({
              id: 'footer.预约参观',
            })}
          </span>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-14 xl:w-24 mt-2 text-white text-center p-2"
          style={{ backgroundColor: '#00C9D0' }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              let userAgent = navigator.userAgent.toLowerCase();
              // 用 test 匹配浏览器信息
              if (
                /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(
                  userAgent,
                )
              ) {
                window.location.href = 'tel:021-62335008';
              } else {
                if (popMobileIns) {
                  popMobileIns.style.display = 'flex';
                } else {
                  popMobileIns = popMobile();
                }
              }
            }}
          >
            <img className="block w-2/3 mx-auto" src={fixtel} alt="" />
            <span className="hidden md:inline">
              {intl.formatMessage({
                id: 'footer.电话咨询',
              })}
            </span>
          </a>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-14 xl:w-24 mt-2 text-white text-center p-2 cursor-pointer"
          style={{ backgroundColor: '#00C9D0' }}
          onClick={() => {
            let iframe = document.querySelector('.iframe');
            if (!isFrame) {
              iframe.setAttribute(
                'src',
                'https://im1c5366d.7x24cc.com/phone_webChat.html?accountId=N000000031971&chatId=5ba0492b-7f47-454f-a6b9-415da15e8c68',
              );
            } else {
              iframe.removeAttribute('src');
            }
            setIsFrame(!isFrame);
          }}
        >
          <img className="block w-2/3 mx-auto" src={fixmeet} alt="" />
          <span className="hidden md:inline">
            {intl.formatMessage({
              id: 'footer.在线咨询',
            })}
          </span>
          <div
            style={{ minHeight: 500, minWidth: 320 }}
            className={`fixed top-1/2 w-5/6 md:w-80 h-3/4 md:h-3/5 transform -translate-y-1/2 left-5 md:left-auto md:right-20 ${
              isFrame ? 'block' : 'hidden'
            }`}
          >
            <iframe
              src=""
              frameBorder="0"
              className="iframe w-full h-full"
            ></iframe>
          </div>
        </div>
      </div> */}
    </main>
  );
}
