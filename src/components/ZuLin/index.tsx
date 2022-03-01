import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import React, { useState } from 'react';
import { ossImg } from '@/utils';
import './index.css'

import ico1 from '@/assets/lease/1.png';
import ico2 from '@/assets/lease/2.png';
import ico3 from '@/assets/lease/3.png';
import ico4 from '@/assets/lease/4.png';
import ico5 from '@/assets/lease/5.png';
import ico6 from '@/assets/lease/6.png';
import ico1_active from '@/assets/lease/1_active.png';
import ico2_active from '@/assets/lease/2_active.png';
import ico3_active from '@/assets/lease/3_active.png';
import ico4_active from '@/assets/lease/4_active.png';
import ico5_active from '@/assets/lease/5_active.png';
import ico6_active from '@/assets/lease/6_active.png';

const datas = [
  { icon: ico1, icon_active: ico1_active, count: '21685.63㎡', desc: '总面积' },
  { icon: ico2, icon_active: ico2_active, count: '24h自主控制', desc: '空调 VRV系统' },
  { icon: ico3, icon_active: ico3_active, count: '电梯4部', desc: 'OTIS/三菱' },
  { icon: ico4, icon_active: ico4_active, count: '玻璃幕墙+干挂铝板', desc: '外立面' },
  { icon: ico5, icon_active: ico5_active, count: '100-1100㎡', desc: '单层可租赁面积' },
  { icon: ico6, icon_active: ico6_active, count: '定制精装 拎包入驻', desc: '交付标准' }
];

export default function IndexPage() {
  const intl = useIntl();
  const [curIndex, setCurIndex] = useState(0);

  const Wrap = (props) => (
    <div className="h-full grid grid-cols-3" {...props}></div>
  );

  return (
    <div className="flex flex-col lg:flex-row mt-10">
      <img src={ossImg('4bd4df0a96abaff0bad764dfaec38540.png')} className="w-full lg:w-1/2" />
      <section className="w-full lg:w-1/2" style={{ minHeight: 80 }}>
        <ScrollOverPack playScale="0.1" className="h-full">
          <QueueAnim key="queue" type="bottom" component={Wrap} leaveReverse>
            {datas.map((v, i) => {
              const { icon, icon_active, count, desc } = v
              const isActive = curIndex == i

              return (
                <div key={v.icon} className={`zulinItem text-center cursor-pointer flex flex-col justify-center relative ${isActive ? 'active' : ''}`} style={{backgroundColor: i%2 == 0 ? '#FCF9F7' : 'white'}} onMouseOver={() => setCurIndex(i)}>
                  <div className="icon m-5 mt-10">
                    <img
                      className=" w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 inline-block"
                      src={isActive ? icon_active : icon}
                      alt=""
                    />
                  </div>
                  <div className="font-bold text-sm xl:text-base 2xl:text-lg">
                    {intl.formatMessage({
                      id: 'zulin.' + count,
                    })}
                  </div>
                  <div className="text-xs mb-10">
                    {intl.formatMessage({
                      id: 'zulin.' + desc,
                    })}
                  </div>
                </div>
              )
            })}
          </QueueAnim>
        </ScrollOverPack>
      </section>
    </div>
  );
}
