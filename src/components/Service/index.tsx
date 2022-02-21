import { useIntl } from 'umi';
import React, { useState } from 'react';

import ico1 from '@/assets/service/1.png';
import ico2 from '@/assets/service/2.png';
import ico3 from '@/assets/service/3.png';
import ico4 from '@/assets/service/4.png';
import ico5 from '@/assets/service/5.png';
import ico6 from '@/assets/service/6.png';
import ico7 from '@/assets/service/7.png';
import ico8 from '@/assets/service/8.png';
import ico9 from '@/assets/service/9.png';
import ico10 from '@/assets/service/10.png';
import ico1_active from '@/assets/service/1_active.png';
import ico2_active from '@/assets/service/2_active.png';
import ico3_active from '@/assets/service/3_active.png';
import ico4_active from '@/assets/service/4_active.png';
import ico5_active from '@/assets/service/5_active.png';
import ico6_active from '@/assets/service/6_active.png';
import ico7_active from '@/assets/service/7_active.png';
import ico8_active from '@/assets/service/8_active.png';
import ico9_active from '@/assets/service/9_active.png';
import ico10_active from '@/assets/service/10_active.png';
import we from '@/assets/service/we.png';

const datas = [
  { icon: ico1, icon_active: ico1_active, title: '社群活动', desc: 'desc1', translate: 'translate-x-36' },
  { icon: ico2, icon_active: ico2_active, title: '国际社群节', desc: 'desc2', translate: 'translate-x-2' },
  { icon: ico3, icon_active: ico3_active, title: '资本对接', desc: 'desc3', translate: '-translate-x-2' },
  { icon: ico4, icon_active: ico4_active, title: '工商注册服务', desc: 'desc4', translate: '-translate-x-1' },
  { icon: ico5, icon_active: ico5_active, title: '财务顾问服务', desc: 'desc5', translate: 'translate-x-32' },
  { icon: ico6, icon_active: ico6_active, title: '人才服务', desc: 'desc6', translate: '-translate-x-36' },
  { icon: ico7, icon_active: ico7_active, title: '创业服务', desc: 'desc7', translate: '-translate-x-5' },
  { icon: ico8, icon_active: ico8_active, title: '品牌推广服务', desc: 'desc8', translate: 'translate-x-10' },
  { icon: ico9, icon_active: ico9_active, title: 'wehome线上服务', desc: 'desc9', translate: 'translate-x-8' },
  { icon: ico10, icon_active: ico10_active, title: '法律和政策服务', desc: 'desc10', translate: '-translate-x-28' },
];

export default function IndexPage() {
  const intl = useIntl();
  const [curIndex, setCurIndex] = useState(0);

  const renderItems = start => {
    let i = start
    const items = []

    for(i; i < start + 5; i++) {
      const { icon, icon_active, title, translate } = datas[i]
      const isActive = curIndex == i

      items.push((index => {
        return (
          <div key={index} className={`lg:my-10 flex flex-col lg:flex-row items-center cursor-pointer lg:transform lg:${translate} ${start == 5 ? 'flex-col-reverse lg:flex-row-reverse mt-10 lg:mt-10' : 'mb-10 lg:mb-10'}`} onClick={() => {
            setCurIndex(index)
          }}>
            <span className={`text-white h-12 my-2 text-center lg:h-auto lg:my-0 ${isActive ? '' : 'opacity-50'}`}>
              {intl.formatMessage({
                id: `service.${title}`,
              })}
            </span>
            <img src={isActive ? icon_active : icon} className="max-w-20 max-h-20 mx-6" />
          </div>
        )
      })(i))
    }

    return (
      <div className="flex flex-row items-center lg:flex-col">
        {items}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-3">
      {renderItems(0)}
      <div className="w-2/3 mb-8 lg:mb-0 lg:w-full flex flex-col justify-center items-center">
        <img src={we} className="w-32 lg:w-64" />
        <span className="inline-block w-16 h-px border border-top border-current text-red bg-current my-8"></span>
        <span className="text-white text-center leading-7">
          {intl.formatMessage({
            id: `service.${datas[curIndex].desc}`,
          })}
        </span>
      </div>
      {renderItems(5)}
    </div>
  );
}
