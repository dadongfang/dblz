import { setLocale, useIntl, getLocale } from 'umi';
import React, { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import logo_fixed from '@/assets/logo_dark.png';
import './index.css';
const menus = [
  { id: 'menu.首页' },
  { id: 'menu.项目介绍' },
  { id: 'menu.德必品牌' },
  { id: 'menu.区位交通' },
  { id: 'menu.设计理念' },
  { id: 'menu.共享配套' },
  { id: 'menu.增值服务' },
  { id: 'menu.租赁信息' },
  { id: 'menu.联系我们' },
];

const handleQuickJump = (id, e) => {
  if (e) {
    e.preventDefault();
  }
  const node = document.querySelector(id);

  // console.log('??', node, id);
  if (node) {
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

export default function IndexPage({ref1, fixed, active}) {
  const intl = useIntl();

  const [visible, setVisible] = useState(false);
  const [nowMenu, setNowMenu] = useState('');


  useEffect(() => {
    setNowMenu(menus[active].id)
  }, [active]);

  return (
    <header
      className={`header w-full top-0 px-4 py-4 lg:py-3 ${fixed ? 'fixed bg-white' : 'absolute bg-transparent'} z-50`}
      ref={ref1}
    >
      <div className="w-11/12 lg:w-5/6 mx-auto flex items-center justify-between lg:justify-self-auto text-black lg:text-white" style={fixed ? {color: '#222222'} : {}}>
        <div className="logo">
          <img className="w-40 2xl:w-44" src={fixed ? logo_fixed : logo} />
          {/* <div className="text-gray-400 text-xs xl:text-sm 2xl:text-sm mt-1">
            {intl.formatMessage({
              id: 'header.长三角数字科技创新中心',
            })}
          </div> */}
        </div>
        <div
          id="menu-wrap"
          className={visible ? 'menu-wrap active' : 'menu-wrap'}
        >
          <ul className={'header-menu'}>
            {menus.map((v, i) => (
              <li
                key={i}
                className={
                  nowMenu === v.id || (!i && !nowMenu)
                    ? 'menu-item active'
                    : 'menu-item'
                }
              >
                <a
                  href=""
                  onClick={(e) => {
                    setNowMenu(v.id);
                    setVisible(false);
                    handleQuickJump('#id' + i, e);
                  }}
                >
                  {intl.formatMessage({
                    id: v.id,
                  })}
                </a>
              </li>
            ))}

            {/* <li className="menu-item language">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setLocale('zh-CN', false);
                    setVisible(false);
                  }}
                  style={{ color: getLocale() === 'zh-CN' ? '#FE5E10' : '' }}
                >
                  中文
                </span>
                /
                <span
                  style={{ color: getLocale() === 'en-US' ? '#FE5E10' : '' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setLocale('en-US', false);
                    setVisible(false);
                  }}
                >
                  EN
                </span>
              </a>
            </li> */}
          </ul>
        </div>
        {/* <div className="header-phone hidden text-right items-center lg:flex">
          <div>
            <div
              className="text-xl xl:text-2xl font-bold"
              style={{ color: '#00C9D0' }}
            >
              021-62335008
            </div>
            <div className="text-xs">
              {intl.formatMessage({
                id: 'footer.上海市闵行区丰虹路199号',
              })}
            </div>
          </div>
        </div> */}
        <div
          onClick={() => {
            setVisible(!visible);
          }}
          className="lg:hidden xl:hidden 2xl:hidden text-white"
          style={fixed ? {color: '#222222'} : {}}
        >
          <svg
            className="stroke-current"
            viewBox="80 80 896 896"
            focusable="false"
            data-icon="menu"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
