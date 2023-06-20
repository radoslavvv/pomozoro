import IModeSliderProps from "./IModeSliderProps";

import styles from "./ModeSlider.module.scss";

const ModeSlider = (props: IModeSliderProps) => {
  return (
    <div className={styles.modeSlider}>
      <div className={`${styles.modeSlider__option} ${styles.selected}`}>podomoro</div>
      <div className={styles.modeSlider__option}>short break</div>
      <div className={styles.modeSlider__option}>long break</div>
    </div>
  );
};

export default ModeSlider;
