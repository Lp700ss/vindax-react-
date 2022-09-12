import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./log-in.module.css";

const LogIn = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.logInDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.helloCryptoExchanger}>
            Hello Crypto Exchanger
          </div>
          <div className={styles.pm19Jan2022}>4.45 pm 19 Jan 2022</div>
        </div>
        <TextField
          className={styles.frameTextField}
          sx={{ width: 406 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Search"
          size="medium"
          margin="none"
        />
        <Button
          className={styles.frameButton}
          sx={{ width: 115 }}
          variant="contained"
          color="primary"
        >{`Register `}</Button>
      </div>
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
          <div className={styles.frameDiv2}>
            <div className={styles.frameDiv3}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport6.svg"
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
            <div className={styles.frameDiv4}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-16.svg"
              />
              <div className={styles.groupDiv9}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv5}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-16.svg"
              />
              <div className={styles.groupDiv10}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv6}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-16.svg"
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
              <Button
                className={styles.groupButton}
                sx={{ width: 312 }}
                variant="contained"
                color="primary"
              >
                Official VinDAX API Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loginDiv}>
        <div className={styles.headercloseIconDiv}>
          <img className={styles.closeIcon} alt="" src="../close.svg" />
          <div className={styles.headerDiv}>
            <b className={styles.titleB}>Welcome back! Log in</b>
            <div className={styles.enterYourLoginAndPassword}>
              Enter your login and password bellow and complete your order.
            </div>
          </div>
        </div>
        <form className={styles.headercloseIconDiv}>
          <TextField
            className={styles.inputTextField}
            sx={{ width: 401.69232177734375 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Login/e-mail"
            size="medium"
            margin="none"
          />
          <div className={styles.passwordlinkDiv}>
            <div className={styles.inputDiv}>
              <div className={styles.labelDiv}>Password</div>
              <TextField
                className={styles.inputTextField1}
                color="primary"
                variant="outlined"
                type="text"
                size="medium"
                margin="none"
              />
            </div>
            <div className={styles.textButtonDiv}>
              <img
                className={styles.closeIcon}
                alt=""
                src="../arrow-back.svg"
              />
              <div className={styles.buttonDiv}>Forgot password?</div>
              <img
                className={styles.closeIcon}
                alt=""
                src="../arrow-forward.svg"
              />
            </div>
          </div>
        </form>
        <div className={styles.buttonDiv1}>
          <Button
            sx={{ width: 213.23077392578125 }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
        <div className={styles.registerLinkDiv}>
          <div className={styles.questionDiv}>You do not have an account?</div>
          <div className={styles.textButtonDiv1}>
            <img className={styles.closeIcon} alt="" src="../arrow-back1.svg" />
            <div className={styles.buttonDiv2}>Register</div>
            <img
              className={styles.closeIcon}
              alt=""
              src="../arrow-forward1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.frameDiv7}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv8}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv9}>
          <img className={styles.groupIcon} alt="" src="../group-129016.svg" />
        </div>
        <div className={styles.frameDiv10}>
          <img className={styles.groupIcon} alt="" src="../group-12902.svg" />
        </div>
        <div className={styles.frameDiv11}>
          <img className={styles.groupIcon} alt="" src="../group-129046.svg" />
        </div>
        <div className={styles.frameDiv12}>
          <img className={styles.groupIcon} alt="" src="../group-12905.svg" />
        </div>
        <div className={styles.frameDiv13}>
          <img className={styles.groupIcon} alt="" src="../group-12906.svg" />
        </div>
        <div className={styles.frameDiv14}>
          <img className={styles.groupIcon} alt="" src="../group-129036.svg" />
        </div>
        <div className={styles.frameDiv15}>
          <img className={styles.groupIcon6} alt="" src="../group-129076.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask6.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv5} />
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

export default LogIn;
