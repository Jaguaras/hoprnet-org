import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeRoadMap = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      date: 'Nov 2019',
      title: 'Idea',
      about:
        'HOPR’s founders develop a decentralized approach to the urgent issue of metadata privacy. HOPR is born!',
      linkA: 'https://hoprnet.org/book-of-hopr',
      linkTextA: 'Book,',
      linkB: '#',
      linkTextB: 'Technical White Paper',
    },
    {
      date: 'Apr 2020',
      title: 'Funding and Launch ',
      about:
        'HOPR officially launches, concluding a $1m seed funding round led by Binance. The HOPR Association is founded. ',

      linkA: '#',
      linkTextA: 'Binance',
    },
    {
      date: 'Jul 2020',
      title: 'HOPR Hardware Node',
      about:
        'The HOPR Hardware Node launches, allowing users to run a dedicated HOPR device from their home.',
      linkA: 'https://ava.do/checkout/hopr',
      linkTextA: 'Shop,',
      linkB: 'https://github.com/hoprnet',
      linkTextB: 'gitHub',
    },
    {
      date: 'Nov 2020',
      title: 'Testing and Community',
      about:
        'A series of popular incentivized and gamified testnets grow the community and network to over 2000 nodes.',
      linkA: 'https://medium.com/hoprnet/hopr-introduces-first-proof-of-relay-data-privacy-mechanism-to-run-on-matic-d45bb5624e5b',
      linkTextA: 'Matic,',
      linkB: 'https://www.xdaichain.com/',
      linkTextB: 'xDai,',
      linkC: 'https://www.binance.org/en/smartChain',
      linkTextC: 'BSC',
    },
    {
      date: 'Q1 2021',
      title: 'Jungfrau Release',
      about:
        'The HOPR Jungfrau release is the first feature complete version of the HOPR node & HOPR token.',
      linkA: '#',
      linkTextA: 'SalePage',
    },
    {
      date: 'Q2 2021',
      title: 'Eiger Release',
      about:
        'HOPR’s Eiger release introduces cover traffic and provides increased incentives for relay node operators.',
      linkA: '#',
      linkTextA: 'Blogpost',
    },
    {
      date: 'Q2 2021',
      title: 'Launch HOPR DAO ',
      about:
        'HOPR’s focus on decentralized community enabling governance is solidified with the launch of the project-wide HOPR DAO.',
      linkA: '#',
      linkTextA: 'DecenGov',
    },
    {
      date: 'Q2 2021',
      title: 'Launch of Ecosystem ',
      about:
        'A robust API allows others to build metadata-private dApps and services on top of the HOPR protocol.',
      linkA: '#',
      linkTextA: 'Blogpost',
    },
    {
      date: 'Q4 2021',
      title: 'Token-based Voting',
      about:
        'All token holders will be eligible to vote in the first General Assembly of the HOPR Association. ',
      linkA: '#',
      linkTextA: 'Blogpost',
    },
  ];

  return (
    <>
      <section ref={ref} id="roadMap" className="section-roadMap">
        <h2>{t('home:roadMap.title')}</h2>
        <div className="container">
          {data.map((e, index) => {
            const {
              date,
              title,
              about,
              linkA,
              linkTextA,
              linkB,
              linkTextB,
              linkC,
              linkTextC,
            } = e;
            return (
              <div key={index} className="road-map-element">
                <div>
                  <p className="styleDate">{date}</p>
                </div>
                <div className="line-help">
                  <span></span>
                </div>
                <div className="area-info">
                  <h4>{title}</h4>
                  <p>{about}</p>
                  <div className="links-exp">
                    (<a href={linkA}>{linkTextA}</a>
                    {linkB ? (
                      <>
                        {' '}
                        <a href={linkB}>{linkTextB}</a>
                      </>
                    ) : (
                      ''
                    )}
                    {linkC ? (
                      <>
                        {' '}
                        <a href={linkC}>{linkTextC}</a>
                      </>
                    ) : (
                      ''
                    )}
                    )
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
});

export default HomeRoadMap;
