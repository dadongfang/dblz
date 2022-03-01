import { setLocale, useIntl } from 'umi';

import './index.css';
export default function IndexPage({ title1, align, color = 'red' }) {
  const intl = useIntl();
  return (
    <div className={align === 'left' ? 'text-left' : 'text-center'}>
      {title1 ? (
        <div className={align + ' section-title ' + color}>{title1}</div>
      ) : (
        false
      )}
    </div>
  );
}
