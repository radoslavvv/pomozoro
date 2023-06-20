import IOptionsProps from "./IOptionsProps";
import { BsFillGearFill } from "react-icons/bs";

import styles from "./Options.module.scss";

const Options = (props: IOptionsProps) => {
  return (
    <>
      <BsFillGearFill className={styles.optionsButton} />
    </>
  );
};

export default Options;
