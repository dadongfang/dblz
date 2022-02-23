import { useIntl } from 'umi';
import React, { useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { ossImg } from '@/utils';

const ico1 = ossImg('04aa728d6438dc3c175bb71265ee5cf9.png');
const ico2 = ossImg('5ad817b4cf509732b60af892cebd1b5c.png');
const ico3 = ossImg('40a28ca68f143fa282254aa70cd25657.png');
const ico4 = ossImg('005fb7326ba6775778517fdc941d39fc.png');
import active from '@/assets/share/active.png';
// import { url } from 'inspector';

const datas = [
  { icon: ico1, desc: '共享空间入口' },
  { icon: ico2, desc: '精品咖啡' },
  { icon: ico3, desc: '休闲书屋' },
  { icon: ico4, desc: '空中花园' }
];

export default function IndexPage() {
  const intl = useIntl();
  const [curIndex, setCurIndex] = useState(0);

  return (
    <ScrollOverPack playScale="0.1" className="h-full">
      <QueueAnim delay={300} type="bottom" leaveReverse className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {
          datas.map((data, index) => {
            const { icon, desc } = data
            const isActive = curIndex == index

            return (
              <div key={index} className={`relative cursor-pointer ${isActive ? 'lg:col-span-2' : ''}`} onClick={() => setCurIndex(index)}>
                <img src={icon} className="min-h-full min-w-full object-cover" />
                <div
                  className="absolute inset-0 text-white flex flex-row justify-between pt-6 px-8 bg-top bg-no-repeat bg-contain tracking-widest font-black"
                  style={{
                    backgroundColor: isActive ? 'transparent' : 'rgba(55, 40, 32, 1)',
                    backgroundImage: isActive ? `url(${active})` : '',
                    opacity: isActive ? '1' : '0.63'
                  }}
                >
                  <span className={`${isActive ? 'text-xl' : ''}`}>
                    {intl.formatMessage({
                      id: `share.${desc}`,
                    })}
                  </span>
                  <span>
                    <font className={`${isActive ? 'text-xl' : ''}`}>{`0${index + 1}`}</font>{`/0${datas.length}`}
                  </span>
                </div>
              </div>
            )
          })
        }
      </QueueAnim>
    </ScrollOverPack>
  );
}
