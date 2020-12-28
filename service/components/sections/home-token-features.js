import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeTokenFeatures = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const dataInfo = [
    {
      img: "/assets/icons/icon-pay.svg",
      title: "home:features.pay",
      paragraph: "home:features.payMain",
    },
    {
      img: "/assets/icons/icon-stake.svg",
      title: "home:features.stake",
      paragraph: "home:features.stakeMain",
    },
    {
      img: "/assets/icons/icon-vote.svg",
      title: "home:features.vote",
      paragraph: "home:features.voteMain",
    },
  ];

  return (
    <>
      <section
        ref={ref}
        id="TOKEN-FEATURES"
        className="section-token-fea padding-section-aux"
      >
        <div className="container">
          <div className="container-center-center">
            <h2>{t("home:features.title")}</h2>
          </div>
          <div className="container-items">
            <div className="element-boxing">
              {dataInfo.map((e, index) => {
                const { img, title, paragraph } = e;
                return (
                  <div key={index} className="item">
                    <div className="icon-toke-show">
                      <img src={img} alt={t(title)} />
                    </div>
                    <div className="info-cont">
                      <h4>{t(title)}</h4>
                      <p>{t(paragraph)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeTokenFeatures;
