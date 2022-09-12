import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./info.module.css";

const Info = () => {
  const router = useRouter();

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.infoDiv}>
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
          variant="contained"
          color="primary"
        >
          {" "}
          Login
        </Button>
        <Button
          className={styles.frameButton1}
          variant="contained"
          color="primary"
        >{`Register `}</Button>
      </div>
      <div className={styles.frameDiv2} />
      <img
        className={styles.screenshot1711}
        alt=""
        src="../screenshot-171-1@2x.png"
      />
      <div className={styles.groupDiv}>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <div className={styles.coinsDiv}>
              <img className={styles.shapeIcon} alt="" src="../shape4.svg" />
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.frameDiv6}>
                <div className={styles.bTCDiv}>BTC</div>
                <img className={styles.icons} alt="" src="../icons6.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div}>9784.79</div>
            </div>
            <div className={styles.frameDiv7}>
              <img className={styles.icons1} alt="" src="../icons1.svg" />
              <div className={styles.div1}>
                <span>7.2%</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
          <img className={styles.growthIcon} alt="" src="../growth2.svg" />
        </div>
        <div className={styles.frameDiv8}>
          <div className={styles.frameDiv4}>
            <div className={styles.coinsDiv1}>
              <img className={styles.shapeIcon1} alt="" />
              <img className={styles.shapeIcon2} alt="" src="../shape5.svg" />
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.frameDiv6}>
                <div className={styles.bTCDiv}>LTC</div>
                <img className={styles.icons} alt="" src="../icons6.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div}>8741.19</div>
            </div>
            <div className={styles.frameDiv12}>
              <img className={styles.icons1} alt="" src="../icons3.svg" />
              <div className={styles.div1}>{`5.2% `}</div>
            </div>
          </div>
          <img className={styles.growthIcon1} alt="" src="../growth3.svg" />
        </div>
        <div className={styles.frameDiv13}>
          <div className={styles.frameDiv4}>
            <div className={styles.coinsDiv2}>
              <img className={styles.shapeIcon1} alt="" />
              <img className={styles.unionIcon} alt="" src="../union4.svg" />
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.frameDiv6}>
                <div className={styles.bTCDiv}>ETM</div>
                <img className={styles.icons} alt="" src="../icons6.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div}>4567.16</div>
            </div>
            <div className={styles.frameDiv7}>
              <img className={styles.icons1} alt="" src="../icons1.svg" />
              <div className={styles.div1}>
                <span>6.5%</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
          <img className={styles.growthIcon} alt="" src="../vector-1242.svg" />
        </div>
        <div className={styles.frameDiv18}>
          <div className={styles.frameDiv4}>
            <div className={styles.coinsDiv3}>
              <img
                className={styles.combinedShapeIcon}
                alt=""
                src="../combined-shape1.svg"
              />
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.frameDiv6}>
                <div className={styles.bTCDiv}>BNB</div>
                <img className={styles.icons} alt="" src="../icons6.svg" />
                <div className={styles.bTCDiv}>USD</div>
              </div>
              <div className={styles.div}>6547.79</div>
            </div>
            <div className={styles.frameDiv7}>
              <img className={styles.icons1} alt="" src="../icons1.svg" />
              <div className={styles.div1}>
                <span>9.5%</span>
                <span className={styles.span}>{` `}</span>
              </div>
            </div>
          </div>
          <img className={styles.growthIcon} alt="" src="../vector-1243.svg" />
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.cardFooterWithPageButtons}>
        <div className={styles.divider} />
        <div className={styles.contentDiv}>
          <div className={styles.detailsDiv}>
            <span>{`Showing `}</span>
            <span className={styles.span3}>1</span>
            <span>{` to `}</span>
            <span className={styles.span3}>10</span>
            <span>{` of `}</span>
            <span className={styles.span3}>97</span>
            <span> results</span>
          </div>
          <div className={styles.pageButtonsDiv}>
            <div className={styles.paginationStepLinkDiv}>
              <img
                className={styles.chevronLeftIcon}
                alt=""
                src="../chevron-left.svg"
              />
            </div>
            <div className={styles.paginationStepLinkDiv1}>
              <img
                className={styles.chevronLeftIcon}
                alt=""
                src="../chevron-right.svg"
              />
            </div>
            <div className={styles.paginationNumberLinkDiv}>
              <div className={styles.numberDiv}>2</div>
            </div>
            <div className={styles.paginationNumberLinkDiv1}>
              <div className={styles.numberDiv}>3</div>
            </div>
            <div className={styles.paginationNumberLinkDiv2}>
              <div className={styles.numberDiv}>...</div>
            </div>
            <div className={styles.paginationNumberLinkDiv3}>
              <div className={styles.numberDiv}>8</div>
            </div>
            <div className={styles.paginationNumberLinkDiv4}>
              <div className={styles.numberDiv}>9</div>
            </div>
            <div className={styles.paginationNumberLinkDiv5}>
              <div className={styles.numberDiv}>10</div>
            </div>
            <div className={styles.paginationNumberLinkDiv6}>
              <div className={styles.numberDiv}>1</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv4}>
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
            <div className={styles.groupDiv5}>
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
            <div className={styles.groupDiv7}>
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
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.frameDiv23}>
            <div className={styles.frameDiv24}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport7.svg"
              />
              <div className={styles.groupDiv9}>
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
            <div className={styles.frameDiv25}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-18.svg"
              />
              <div className={styles.groupDiv10}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv26}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-18.svg"
              />
              <div className={styles.groupDiv11}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv27}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-18.svg"
              />
              <div className={styles.groupDiv12}>
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
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.frameDiv28}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv29}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv30}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-129017.svg"
          />
        </div>
        <div className={styles.frameDiv31}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-129022.svg"
          />
        </div>
        <div className={styles.frameDiv32}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-129046.svg"
          />
        </div>
        <div className={styles.frameDiv33}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-129052.svg"
          />
        </div>
        <div className={styles.frameDiv34}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-129062.svg"
          />
        </div>
        <div className={styles.frameDiv35}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="../group-129036.svg"
          />
        </div>
        <div className={styles.frameDiv36}>
          <img className={styles.groupIcon6} alt="" src="../group-129076.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask6.svg"
          onClick={onMetamaskIconClick}
        />
        <div className={styles.rectangleDiv4} />
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

export default Info;
