import { useState, useEffect } from 'react';
import Page from "../components/page";
import Link from 'next/link';
import Utils from '../utils';
import style from "./index.css";

function PoemUntitled() {

  const links = <Link href='/'><a className={style.a_head}>R&middot;C</a></Link>;

  return (
    <Page includeBlobs={false} links={links}>
      <div className={style.absolute_box}></div>
      <div className={style.poem_container}>
        <p className={style.poem_p} style={{ opacity: 1 }}>All alone I stood and</p>
        <p className={style.poem_p} style={{ opacity: 1 }}>The moss swallowed whole my feet&mdash;</p>
        <br />
        <p className={style.poem_p} style={{ opacity: 1 }}>Myself,</p>
        <p className={style.poem_p} style={{ opacity: 1 }}>&emsp;&emsp;Disappearing.</p>
        <br />
        <p className={style.poem_p} style={{ opacity: 1 }}>I know you are weak and</p>
        <p className={style.poem_p} style={{ opacity: 1 }}>I weight a ton</p>
        <br />
        <p className={style.poem_p} style={{ opacity: 1 }}>I would invite you</p>
        <p className={style.poem_p} style={{ opacity: 1 }}>I said,</p>
        <br />
        <p className={style.poem_p} style={{ opacity: 1 }}>You,</p>
        <p className={style.poem_p} style={{ opacity: 1 }}>Unsuspecting.</p>
        <br />
        <p className={style.poem_p} style={{ opacity: 1 }}>
          &emsp;&emsp;&emsp;&emsp;Fading from the root&mdash;
        </p>
        <br />
        <p className={style.poem_p} style={{ opacity: 1 }}>I said,</p>
        <p className={style.poem_p} style={{ opacity: 1 }}>I love you too much to make you suffer</p>
      </div>
    </Page>
  );
}

export default PoemUntitled;
