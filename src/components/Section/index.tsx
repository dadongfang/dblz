import { setLocale, useIntl } from 'umi';
import SectionTitle from '../SectionTitle';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];
export default function IndexPage({
  desc = '',
  children,
  className = '',
  title1,
  full = false,
  hrefid = '',
  width='',
  ...rest
}) {
  const intl = useIntl();
  return (
    <>
      <a id={hrefid} className="anchor"></a>
      <section className={className} {...rest}>
        <div className={full ? 'w-full' : `container mx-auto ${width}`}>
          <SectionTitle title1={title1} align="center" />
          {desc ? <div className="text-center">{desc}</div> : false}
          {children}
        </div>
      </section>
    </>
  );
}
