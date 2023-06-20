import ILogoProps from "./ILogoProps";

import styles from "./Logo.module.scss";

const Logo = (props: ILogoProps) => {
  return (
    <div className={styles.logo}>
      pomo<span>z</span>oro
    </div>
  );
};

export default Logo;
