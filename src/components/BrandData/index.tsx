import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import ico1 from '@/assets/brand/worker.png';
import ico2 from '@/assets/brand/garden.png';
import ico3 from '@/assets/brand/company.png';

const datas = [
  { icon: ico1, count: 'brand.200000+', desc: 'brand.园区白领' },
  { icon: ico2, count: 'brand.数十个', desc: 'brand.产业园区' },
  { icon: ico3, count: 'brand.5000+', desc: 'brand.园区企业' },
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section
      style={{
        background: '#E8E3E2',
      }}
      className="flex flex-row justify-between px-10 xl:px-24 2xl:px-48 h-44 sm:h-32"
    >
      <div className="container mx-auto py-5 text-left">
        <ScrollOverPack playScale="0.1" className="h-full">
          <QueueAnim leaveReverse className="flex flex-wrap">
            {datas.map((v, i) => (
              <div
                key={i}
                className="item flex w-1/2 sm:w-1/3 p-3 items-center justify-center"
              >
                <div className="icon">
                  <img
                    className="w-8 h-8  lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16"
                    src={v.icon}
                    alt=""
                  />
                </div>
                <div className="pl-3">
                  <div className="text-lg 2xl:text-2xl text-red">
                    {intl.formatMessage({
                      id: v.count,
                    })}
                  </div>
                  <div className="text-sm 2xl:text-base" style={{color: '#282828'}}>
                    {intl.formatMessage({
                      id: v.desc,
                    })}
                  </div>
                </div>
              </div>
            ))}
          </QueueAnim>
        </ScrollOverPack>
      </div>
    </section>
  );
}
