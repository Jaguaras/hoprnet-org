import React, { forwardRef, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function AlertMsg({showActiveMsg}) {
  const { t } = useTranslation();

  return (
    <div className="area-Msg">
      <div
        className="icon-close link-special"
        onClick={() => showActiveMsg()}
      >
        <img src="/assets/icons/close.svg" alt="hopr logo" />
      </div>
      <div>
        <p>
          To be the first to know when the HOPR token launches and get other
          news about the project, subscribe to our{' '}
          <a
            href="https://hopr.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
          >
            newsletter,
          </a>{' '}
          or follow us on{' '}
          <a
            href="https://twitter.com/hoprnet"
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
          >
            Twitter
          </a>{' '}
          or{' '}
          <a
            href="https://t.me/hoprnet"
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
          >
            Telegram.
          </a>
        </p>
      </div>
    </div>
  );
}