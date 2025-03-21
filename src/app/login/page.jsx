import Image from "next/image";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.image}>
          <Image src="/culture.png" alt="culture" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
