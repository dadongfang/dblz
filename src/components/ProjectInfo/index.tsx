import React from 'react';
import { setLocale, useIntl } from 'umi';

import logo from '@/assets/logo.png';

import './index.css';
// d7a7d3a8b9eac838cd67c712bf5800b8.png
export default () => {
  const intl = useIntl();
  return (
    <div className="container mx-auto relative">
      <div className="mt-4 mb-24 xl:hidden">
        <img
          className="w-full"
          src="https://wehome-image.oss-cn-shanghai.aliyuncs.com/d7a7d3a8b9eac838cd67c712bf5800b8.png"
          alt=""
        />
      </div>
      <div className="pbg hidden xl:block">
        <div className="dian dian1">
          <div className="dian-tit">
            {intl.formatMessage({
              id: 'section1.龙湖虹桥天街',
            })}
          </div>
        </div>
        <div className="dian dian2">
          <div className="dian-tit">
            {intl.formatMessage({
              id: 'section1.新华联购物中心',
            })}
          </div>
        </div>

        <div className="meto meto1">
          <div className="meto-tit">
            {intl.formatMessage({
              id: 'section1.虹桥火车站',
            })}
          </div>
        </div>

        <div className="dian dian3">
          <div className="dian-tit">
            <img src={logo} className="w-36" alt="" />
            <div className="text-gray-600 text-xs mt-1">
              {intl.formatMessage({
                id: 'header.长三角数字科技创新中心',
              })}
            </div>
          </div>
        </div>

        <div className="meto meto2">
          <div className="meto-tit">
            {intl.formatMessage({
              id: 'section1.虹桥2号',
            })}
            <br />
            {intl.formatMessage({
              id: 'section1.航站楼',
            })}
          </div>
        </div>

        <div className="dian dian4">
          <div className="dian-tit">
            {intl.formatMessage({
              id: 'section1.上海虹桥国际机场',
            })}
          </div>
        </div>
        <div className="dian dian5">
          <div className="dian-tit">
            {' '}
            {intl.formatMessage({
              id: 'section1.上海动物园',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
