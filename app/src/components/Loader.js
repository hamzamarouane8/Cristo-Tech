import React from 'react';
import Skeleton from '@ctkit/skeleton'

export const Loader = () => (
  <Skeleton height={180}>
    <rect x="272" y="22" rx="0" ry="0" width="105" height="99" radius={2}/>
    <rect x="103" y="33" rx="0" ry="0" width="1" height="15"/>

    <rect x="27" y="34" rx="0" ry="0" width="108" height="12"/>


    <rect x="27" y="60" rx="0" ry="0" width="182" height="3"/>
    <rect x="27" y="70" rx="0" ry="0" width="132" height="3"/>
    <rect x="27" y="80" rx="0" ry="0" width="132" height="3"/>

    <rect x="27" y="100" rx="0" ry="0" width="40" height="12"/>
  </Skeleton>
)
