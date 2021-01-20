import React, { forwardRef, useState, useEffect } from 'react';
import Countdown from '../atoms/countdown';
import useTranslation from 'next-translate/useTranslation';
import Modal from '../atoms/modal';
import HeroInfo from '../molecules/hero-info';

const Hero = forwardRef(
  ({ modePreSales, changeModePreSale, setVisibleNow }, ref) => {
    const [videoMobile, setVideoMobile] = useState(false);
    //false
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    const showModalActive = () => {
      setShowModal(!showModal);
    };

    const clickBtn = () => {
      console.log('Click');
    };

    useEffect(() => {
      if (window.matchMedia('screen and (min-width: 797px)').matches) {
        setVideoMobile(true);
      }
    }, {});

    return (
      <>
        <section ref={ref} className="section-hero">
          <HeroInfo />
          <div onClick={() => changeModePreSale()} className="changeBtn-style">
            <p>Show Pre-sale</p>
          </div>

          {videoMobile ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video "
              src="/assets/video/hero.mp4"
            ></video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video display-phone"
              src="/assets/video/hopr_Drone_Mobile.mp4"
            ></video>
          )}

          <div className="container">
            <div className="text-wrapper">
              {showModal ? (
                <Modal
                  showModal={showModal}
                  showModalActive={() => showModalActive()}
                />
              ) : (
                <>
                  <h4>{t('home:hero.subtitle')}</h4>

                  <Countdown />

                  {modePreSales ? (
                    <div className="preSales-btn  ">
                      <div>
                        <div
                          onClick={() => showModalActive()}
                          className="btn-small "
                        >
                          <span>{t('common:btn-comumnity')}</span>
                        </div>
                      </div>

                      <div>
                        <div className="btn-small ">
                          <span>{t('common:btn-public')}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div onClick={() => clickBtn()} className="btn-banner ">
                        <span>{t('common:getHorpFull')}</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default Hero;
