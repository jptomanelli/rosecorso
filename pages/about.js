import { useState, useEffect, useRef } from 'react';
import Page from '../components/page';
import TwitterIcon from '../components/twitterIcon';
import InstaIcon from '../components/instaIcon';
import EmailIcon from '../components/emailIcon';
import style from "./index.css";
import Link from 'next/link';

function About() {

  const img = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const handleOnLoad = () => setLoaded(true);
  
  const links = <Link href='/'><a className={style.a_head}>R&middot;C</a></Link>;

  useEffect(() => {
    if (img.current.complete) {
      return handleOnLoad();
    }
  }, []);

  return (
    <Page links={links}>
      <div className={style.container}>
        <div className={style.div_split_l}>
          <picture>
            <img ref={img} onLoad={handleOnLoad} className={`${style.profile} ${loaded ? '': style.opacity_0}`} src="/static/images/rc.jpg" />
          </picture>
        </div>
        <div className={style.div_split_r}>
          <h1 className={`${style.h1_about} ${loaded ? '' : style.opacity_0}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h1>
        </div>
      </div>
    </Page>
  );
}

export default About;
