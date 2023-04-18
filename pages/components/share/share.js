import styles from "./share.module.scss";
import Facebook from "../icons/facebook.svg";
import Twitter from "../icons/twitter.svg";
import Linkedin from "../icons/linkedin.svg";
export const Share = () => {
  const windowFeatures = "left=100,top=100,width=560,height=460";
  const shareFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer.php?u=https://typing-test-farukipekcom.vercel.app/",
      "Share On Facebook",
      windowFeatures
    );
  };
  const shareTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?url=https://typing-test-farukipekcom.vercel.app/&text=My+Typing+Test+Score:+0+WPM!+Are+you+faster?%20-%20",
      "Share On Twitter",
      windowFeatures
    );
  };
  const shareLinkedin = () => {
    window.open(
      "https://www.linkedin.com/sharing/share-offsite/?url=https://typing-test-farukipekcom.vercel.app",
      "Share On LinkedIn",
      windowFeatures
    );
  };
  return (
    <div className={styles.share}>
      <div
        className={`${styles.shareItem} ${styles.facebook}`}
        onClick={shareFacebook}
      >
        <Facebook />
        <span>SHARE</span>
      </div>
      <div
        className={`${styles.shareItem} ${styles.twitter}`}
        onClick={shareTwitter}
      >
        <Twitter />
        <span>SHARE</span>
      </div>
      <div
        className={`${styles.shareItem} ${styles.linkedin}`}
        onClick={shareLinkedin}
      >
        <Linkedin />
        <span>SHARE</span>
      </div>
    </div>
  );
};
export default Share;
