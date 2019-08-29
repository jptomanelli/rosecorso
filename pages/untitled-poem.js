import { useState, useEffect } from 'react';
import Page from "../components/page";
import Link from 'next/link';
import Utils from '../utils';

import style from "./index.css";

function UntitledPoem() {

  const [textFadeIn, setTextFadeIn] = useState(new Array(13).fill(false));
  const links = <Link href='/'><a className={style.a}>R&middot;C</a></Link>;

  useEffect(() => {
    const func = async () => {
      for (const i in textFadeIn) {
        setTextFadeIn(textFadeIn.map((_, ind) => +i >= ind ? true : false));
        await Utils.wait(500 + Math.random() * 1000);
      }
    };
    func();
  }, [Utils]);

  return (
    <Page includeBlobs={false} links={links}>
      <div className={style.absolute_box}></div>
      <div className={style.poem_container}>
        <p className={style.poem_p} style={textFadeIn[0] ? { opacity: 1 } : undefined}>All alone I stood and</p>
        <p className={style.poem_p} style={textFadeIn[1] ? { opacity: 1 } : undefined}>The moss swallowed whole my feet&mdash;</p>
        <br />
        <p className={style.poem_p} style={textFadeIn[2] ? { opacity: 1 } : undefined}>Myself,</p>
        <p className={style.poem_p} style={textFadeIn[3] ? { opacity: 1 } : undefined}>&emsp;&emsp;Disappearing.</p>
        <br />
        <p className={style.poem_p} style={textFadeIn[4] ? { opacity: 1 } : undefined}>I know you are weak and</p>
        <p className={style.poem_p} style={textFadeIn[5] ? { opacity: 1 } : undefined}>I weight a ton</p>
        <br />
        <p className={style.poem_p} style={textFadeIn[6] ? { opacity: 1 } : undefined}>I would invite you</p>
        <p className={style.poem_p} style={textFadeIn[7] ? { opacity: 1 } : undefined}>I said,</p>
        <br />
        <p className={style.poem_p} style={textFadeIn[8] ? { opacity: 1 } : undefined}>You,</p>
        <p className={style.poem_p} style={textFadeIn[9] ? { opacity: 1 } : undefined}>Unsuspecting.</p>
        <br />
        <p className={style.poem_p} style={textFadeIn[10] ? { opacity: 1 } : undefined}>
          &emsp;&emsp;&emsp;&emsp;Fading from the root&mdash;
        </p>
        <br />
        <p className={style.poem_p} style={textFadeIn[11] ? { opacity: 1 } : undefined}>I said,</p>
        <p className={style.poem_p} style={textFadeIn[12] ? { opacity: 1 } : undefined}>I love you too much to make you suffer</p>
      </div>
    </Page>
  );
}

export default UntitledPoem;
