import Page from '../components/page';
import style from './index.css';

function Error() {
    return (
        <Page includeBlobs={true}>
            <div className={style.text_container}>
                <h1 className={style.h1}>404</h1>
                <h2 className={style.h2} >THIS PAGE DOESN'T EXIST</h2>
            </div>
        </Page>
    );
};
 
export default Error;