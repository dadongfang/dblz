import React, { useState } from 'react';
import { setLocale, useIntl } from 'umi';

import { getSingle, addEvent } from '@/utils';

import regleft from '@/assets/regleft.png';
import regright from '@/assets/regright.png';

let popDialogIns = null;

export default ({ onSubmit }) => {
  const intl = useIntl();
  const [tel, setTel] = useState('');
  const [name, setName] = useState('');

  const popDialog = getSingle(function () {
    const popDiv = document.createElement('div');
    const popSpan = document.createElement('div');
    popSpan.innerHTML =
      '<div class="py-4 px-8 bg-white rounded-lg text-center">感谢您的预约，我们招商顾问将在<br />2小时内联系您，请保持手机畅通</div>';
    popSpan.className = 'p-4 rounded-lg';
    popSpan.style.backgroundColor = 'rgba(254, 94, 16, 0.52)';
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

  return (
    <div
      className="container mx-auto relative"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className=" z-10 p-3 rounded-lg"
        style={{
          backgroundColor: 'rgba(254, 94, 16, 0.52)',
        }}
      >
        <div
          className="bg-white px-10 py-12 w-full rounded-lg overflow-hidden"
          style={{
            backgroundColor: 'rgba(255,255,255,0.93)',
          }}
        >
          <div>
            <input
              className="rounded-sm p-2 text-center w-full"
              style={{
                border: '1px solid #D1DDDD',
              }}
              type="text"
              placeholder={intl.formatMessage({
                id: 'footer.请输入您的姓名',
              })}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="rounded-sm p-2 text-center w-full mt-4"
              style={{
                border: '1px solid #D1DDDD',
              }}
              type="number"
              placeholder={intl.formatMessage({
                id: 'footer.请输入您的手机号',
              })}
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (tel?.length !== 11) {
                  alert('手机号格式不正确');
                  return;
                }
                fetch(
                  'http://open-api.wehome.net.cn/standard_project/wehome/open_dobe_web_order_create',
                  {
                    method: 'POST',
                    body: JSON.stringify({
                      tel,
                      name,
                      room_id: 7319,
                    }),
                  },
                )
                  .then((r) => r.json())
                  .then((res) => {
                    onSubmit();
                    if (res.status !== 200) {
                      alert(res.msg);
                    } else {
                      if (popDialogIns) {
                        popDialogIns.style.display = 'flex';
                      } else {
                        popDialogIns = popDialog();
                      }

                      setName('');
                      setTel('');
                    }
                  });
              }}
              style={{ backgroundColor: '#FE5E10' }}
              className="text-center text-base 2xl:text-lg p-2 text-white w-full mt-7"
            >
              {intl.formatMessage({
                id: 'footer.立即免费预约参观',
              })}
            </button>
          </div>
          <div className="flex items-center justify-around text-center text-gray-400 mt-7 text-sm 2xl:text-base">
            <img className="w-6" src={regleft} alt="" />
            <span>
              {intl.formatMessage({
                id: 'footer.我们的专业顾问会尽快与您联系',
              })}
            </span>
            <img className="w-6" src={regright} alt="" />
          </div>
        </div>
      </div>
      <span
        style={{
          backgroundColor: 'rgba(254, 94, 16, 0.52)',
        }}
        className="w-8 h-8 block absolute -right-2.5 -top-2.5 border-2 border-current rounded-full text-white flex items-center justify-center text-3xl cursor-pointer"
        onClick={onSubmit}>×</span>
    </div>
  );
};
