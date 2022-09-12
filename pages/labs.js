import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./labs.module.css";

const Labs = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.labsDiv}>
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
                src="../flatcoloriconsonlinesupport7.svg"
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
                src="../bloggingsvgrepocom-17.svg"
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
                src="../groupsvgrepocom-17.svg"
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
                src="../goalsuccesssvgrepocom-17.svg"
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
      <div className={styles.vinDAXLabsDiv}>VinDAX Labs</div>
      <div className={styles.vinDAXLabsIsASocialImpact}>
        <p
          className={styles.vinDAXLabsIs}
        >{`VinDAX Labs is a social impact fund and an initiative to incubate, invest, `}</p>
        <p className={styles.vinDAXLabsIs}>
          and empower blockchain and cryptocurrency entrepreneurs, projects, and
          communities.
        </p>
        <p className={styles.careersP}>
          Our mission is to solve the problems that matter most to the ecosystem
          and change the world for the better.
        </p>
      </div>
      <Button className={styles.button} variant="contained" color="primary">
        Apply to Launch
      </Button>
      <div className={styles.groupDiv21}>
        <div className={styles.rectangleDiv5} />
        <img className={styles.groupIcon} alt="" src="../group.svg" />
        <div className={styles.groupDiv22}>
          <div className={styles.whatWeDoIncubateEntreprene}>
            <p className={styles.vinDAXLabsIs}>
              <b className={styles.mobile}>
                <span className={styles.whatWeDo2}>What we do</span>
                <span className={styles.blankLineSpan}></span>
              </b>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span className={styles.blankLineSpan}>
                <span className={styles.mobile}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span className={styles.incubateEntrepreneursAnd}>
                Incubate entrepreneurs and projects
              </span>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span className={styles.incubateEntrepreneursAnd}>
                Make direct investments
              </span>
            </p>
            <p className={styles.careersP}>
              <span className={styles.incubateEntrepreneursAnd}>
                Collaborate with other industry partners and participate as LP
              </span>
            </p>
          </div>
          <div className={styles.weSupportEntrepreneursInFu}>
            <p className={styles.vinDAXLabsIs}>
              <b className={styles.weSupportEntrepreneurs}>
                We support entrepreneurs in
              </b>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span className={styles.blankLineSpan2}>&nbsp;</span>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span className={styles.incubateEntrepreneursAnd}>Funding</span>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span
                className={styles.incubateEntrepreneursAnd}
              >{`Go-to-market strategy & BD
`}</span>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span
                className={styles.incubateEntrepreneursAnd}
              >{`Token Models & Distributions
`}</span>
            </p>
            <p className={styles.vinDAXLabsIs}>
              <span className={styles.incubateEntrepreneursAnd}>
                Technical Review
              </span>
            </p>
            <p className={styles.careersP}>
              <span className={styles.incubateEntrepreneursAnd}>
                Talent Recruiting
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv6} />
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
          <img className={styles.groupIcon1} alt="" src="../group-129017.svg" />
        </div>
        <div className={styles.frameDiv10}>
          <img className={styles.groupIcon1} alt="" src="../group-129022.svg" />
        </div>
        <div className={styles.frameDiv11}>
          <img className={styles.groupIcon1} alt="" src="../group-129046.svg" />
        </div>
        <div className={styles.frameDiv12}>
          <img className={styles.groupIcon1} alt="" src="../group-129052.svg" />
        </div>
        <div className={styles.frameDiv13}>
          <img className={styles.groupIcon1} alt="" src="../group-129062.svg" />
        </div>
        <div className={styles.frameDiv14}>
          <img className={styles.groupIcon1} alt="" src="../group-129036.svg" />
        </div>
        <div className={styles.frameDiv15}>
          <img className={styles.groupIcon7} alt="" src="../group-129076.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask6.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv7} />
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

export default Labs;
