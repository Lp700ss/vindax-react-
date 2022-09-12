import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./savings.module.css";

const Savings = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.savingsDiv}>
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
      <div className={styles.savingsDiv1}>Savings</div>
      <div className={styles.div}>
        <div className={styles.rectangleDiv} />
        <div className={styles.flexibleSavingsDiv}>Flexible Savings</div>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <img className={styles.searchNormalIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv5}>
          <div className={styles.frameDiv4}>
            <img className={styles.searchNormalIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.frameDiv4}>
            <img className={styles.linkIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv9}>
          <div className={styles.frameDiv4}>
            <img className={styles.searchNormalIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv11}>
          <div className={styles.frameDiv4}>
            <img className={styles.searchNormalIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv13}>
          <div className={styles.frameDiv4}>
            <img className={styles.searchNormalIcon} alt="" />
          </div>
        </div>
        <div className={styles.lockedSavingsFixedDeposit}>
          Locked Savings Fixed deposit, potentially higher rewards
        </div>
        <b className={styles.iNTERESTPERLOT}>
          <p className={styles.iNTERESTP}>{`INTEREST `}</p>
          <p className={styles.pERLOT}>PER LOT</p>
        </b>
        <b className={styles.dURATIONDAYSB}>
          <p className={styles.iNTERESTP}>{`DURATION `}</p>
          <p className={styles.pERLOT}>(DAYS)</p>
        </b>
        <b className={styles.aNNUALIZEDINTERESTRATE}>
          <p className={styles.iNTERESTP}>{`ANNUALIZED `}</p>
          <p className={styles.pERLOT}>INTEREST RATE</p>
        </b>
        <b className={styles.cOINSESSION}>
          <p className={styles.iNTERESTP}>{`COIN / `}</p>
          <p className={styles.pERLOT}>{`SESSION `}</p>
        </b>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv15}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../btc.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>BTC</div>
              </div>
            </div>
          </div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv1}>Flexible</div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv19}>
            <img className={styles.searchNormalIcon} alt="" src="../eth.svg" />
            <div className={styles.frameDiv4}>
              <div className={styles.bTCDiv}>ETH</div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv1}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv22}>
            <img className={styles.linkIcon} alt="" src="../link.svg" />
            <div className={styles.frameDiv4}>
              <div className={styles.bTCDiv}>LINK</div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv5}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv25}>
            <img className={styles.searchNormalIcon} alt="" src="../usdt.svg" />
            <div className={styles.frameDiv4}>
              <div className={styles.bTCDiv}>USDT</div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv7}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv28}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../ada.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>ADA</div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv9}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv28}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../ada.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>ADA</div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv9}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv28}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../ada.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>ADA</div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv9}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv40}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../xrp.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>XPR</div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv9}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv40}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../xrp.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>XPR</div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv9}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.frameDiv40}>
            <div className={styles.frameDiv16}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../xrp.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>XPR</div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>2.0%</div>
          <div className={styles.flexibleDiv}>Flexible</div>
          <div className={styles.flexibleDiv9}>Flexible</div>
          <div className={styles.frameDiv18}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv52} />
      <div className={styles.groupDiv10}>
        <div className={styles.div11}>
          <div className={styles.rectangleDiv11} />
          <div className={styles.flexibleSavingsDiv1}>Flexible Savings</div>
          <div className={styles.frameDiv53} />
          <div className={styles.frameDiv54} />
          <div className={styles.frameDiv55} />
          <div className={styles.aPYTREND}>{`APY & TREND`}</div>
          <div className={styles.dURATIONDAYSDiv}>DURATION (DAYS)</div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv56}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../btc.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>BTC</div>
                </div>
              </div>
            </div>
            <div className={styles.flexibleDiv20}>Flexible</div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv60}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../eth.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>ETH</div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv20}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv63}>
              <img className={styles.linkIcon} alt="" src="../link1.svg" />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>LINK</div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv22}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv66}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="../usdt.svg"
              />
              <div className={styles.frameDiv4}>
                <div className={styles.bTCDiv}>USDT</div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv23}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv69}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../ada.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>ADA</div>
                </div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv24}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv69}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../ada.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>ADA</div>
                </div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv24}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv6}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv69}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../ada.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>ADA</div>
                </div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv24}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv81}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../xrp.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>XPR</div>
                </div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv24}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv8}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv81}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../xrp.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>XPR</div>
                </div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv24}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.frameDiv81}>
              <div className={styles.frameDiv16}>
                <img
                  className={styles.searchNormalIcon}
                  alt=""
                  src="../xrp.svg"
                />
                <div className={styles.frameDiv4}>
                  <div className={styles.bTCDiv}>XPR</div>
                </div>
              </div>
            </div>
            <div className={styles.div12}>2.0%</div>
            <div className={styles.flexibleDiv24}>Flexible</div>
            <div className={styles.frameDiv18}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.cOINSESSION1}>COIN / SESSION</div>
        </div>
        <div className={styles.depositAndRedeemOnAFlexib}>
          Deposit and redeem on a flexible manner
        </div>
      </div>
      <div className={styles.groupDiv21}>
        <div className={styles.tradeAnywhereDiv}>Trade Anywhere</div>
        <div className={styles.groupDiv22}>
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
          <div className={styles.groupDiv23}>
            <div className={styles.groupDiv24}>
              <div className={styles.rectangleDiv22} />
              <div className={styles.groupDiv25}>
                <div className={styles.theVinDAXCryptoTradingExpe}>
                  <p
                    className={styles.theVinDAXCrypto}
                  >{`The VinDAX crypto trading experience, tailor-made for your `}</p>
                  <p
                    className={styles.pERLOT}
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
            <div className={styles.groupDiv26}>
              <div className={styles.rectangleDiv22} />
              <div className={styles.groupDiv27}>
                <div className={styles.mobileDownloadTheVinDAXMob}>
                  <p className={styles.mobileP}>
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
            <div className={styles.groupDiv28}>
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
                <p className={styles.pERLOT}>
                  <span className={styles.theVinDAXCrypto1}>
                    {" "}
                    or MacOS device.
                  </span>
                </p>
              </div>
              <div className={styles.groupDiv29}>
                <div className={styles.rectangleDiv24} />
                <div className={styles.officialVinDAXAPIDocumentat}>
                  Official VinDAX API Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv30}>
        <div className={styles.groupDiv31}>
          <div className={styles.rectangleDiv25} />
          <div className={styles.groupDiv32}>
            <div className={styles.groupDiv33}>
              <div className={styles.aBOUTVINDAXDiv}>
                <p className={styles.mobileP}>ABOUT VINDAX</p>
              </div>
              <div className={styles.aboutUsAnnouncementsFAQsSu}>
                <p className={styles.mobileP}>About Us</p>
                <p className={styles.mobileP}>Announcements</p>
                <p className={styles.mobileP}>FAQs</p>
                <p className={styles.mobileP}>Support</p>
                <p className={styles.pERLOT}>Careers</p>
              </div>
            </div>
            <div className={styles.groupDiv34}>
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
                  <p className={styles.pERLOT}>Apply for Launchpad(IEO)</p>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv36}>
              <div className={styles.privacyTermsOfService}>
                <p className={styles.mobileP}>Privacy</p>
                <p className={styles.pERLOT}>Terms Of Service</p>
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
        <div className={styles.groupDiv37}>
          <div className={styles.rectangleDiv26} />
          <div className={styles.frameDiv93}>
            <div className={styles.frameDiv94}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport12.svg"
              />
              <div className={styles.groupDiv38}>
                <div className={styles.gotAProblemJustGetInTou}>
                  <p className={styles.mobileP}>
                    Got a problem? Just get in touch.
                  </p>
                  <p className={styles.pERLOT}>
                    {" "}
                    Our support team is available 24/7.
                  </p>
                </div>
                <div className={styles.supportDiv}>24 / 7 Support</div>
              </div>
            </div>
            <div className={styles.frameDiv95}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-112.svg"
              />
              <div className={styles.groupDiv39}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv96}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-112.svg"
              />
              <div className={styles.groupDiv40}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv97}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-112.svg"
              />
              <div className={styles.groupDiv41}>
                <div className={styles.vinDAXIsGlobalJoinTheDis1}>
                  <p
                    className={styles.mobileP}
                  >{`VinDAX is global. Join the discussion `}</p>
                  <p className={styles.pERLOT}>in our worldwide communities.</p>
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
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.frameDiv98}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv99}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv100}>
          <img className={styles.groupIcon} alt="" src="../group-12901.svg" />
        </div>
        <div className={styles.frameDiv101}>
          <img className={styles.groupIcon} alt="" src="../group-12902.svg" />
        </div>
        <div className={styles.frameDiv102}>
          <img className={styles.groupIcon} alt="" src="../group-1290411.svg" />
        </div>
        <div className={styles.frameDiv103}>
          <img className={styles.groupIcon} alt="" src="../group-12905.svg" />
        </div>
        <div className={styles.frameDiv104}>
          <img className={styles.groupIcon} alt="" src="../group-12906.svg" />
        </div>
        <div className={styles.frameDiv105}>
          <img className={styles.groupIcon} alt="" src="../group-129036.svg" />
        </div>
        <div className={styles.frameDiv106}>
          <img className={styles.groupIcon6} alt="" src="../group-12907.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask11.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv28} />
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

export default Savings;
