import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Experience from "../components/experience";
import { Typography, Grid, Button } from "@material-ui/core";
import { useTrail, animated, useSpring } from "react-spring";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "../css/custom.css"

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0,  transform: "translateX(10em)"},
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
    
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(10em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Personal Website <head />"
    >
      <Grid container spacing={2} style={{ padding: "5%", margin: 0, width: '100%' }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              <Translate>Hello! I am</Translate>
              <span className="intro__name"> {siteConfig.title}</span>
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">
              <Translate>
                I am a full student at Cheshire West College currently enrolled in
                Computing Level 3. I always seek to improve and grow in the Field of Technology.
                This website contains notes from my College and Univerisity experience.
              </Translate>{" "}
            </Typography>
            &nbsp;
          </animated.div>
          <animated.p style={animatedTexts[3]}>
            <Button
              style={{ textTransform: "none" }}
              color="primary"
              variant="outlined"
              size="Large"
              href='/college-notes/intro'
            >
              <Translate>See the Notes ➜</Translate>
            </Button>
          </animated.p>
        </Grid>
        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          <animated.img
            src={useBaseUrl("img/programming.svg")}
            style={animatedHero}
          />
        </Grid>
      </Grid>

      <Grid>
        <Experience />
      </Grid>
      <Grid>
      <HomepageFeatures />
      </Grid>
    </Layout>);
}

export default Home;