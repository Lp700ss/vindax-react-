import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./basic-exchange.module.css";

const BasicExchange = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.basicExchangeDiv}>
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
        <div className={styles.frameDiv3}>
          <div className={styles.helloCryptoExchanger}> Login</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.helloCryptoExchanger}>{`Register `}</div>
        </div>
      </div>
      <div className={styles.frameDiv5} />
      <img
        className={styles.screenshot165Icon}
        alt=""
        src="../screenshot-165@2x.png"
      />
      <div className={styles.div}>
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
        <img className={styles.groupIcon} alt="" src="../group-9662.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv6}>
          <img className={styles.vectorIcon} alt="" src="../vector-9.svg" />
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.div1}>1</div>
          </div>
          <img className={styles.vectorIcon} alt="" src="../vector-8.svg" />
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv4}>
              <div className={styles.dATEDiv}>DATE</div>
              <div className={styles.pRIRDiv}>PRIR</div>
              <div className={styles.tYPEDiv}>TYPE</div>
              <div className={styles.sIDEDiv}>SIDE</div>
              <div className={styles.pRICHDiv}>PRICH</div>
              <div className={styles.aMOUNTDiv}>AMOUNT</div>
              <div className={styles.fILLEDDiv}>FILLED%</div>
              <div className={styles.tOTALDiv}>TOTAL</div>
              <div className={styles.tRIGGERCONDITIONSDiv}>
                TRIGGER CONDITIONS
              </div>
              <div className={styles.cANCELALLDiv}>CANCEL ALL</div>
            </div>
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.openOrdersDiv}>Open Orders</div>
            <div className={styles.checkboxDiv}>
              <img
                className={styles.checkboxIcon}
                alt=""
                src="../checkbox.svg"
              />
              <div className={styles.hideOtherPairs}>Hide Other Pairs</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv6}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.iconHistory1}
          alt=""
          src="../iconhistory-1@2x.png"
        />
        <div className={styles.frameDiv7}>
          <img className={styles.vectorIcon} alt="" src="../vector-9.svg" />
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.div1}>1</div>
          </div>
          <img className={styles.vectorIcon} alt="" src="../vector-8.svg" />
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.groupDiv10}>
              <div className={styles.dATEDiv1}>DATE</div>
              <div className={styles.pRIRDiv1}>PRIR</div>
              <div className={styles.tYPEDiv1}>TYPE</div>
              <div className={styles.sIDEDiv1}>SIDE</div>
              <div className={styles.aVGDiv}>AVG</div>
              <div className={styles.pRICEDiv}>PRICE</div>
              <div className={styles.fILLEDDiv1}>FILLED%</div>
              <div className={styles.aMOUNTDiv1}>AMOUNT</div>
              <div className={styles.tOTALDiv1}>TOTAL</div>
              <div className={styles.tRIGGERCONDITIONSDiv1}>
                TRIGGER CONDITIONS
              </div>
              <div className={styles.sTATUSDiv}>STATUS</div>
            </div>
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.openOrdersDiv}>My 24h Order History</div>
            <div className={styles.checkboxDiv}>
              <img
                className={styles.checkboxIcon}
                alt=""
                src="../checkbox.svg"
              />
              <div className={styles.hideOtherPairs}>Hide Other Pairs</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.groupDiv13}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv14}>
            <div className={styles.groupDiv15}>
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
            <div className={styles.groupDiv16}>
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
            <div className={styles.groupDiv18}>
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
        <div className={styles.groupDiv19}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.frameDiv8}>
            <div className={styles.frameDiv9}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport10.svg"
              />
              <div className={styles.groupDiv20}>
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
            <div className={styles.frameDiv10}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-110.svg"
              />
              <div className={styles.groupDiv21}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv11}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-110.svg"
              />
              <div className={styles.groupDiv22}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv12}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-110.svg"
              />
              <div className={styles.groupDiv23}>
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
          <div className={styles.rectangleDiv8} />
          <div className={styles.frameDiv13}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv14}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv15}>
          <img className={styles.groupIcon1} alt="" src="../group-129019.svg" />
        </div>
        <div className={styles.frameDiv16}>
          <img className={styles.groupIcon1} alt="" src="../group-12902.svg" />
        </div>
        <div className={styles.frameDiv17}>
          <img className={styles.groupIcon1} alt="" src="../group-129049.svg" />
        </div>
        <div className={styles.frameDiv18}>
          <img className={styles.groupIcon1} alt="" src="../group-12905.svg" />
        </div>
        <div className={styles.frameDiv19}>
          <img className={styles.groupIcon1} alt="" src="../group-12906.svg" />
        </div>
        <div className={styles.frameDiv20}>
          <img className={styles.groupIcon1} alt="" src="../group-129036.svg" />
        </div>
        <div className={styles.frameDiv21}>
          <img className={styles.groupIcon7} alt="" src="../group-129079.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask9.svg"
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

export default BasicExchange;
