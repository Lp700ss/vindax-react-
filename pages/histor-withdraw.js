import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./histor-withdraw.module.css";

const HistorWithdraw = () => {
  const router = useRouter();

  const onTabContainerClick = useCallback(() => {
    router.push("/history-deposit");
  }, [router]);

  const onMetamaskIconClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onToxyExchangeFinalLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.historWithdraw}>
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
      <div className={styles.inPillsWithBrandColorDesk}>
        <div className={styles.tabDiv} onClick={onTabContainerClick}>
          <div className={styles.textDiv}>Deposit</div>
        </div>
        <Button variant="contained" color="primary">
          Withdraw
        </Button>
        <div className={styles.tabDiv1}>
          <div className={styles.textDiv}>Billing</div>
        </div>
        <div className={styles.tabDiv1}>
          <div className={styles.textDiv}>Billing</div>
        </div>
        <div className={styles.tabDiv1}>
          <div className={styles.textDiv}>Billing</div>
        </div>
        <div className={styles.tabDiv1}>
          <div className={styles.textDiv}>Billing</div>
        </div>
        <div className={styles.tabDiv1}>
          <div className={styles.textDiv}>Billing</div>
        </div>
        <div className={styles.tabDiv1}>
          <div className={styles.textDiv}>Billing</div>
        </div>
      </div>
      <div className={styles.frameDiv2} />
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
          <div className={styles.frameDiv3}>
            <div className={styles.frameDiv4}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../flatcoloriconsonlinesupport1.svg"
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
            <div className={styles.frameDiv5}>
              <img
                className={styles.bloggingSvgrepoCom1Icon}
                alt=""
                src="../bloggingsvgrepocom-11.svg"
              />
              <div className={styles.groupDiv9}>
                <div className={styles.newsAndUpdatesFromTheWorl}>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </div>
                <div className={styles.vinDAXBlogDiv}>VinDAX Blog</div>
              </div>
            </div>
            <div className={styles.frameDiv6}>
              <img
                className={styles.groupSvgrepoCom1Icon}
                alt=""
                src="../groupsvgrepocom-11.svg"
              />
              <div className={styles.groupDiv10}>
                <div className={styles.vinDAXIsGlobalJoinTheDis}>
                  VinDAX is global. Join the discussion in our worldwide
                  communities.
                </div>
                <div className={styles.communityDiv}>Community</div>
              </div>
            </div>
            <div className={styles.frameDiv7}>
              <img
                className={styles.flatColorIconsonlineSuppor}
                alt=""
                src="../goalsuccesssvgrepocom-11.svg"
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
                <Button
                  className={styles.iconAQrcode1Button}
                  sx={{ width: 128 }}
                  variant="contained"
                  color="primary"
                  size="2x"
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
      <div className={styles.simpleStripedDesktopDiv}>
        <div className={styles.frameDiv8}>
          <div className={styles.frameDiv9}>
            <div className={styles.columnDiv}>
              <div className={styles.tablesCellDiv}>
                <div className={styles.textDiv7}>Date</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>18-06-2017 12:38:42</div>
              </div>
            </div>
            <div className={styles.columnDiv1}>
              <div className={styles.tablesCellDiv15}>
                <div className={styles.textDiv7}>ID</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>123</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>456</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>789</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>112</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>313</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>456</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>789</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>980</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>7484</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>83939</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>3333</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>12313</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>3535</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>45354</div>
              </div>
            </div>
            <div className={styles.columnDiv2}>
              <div className={styles.tablesCellDiv15}>
                <div className={styles.textDiv7}>Amount</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>4030.40</div>
              </div>
            </div>
            <div className={styles.columnDiv3}>
              <div className={styles.tablesCellDiv}>
                <div className={styles.textDiv7}>RID</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
            </div>
            <div className={styles.columnDiv4}>
              <div className={styles.tablesCellDiv}>
                <div className={styles.textDiv7}>ASSET</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>BTC</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>BTC</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>BTC</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.detailsDiv}>ETH</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.detailsDiv}>XRP</div>
              </div>
            </div>
            <div className={styles.columnDiv5}>
              <div className={styles.tablesCellDiv}>
                <div className={styles.textDiv7}>TXID</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.textDiv}>9a24688899...099076e723</div>
              </div>
            </div>
            <div className={styles.columnDiv6}>
              <div className={styles.tablesCellDiv90}>
                <div className={styles.textDiv7}>Status</div>
              </div>
              <div className={styles.divider} />
              <div className={styles.tablesCellDiv1}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv1}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv95}>
                <div className={styles.badgeDiv4}>
                  <div className={styles.textDiv98}>Canceled</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv95}>
                <div className={styles.badgeDiv6}>
                  <div className={styles.textDiv98}>Canceled</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv95}>
                <div className={styles.badgeDiv6}>
                  <div className={styles.textDiv98}>Canceled</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv95}>
                <div className={styles.badgeDiv6}>
                  <div className={styles.textDiv98}>Canceled</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv95}>
                <div className={styles.badgeDiv6}>
                  <div className={styles.textDiv98}>Canceled</div>
                </div>
              </div>
              <div className={styles.tablesCellDiv2}>
                <div className={styles.badgeDiv}>
                  <div className={styles.textDiv98}>Succeed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardFooterWithPageButtons}>
          <div className={styles.divider} />
          <div className={styles.contentDiv}>
            <div className={styles.detailsDiv}>
              <span>{`Showing `}</span>
              <span className={styles.theVinDAXCrypto1}>1</span>
              <span>{` to `}</span>
              <span className={styles.theVinDAXCrypto1}>10</span>
              <span>{` of `}</span>
              <span className={styles.theVinDAXCrypto1}>97</span>
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
                <div className={styles.textDiv}>2</div>
              </div>
              <div className={styles.paginationNumberLinkDiv1}>
                <div className={styles.textDiv}>3</div>
              </div>
              <div className={styles.paginationNumberLinkDiv2}>
                <div className={styles.textDiv}>...</div>
              </div>
              <div className={styles.paginationNumberLinkDiv3}>
                <div className={styles.textDiv}>8</div>
              </div>
              <div className={styles.paginationNumberLinkDiv4}>
                <div className={styles.textDiv}>9</div>
              </div>
              <div className={styles.paginationNumberLinkDiv5}>
                <div className={styles.textDiv}>10</div>
              </div>
              <div className={styles.paginationNumberLinkDiv6}>
                <div className={styles.textDiv}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component2Div}>
        <div className={styles.component1DefaultDiv}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.frameDiv10}>
            <img
              className={styles.risecurePaymentFillIcon}
              alt=""
              src="../risecurepaymentfill.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv11}>
          <img
            className={styles.risecurePaymentFillIcon}
            alt=""
            src="../risecurepaymentfill.svg"
          />
        </div>
        <div className={styles.frameDiv12}>
          <img className={styles.groupIcon} alt="" src="../group-129011.svg" />
        </div>
        <div className={styles.frameDiv13}>
          <img className={styles.groupIcon} alt="" src="../group-12902.svg" />
        </div>
        <div className={styles.frameDiv14}>
          <img className={styles.groupIcon} alt="" src="../group-129041.svg" />
        </div>
        <div className={styles.frameDiv15}>
          <img className={styles.groupIcon} alt="" src="../group-12905.svg" />
        </div>
        <div className={styles.frameDiv16}>
          <img className={styles.groupIcon} alt="" src="../group-12906.svg" />
        </div>
        <div className={styles.frameDiv17}>
          <img className={styles.groupIcon} alt="" src="../group-129031.svg" />
        </div>
        <div className={styles.frameDiv18}>
          <img className={styles.groupIcon6} alt="" src="../group-129071.svg" />
        </div>
        <img
          className={styles.metamaskIcon}
          alt=""
          src="../metamask1.svg"
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

export default HistorWithdraw;
