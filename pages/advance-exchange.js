import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advance-exchange.module.css";

const AdvanceExchange = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.advanceExchangeDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.helloCryptoExchanger}>
            Hello Crypto Exchanger
          </div>
          <div className={styles.pm19Jan2022}>4.45 pm 19 Jan 2022</div>
        </div>
        <div className={styles.frameDiv2}>
          <img
            className={styles.searchNormalIcon}
            alt=""
            src="../searchnormal.svg"
          />
          <div className={styles.searchDiv}>Search</div>
        </div>
        <Button
          className={styles.frameButton}
          sx={{ width: 115 }}
          variant="contained"
          color="primary"
        >
          {" "}
          Login
        </Button>
        <Button
          className={styles.frameButton1}
          sx={{ width: 115 }}
          variant="contained"
          color="primary"
        >{`Register `}</Button>
      </div>
      <div className={styles.frameDiv3} />
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv2}>
            <div className={styles.groupDiv3}>
              <div className={styles.aBOUTVINDAXDiv}>
                <p className={styles.aBOUTVINDAXP}>ABOUT VINDAX</p>
              </div>
              <div className={styles.aboutUsAnnouncementsFAQsSu}>
                <p className={styles.aBOUTVINDAXP}>About Us</p>
                <p className={styles.aBOUTVINDAXP}>Announcements</p>
                <p className={styles.aBOUTVINDAXP}>FAQs</p>
                <p className={styles.aBOUTVINDAXP}>Support</p>
                <p className={styles.careersP}>Careers</p>
              </div>
            </div>
            <div className={styles.groupDiv4}>
              <div className={styles.component1DefaultDiv}>
                <div className={styles.tRADEDiv}>TRADE</div>
                <div className={styles.aPIFeesTradingFeesRuleI}>
                  <p className={styles.aBOUTVINDAXP}>API</p>
                  <p className={styles.aBOUTVINDAXP}>Fees</p>
                  <p className={styles.aBOUTVINDAXP}>{`Trading Fees & Rule
`}</p>
                  <p className={styles.aBOUTVINDAXP}>{`IOS & Android App
`}</p>
                  <p className={styles.aBOUTVINDAXP}>Apply for Listing</p>
                  <p className={styles.careersP}>Apply for Launchpad(IEO)</p>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.privacyTermsOfService}>
                <p className={styles.aBOUTVINDAXP}>Privacy</p>
                <p className={styles.careersP}>Terms Of Service</p>
              </div>
              <div className={styles.legalDiv}>Legal</div>
            </div>
          </div>
          <img
            className={styles.iPhone12MockupFrontView1}
            alt=""
            src="../iphone-12-mockup-front-view-11@2x.png"
          />
          <img
            className={styles.iPhone12Pro61}
            alt=""
            src="../iphone-12-pro-6-11@2x.png"
          />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv4}>
            <div className={styles.frameDiv5}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport10.svg"
              />
              <div className={styles.groupDiv8}>
                <div className={styles.gotAProblemJustGetInTou}>
                  <p className={styles.aBOUTVINDAXP}>
                    Got a problem? Just get in touch.
                  </p>
                  <p className={styles.careersP}>
                    {" "}
                    Our support team is available 24/7.
                  </p>
                </div>
                <div className={styles.supportDiv}>24 / 7 Support</div>
              </div>
            </div>
            <div className={styles.frameDiv6}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-111.svg"
              />
              <div className={styles.groupDiv9}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv7}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-111.svg"
              />
              <div className={styles.groupDiv10}>
                <Button
                  className={styles.vinDAXIsGlobalJoinTheDis}
                  sx={{ width: 209 }}
                  variant="contained"
                  color="primary"
                >
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </Button>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv8}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-111.svg"
              />
              <div className={styles.groupDiv11}>
                <div className={styles.vinDAXIsGlobalJoinTheDis1}>
                  <p
                    className={styles.aBOUTVINDAXP}
                  >{`VinDAX is global. Join the discussion `}</p>
                  <p className={styles.careersP}>
                    in our worldwide communities.
                  </p>
                </div>
                <div className={styles.careersDiv}>
                  <p className={styles.aBOUTVINDAXP}>Careers</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.getInTouchStayInTouch}>
            Get in touch. Stay in touch.
          </div>
        </div>
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.tradeAnywhereDiv}>Trade Anywhere</div>
        <div className={styles.groupDiv13}>
          <img
            className={styles.iPhone12MockupFrontView11}
            alt=""
            src="../iphone-12-mockup-front-view-1@2x.png"
          />
          <img
            className={styles.iPhone12Pro611}
            alt=""
            src="../iphone-12-pro-6-1@2x.png"
          />
          <div className={styles.groupDiv14}>
            <div className={styles.groupDiv15}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.groupDiv16}>
                <div className={styles.theVinDAXCryptoTradingExpe}>
                  <p
                    className={styles.theVinDAXCrypto}
                  >{`The VinDAX crypto trading experience, tailor-made for your `}</p>
                  <p
                    className={styles.careersP}
                  >{`Windows or MacOS device.    `}</p>
                </div>
                <div className={styles.desktopDiv}>
                  <b>Desktop</b>
                  <span className={styles.span}></span>
                </div>
                <img
                  className={styles.iconAWindow2}
                  alt=""
                  src="../iconawindow-2@2x.png"
                />
                <img
                  className={styles.iconALinux1}
                  alt=""
                  src="../iconalinux-1@2x.png"
                />
                <img
                  className={styles.iconAMacos2}
                  alt=""
                  src="../iconamacos-2@2x.png"
                />
              </div>
            </div>
            <div className={styles.groupDiv17}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.groupDiv18}>
                <div className={styles.mobileDownloadTheVinDAXMob}>
                  <p className={styles.aBOUTVINDAXP}>
                    <span>
                      <b className={styles.mobile}>Mobile</b>
                    </span>
                    <span className={styles.span1}>
                      <span></span>
                    </span>
                  </p>
                  <p className={styles.downloadTheVinDAXMobileCry}>
                    <span className={styles.span1}>
                      <span>
                        Download the VinDAX mobile crypto trading app today.
                      </span>
                    </span>
                  </p>
                </div>
                <img
                  className={styles.iconAMacos1}
                  alt=""
                  src="../iconamacos-1@2x.png"
                />
                <img
                  className={styles.iconAWindow1}
                  alt=""
                  src="../iconawindow-1@2x.png"
                />
                <img
                  className={styles.iconAQrcode1}
                  alt=""
                  src="../iconaqrcode-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.groupDiv19}>
              <div className={styles.aPITheVinDAXCryptoTrading}>
                <p className={styles.aBOUTVINDAXP}>
                  <b>API</b>
                </p>
                <p className={styles.theVinDAXCryptoTradingExpe1}>
                  <span className={styles.theVinDAXCrypto1}>
                    The VinDAX crypto trading experience, tailor-made for your
                    Windows
                  </span>
                </p>
                <p className={styles.careersP}>
                  <span className={styles.theVinDAXCrypto1}>
                    {" "}
                    or MacOS device.
                  </span>
                </p>
              </div>
              <div className={styles.groupDiv20}>
                <div className={styles.rectangleDiv4} />
                <div className={styles.officialVinDAXAPIDocumentat}>
                  Official VinDAX API Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.screenshot167Icon}
        alt=""
        src="../screenshot-167@2x.png"
      />
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.frameDiv9}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv10}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv11}>
          <img className={styles.groupIcon} alt="" src="../group-12901.svg" />
        </div>
        <div className={styles.frameDiv12}>
          <img className={styles.groupIcon} alt="" src="../group-12902.svg" />
        </div>
        <div className={styles.frameDiv13}>
          <img className={styles.groupIcon} alt="" src="../group-1290411.svg" />
        </div>
        <div className={styles.frameDiv14}>
          <img className={styles.groupIcon} alt="" src="../group-12905.svg" />
        </div>
        <div className={styles.frameDiv15}>
          <img className={styles.groupIcon} alt="" src="../group-12906.svg" />
        </div>
        <div className={styles.frameDiv16}>
          <img className={styles.groupIcon} alt="" src="../group-129036.svg" />
        </div>
        <div className={styles.frameDiv17}>
          <img className={styles.groupIcon6} alt="" src="../group-12907.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask11.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv6} />
        <img
          className={styles.toxyExchangeFinalLogo}
          alt=""
          src="../toxy-exchange-final-logo@2x.png"
          onClick={onToxyExchangeFinalLogoClick}
        />
      </div>
    </div>
  );
};

export default AdvanceExchange;
