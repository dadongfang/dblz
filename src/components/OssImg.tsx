import React from 'react';
const host = 'https://wehome-image-prd.oss-cn-hangzhou.aliyuncs.com/';

export default ({ src, ...rest }: { src: string }) => {
  return <img {...rest} src={host + src} />;
};
