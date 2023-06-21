import "./App.module.scss";
import Logo from "./logo/Logo";

import styles from "./App.module.scss";
import Clock from "./clock/Clock";
import ModeSlider from "./modeSlider/ModeSlider";
import Options from "./options/Options";
import ProgressBar from "./clock/progressBar/ProgressBar";

function App() {
	return (
		<div className={styles.app}>
			<Logo />
			<ModeSlider />
			<Clock />
			<Options />
		</div>
	);
}

export default App;
