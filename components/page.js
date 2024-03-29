import { Fragment } from 'react';
import Head from 'next/head';
import Blob from './blob';
import style from './page.css';

const globalCSS = ({ background }) => <style>
{`html, body { 
    margin: 0; 
    background: ${background}; 
}`}
</style>;

function Page({ children, includeBlobs, background, links, animate }) {
    background = background || '#e6dbd1';
    return (
        <Fragment>
            <Head>
                <title>R &middot; C</title>
                <link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet"></link>
                <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
                {globalCSS({ background })}
            </Head>
            <div className={style.header}>
                {links}
            </div>
            {includeBlobs && 
                    <div className={style.blob_container}>
                        <Blob fill={'#d99838'} animate={!!animate} index={0} classes={style.blob_one} />
                        <Blob fill={'#75632b'} animate={!!animate} index={7} classes={style.blob_two} />
                        <Blob fill={'#c96d27'} animate={!!animate} index={14} classes={style.blob_three} />
                        <Blob fill={'#daab8d'} animate={!!animate} index={19} classes={style.blob_four} />
                    </div>
                }
            {children}
        </Fragment>
    );
};
 
export default Page;