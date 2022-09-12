import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./launchpad.module.css";

const Launchpad = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.launchpadDiv}>
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
      <div className={styles.vinDAXLaunchpadDiv}>VinDAX Launchpad</div>
      <div className={styles.aTokenLaunchPlatformForTr}>
        A token launch platform for transformative projects
      </div>
      <Button className={styles.button} variant="contained" color="secondary">
        Apply to Launch
      </Button>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv7}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv21}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv28}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv35}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-4224@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../ellipse-55@2x.png"
          />
          <b className={styles.gPAYETHSession}>GPAY - ETH Session</b>
          <div className={styles.groupDiv2}>
            <div className={styles.div}>2022-08-11 12:30:00</div>
            <div className={styles.sTARTTIMEDiv}>START TIME</div>
            <div className={styles.gPAYDiv}>700,000 GPAY</div>
            <div className={styles.sESSIONSUPPLYDiv}>SESSION SUPPLY</div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.openingDiv}>Opening</div>
          </div>
        </div>
      </div>
      <div className={styles.div18}>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="../mask-group1@2x.png"
        />
        <img
          className={styles.socialMediaInstagramDigitalIcon}
          alt=""
          src="../socialmediainstagramdigitalmarketingconcept3drendering-1@2x.png"
        />
        <div className={styles.welcomeBackToTheVinDAXCom}>
          <span className={styles.welcomeBackToContainer}>
            <p className={styles.blankLineP}>&nbsp;</p>
            <p className={styles.blankLineP}>
              Welcome back to the VinDAX communication,
            </p>
            <p className={styles.weMissedYou}>we missed You!</p>
          </span>
        </div>
        <div
          className={styles.communityCustomerService}
        >{`Community & Customer Service
`}</div>
        <img className={styles.groupIcon} alt="" src="../group-9661.svg" />
      </div>
      <div className={styles.groupDiv42}>
        <div className={styles.groupDiv43}>
          <div className={styles.rectangleDiv18} />
          <div className={styles.groupDiv44}>
            <div className={styles.groupDiv45}>
              <div className={styles.aBOUTVINDAXDiv}>
                <p className={styles.aBOUTVINDAXP}>ABOUT VINDAX</p>
              </div>
              <div className={styles.aboutUsAnnouncementsFAQsSu}>
                <p className={styles.aBOUTVINDAXP}>About Us</p>
                <p className={styles.aBOUTVINDAXP}>Announcements</p>
                <p className={styles.aBOUTVINDAXP}>FAQs</p>
                <p className={styles.aBOUTVINDAXP}>Support</p>
                <p className={styles.weMissedYou}>Careers</p>
              </div>
            </div>
            <div className={styles.groupDiv46}>
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
                  <p className={styles.weMissedYou}>Apply for Launchpad(IEO)</p>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv48}>
              <div className={styles.privacyTermsOfService}>
                <p className={styles.aBOUTVINDAXP}>Privacy</p>
                <p className={styles.weMissedYou}>Terms Of Service</p>
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
        <div className={styles.groupDiv49}>
          <div className={styles.rectangleDiv19} />
          <div className={styles.frameDiv22}>
            <div className={styles.frameDiv23}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport9.svg"
              />
              <div className={styles.groupDiv50}>
                <div className={styles.gotAProblemJustGetInTou}>
                  <p className={styles.aBOUTVINDAXP}>
                    Got a problem? Just get in touch.
                  </p>
                  <p className={styles.weMissedYou}>
                    {" "}
                    Our support team is available 24/7.
                  </p>
                </div>
                <div className={styles.supportDiv}>24 / 7 Support</div>
              </div>
            </div>
            <div className={styles.frameDiv24}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-19.svg"
              />
              <div className={styles.groupDiv51}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv25}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-19.svg"
              />
              <div className={styles.groupDiv52}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv26}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-19.svg"
              />
              <div className={styles.groupDiv53}>
                <div className={styles.vinDAXIsGlobalJoinTheDis1}>
                  <p
                    className={styles.aBOUTVINDAXP}
                  >{`VinDAX is global. Join the discussion `}</p>
                  <p className={styles.weMissedYou}>
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
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv20} />
          <div className={styles.frameDiv27}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv28}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv29}>
          <img className={styles.groupIcon1} alt="" src="../group-129019.svg" />
        </div>
        <div className={styles.frameDiv30}>
          <img className={styles.groupIcon1} alt="" src="../group-12902.svg" />
        </div>
        <div className={styles.frameDiv31}>
          <img className={styles.groupIcon1} alt="" src="../group-129049.svg" />
        </div>
        <div className={styles.frameDiv32}>
          <img className={styles.groupIcon1} alt="" src="../group-12905.svg" />
        </div>
        <div className={styles.frameDiv33}>
          <img className={styles.groupIcon1} alt="" src="../group-12906.svg" />
        </div>
        <div className={styles.frameDiv34}>
          <img className={styles.groupIcon1} alt="" src="../group-129036.svg" />
        </div>
        <div className={styles.frameDiv35}>
          <img className={styles.groupIcon7} alt="" src="../group-129079.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask9.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv21} />
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

export default Launchpad;
