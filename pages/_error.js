import Page from '../components/page';
import Link from 'next/link';
import style from './index.css';

function Error() {
    const links = <Link href='/'><a className={style.a_head}>R&middot;C</a></Link>;

    return (
        <Page includeBlobs={true} animate={false} links={links}>
            <div className={style.text_container}>
                <h1 className={style.h1}>404</h1>
                <h2 className={style.h2} >THIS PAGE DOESN'T EXIST</h2>
            </div>
        </Page>
    );
};
 
export default Error;