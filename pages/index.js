import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const HomePage = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.homePageDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.recentActivitiesDiv}>Recent Activities</div>
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.coinsDiv}>
              <img className={styles.shapeIcon} alt="" src="../shape.svg" />
            </div>
            <div className={styles.bitcoinDiv}>Bitcoin</div>
          </div>
          <div className={styles.aMDiv}>10:45:16 AM</div>
          <div className={styles.div}>+1545,00</div>
          <img className={styles.growthYesIcon} alt="" src="../growthyes.svg" />
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <div className={styles.coinsDiv1}>
              <img className={styles.shapeIcon1} alt="" />
              <img className={styles.unionIcon} alt="" src="../union.svg" />
            </div>
            <div className={styles.ethereumDiv}>Ethereum</div>
          </div>
          <div className={styles.aMDiv}>09:15:31 AM</div>
          <div className={styles.div1}>+5649,00</div>
          <img className={styles.growthNoIcon} alt="" src="../growthno.svg" />
        </div>
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv4}>
            <div className={styles.coinsDiv2}>
              <img className={styles.shapeIcon1} alt="" />
              <img className={styles.shapeIcon3} alt="" src="../shape1.svg" />
            </div>
            <div className={styles.lTCDiv}>LTC</div>
          </div>
          <div className={styles.aMDiv}>09:01:12 AM</div>
          <div className={styles.div}>+4547,00</div>
          <img
            className={styles.growthYesIcon}
            alt=""
            src="../growthyes1.svg"
          />
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.maskGroupDiv}>
          <div className={styles.maskGroupDiv1}>
            <div className={styles.graphDiv}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group.svg"
              />
              <img className={styles.pinIcon} alt="" src="../pin.svg" />
              <b className={styles.timeB}>3:59AM</b>
            </div>
            <div className={styles.sellDiv}>
              <img className={styles.oval7Icon} alt="" src="../oval-7.svg" />
              <div className={styles.div4}>$376</div>
            </div>
            <div className={styles.div5}>7.2141,997.5 (25%)</div>
            <div className={styles.dollarDiv}>Market Overview</div>
            <div className={styles.frameDiv7}>
              <div className={styles.timeDiv}>
                <div className={styles.aLLDiv}>ALL</div>
              </div>
              <div className={styles.timeDiv1}>
                <div className={styles.aLLDiv}>1M</div>
              </div>
              <div className={styles.timeDiv1}>
                <div className={styles.aLLDiv}>6M</div>
              </div>
              <div className={styles.timeDiv1}>
                <div className={styles.aLLDiv}>1Y</div>
              </div>
              <div className={styles.timeDiv4}>
                <div className={styles.yTDDiv}>YTD</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sellDiv1}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.eTHB}>Sell</b>
          <img className={styles.oval6Icon} alt="" src="../oval-6.svg" />
        </div>
        <div className={styles.buyDiv}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.bTC}>Buy</b>
          <img className={styles.oval6Icon1} alt="" src="../oval-61.svg" />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.frameDiv8}>
          <div className={styles.frameDiv9}>
            <div className={styles.coinsDiv}>
              <img className={styles.shapeIcon} alt="" src="../shape2.svg" />
            </div>
            <div className={styles.frameDiv10}>
              <div className={styles.frameDiv11}>
                <div className={styles.bTCDiv}>BTC</div>
                <img className={styles.icons} alt="" src="../icons.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div6}>9784.79</div>
            </div>
            <div className={styles.frameDiv12}>
              <img className={styles.icons1} alt="" src="../icons1.svg" />
              <div className={styles.div7}>
                <span>7.2%</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
          <img className={styles.growthIcon} alt="" src="../growth.svg" />
        </div>
        <div className={styles.frameDiv13}>
          <div className={styles.frameDiv9}>
            <div className={styles.coinsDiv2}>
              <img className={styles.shapeIcon1} alt="" />
              <img className={styles.shapeIcon3} alt="" src="../shape3.svg" />
            </div>
            <div className={styles.frameDiv10}>
              <div className={styles.frameDiv11}>
                <div className={styles.bTCDiv}>LTC</div>
                <img className={styles.icons} alt="" src="../icons.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div6}>8741.19</div>
            </div>
            <div className={styles.frameDiv17}>
              <img className={styles.icons1} alt="" src="../icons3.svg" />
              <div className={styles.div7}>{`5.2% `}</div>
            </div>
          </div>
          <img className={styles.growthIcon1} alt="" src="../growth1.svg" />
        </div>
        <div className={styles.frameDiv18}>
          <div className={styles.frameDiv9}>
            <div className={styles.coinsDiv1}>
              <img className={styles.shapeIcon1} alt="" />
              <img className={styles.unionIcon} alt="" src="../union1.svg" />
            </div>
            <div className={styles.frameDiv10}>
              <div className={styles.frameDiv11}>
                <div className={styles.bTCDiv}>ETM</div>
                <img className={styles.icons} alt="" src="../icons.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div6}>4567.16</div>
            </div>
            <div className={styles.frameDiv12}>
              <img className={styles.icons1} alt="" src="../icons1.svg" />
              <div className={styles.div7}>
                <span>6.5%</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
          <img className={styles.growthIcon} alt="" src="../vector-124.svg" />
        </div>
        <div className={styles.frameDiv23}>
          <div className={styles.frameDiv9}>
            <div className={styles.coinsDiv6}>
              <img
                className={styles.combinedShapeIcon}
                alt=""
                src="../combined-shape.svg"
              />
            </div>
            <div className={styles.frameDiv10}>
              <div className={styles.frameDiv11}>
                <div className={styles.bTCDiv}>BNB</div>
                <img className={styles.icons} alt="" src="../icons.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div6}>6547.79</div>
            </div>
            <div className={styles.frameDiv12}>
              <img className={styles.icons1} alt="" src="../icons1.svg" />
              <div className={styles.div7}>
                <span>9.5%</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
          <img className={styles.growthIcon} alt="" src="../vector-1241.svg" />
        </div>
      </div>
      <div className={styles.frameDiv28}>
        <div className={styles.helloCryptoExchanger}>
          Hello Crypto Exchanger
        </div>
        <div className={styles.pm19Jan2022}>4.45 pm 19 Jan 2022</div>
      </div>
      <div className={styles.frameDiv29}>
        <img
          className={styles.searchNormalIcon}
          alt=""
          src="../searchnormal.svg"
        />
        <div className={styles.searchDiv}>Search</div>
      </div>
      <div className={styles.rectangleDiv3} />
      <div className={styles.groupDiv1}>
        <div className={styles.tradeAnywhereDiv}>Trade Anywhere</div>
        <div className={styles.groupDiv2}>
          <img
            className={styles.iPhone12MockupFrontView1}
            alt=""
            src="../iphone-12-mockup-front-view-1@2x.png"
          />
          <img
            className={styles.iPhone12Pro61}
            alt=""
            src="../iphone-12-pro-6-1@2x.png"
          />
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.groupDiv5}>
                <div className={styles.theVinDAXCryptoTradingExpe}>
                  <p
                    className={styles.theVinDAXCrypto}
                  >{`The VinDAX crypto trading experience, tailor-made for your `}</p>
                  <p
                    className={styles.windowsOrMacOS}
                  >{`Windows or MacOS device.    `}</p>
                </div>
                <div className={styles.desktopDiv}>
                  <b>Desktop</b>
                  <span className={styles.span3}></span>
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
            <div className={styles.groupDiv6}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.groupDiv7}>
                <div className={styles.mobileDownloadTheVinDAXMob}>
                  <p className={styles.mobileP}>
                    <span>
                      <b className={styles.mobile}>Mobile</b>
                    </span>
                    <span className={styles.span4}>
                      <span></span>
                    </span>
                  </p>
                  <p className={styles.downloadTheVinDAXMobileCry}>
                    <span className={styles.span4}>
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
            <div className={styles.groupDiv8}>
              <div className={styles.aPITheVinDAXCryptoTrading}>
                <p className={styles.mobileP}>
                  <b>API</b>
                </p>
                <p className={styles.theVinDAXCryptoTradingExpe1}>
                  <span className={styles.theVinDAXCrypto1}>
                    The VinDAX crypto trading experience, tailor-made for your
                    Windows
                  </span>
                </p>
                <p className={styles.windowsOrMacOS}>
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
      <div className={styles.div14}>
        <img
          className={styles.maskGroupIcon1}
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
            <p className={styles.windowsOrMacOS}>we missed You!</p>
          </span>
        </div>
        <div
          className={styles.communityCustomerService}
        >{`Community & Customer Service
`}</div>
        <img className={styles.groupIcon} alt="" src="../group-966.svg" />
      </div>
      <div className={styles.groupDiv9}>
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv11}>
            <div className={styles.groupDiv12}>
              <div className={styles.aBOUTVINDAXDiv}>
                <p className={styles.mobileP}>ABOUT VINDAX</p>
              </div>
              <div className={styles.aboutUsAnnouncementsFAQsSu}>
                <p className={styles.mobileP}>About Us</p>
                <p className={styles.mobileP}>Announcements</p>
                <p className={styles.mobileP}>FAQs</p>
                <p className={styles.mobileP}>Support</p>
                <p className={styles.windowsOrMacOS}>Careers</p>
              </div>
            </div>
            <div className={styles.groupDiv13}>
              <div className={styles.component1DefaultDiv}>
                <div className={styles.tRADEDiv}>TRADE</div>
                <div className={styles.aPIFeesTradingFeesRuleI}>
                  <p className={styles.mobileP}>API</p>
                  <p className={styles.mobileP}>Fees</p>
                  <p className={styles.mobileP}>{`Trading Fees & Rule
`}</p>
                  <p className={styles.mobileP}>{`IOS & Android App
`}</p>
                  <p className={styles.mobileP}>Apply for Listing</p>
                  <p className={styles.windowsOrMacOS}>
                    Apply for Launchpad(IEO)
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv15}>
              <div className={styles.privacyTermsOfService}>
                <p className={styles.mobileP}>Privacy</p>
                <p className={styles.windowsOrMacOS}>Terms Of Service</p>
              </div>
              <div className={styles.legalDiv}>Legal</div>
            </div>
          </div>
          <img
            className={styles.iPhone12MockupFrontView11}
            alt=""
            src="../iphone-12-mockup-front-view-11@2x.png"
          />
          <img
            className={styles.iPhone12Pro611}
            alt=""
            src="../iphone-12-pro-6-11@2x.png"
          />
        </div>
        <div className={styles.groupDiv16}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.frameDiv30}>
            <div className={styles.frameDiv31}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport.svg"
              />
              <div className={styles.groupDiv17}>
                <div className={styles.gotAProblemJustGetInTou}>
                  <p className={styles.mobileP}>
                    Got a problem? Just get in touch.
                  </p>
                  <p className={styles.windowsOrMacOS}>
                    {" "}
                    Our support team is available 24/7.
                  </p>
                </div>
                <div className={styles.supportDiv}>24 / 7 Support</div>
              </div>
            </div>
            <div className={styles.frameDiv32}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-1.svg"
              />
              <div className={styles.groupDiv18}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv33}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-1.svg"
              />
              <div className={styles.groupDiv19}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv34}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-1.svg"
              />
              <div className={styles.groupDiv20}>
                <div className={styles.vinDAXIsGlobalJoinTheDis1}>
                  <p
                    className={styles.mobileP}
                  >{`VinDAX is global. Join the discussion `}</p>
                  <p className={styles.windowsOrMacOS}>
                    in our worldwide communities.
                  </p>
                </div>
                <div className={styles.careersDiv}>
                  <p className={styles.mobileP}>Careers</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.getInTouchStayInTouch}>
            Get in touch. Stay in touch.
          </div>
        </div>
      </div>
      <Button
        className={styles.frameButton}
        sx={{ width: 115 }}
        variant="outlined"
        color="primary"
      >
        {" "}
        Login
      </Button>
      <Button
        className={styles.frameButton1}
        sx={{ width: 115 }}
        variant="outlined"
        color="primary"
      >{`Register `}</Button>
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.frameDiv35}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv36}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv37}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-12901.svg"
          />
        </div>
        <div className={styles.frameDiv38}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-12902.svg"
          />
        </div>
        <div className={styles.frameDiv39}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-12904.svg"
          />
        </div>
        <div className={styles.frameDiv40}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-12905.svg"
          />
        </div>
        <div className={styles.frameDiv41}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-12906.svg"
          />
        </div>
        <div className={styles.frameDiv42}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-12903.svg"
          />
        </div>
        <div className={styles.frameDiv43}>
          <img className={styles.groupIcon7} alt="" src="../group-12907.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv9} />
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

export default HomePage;
