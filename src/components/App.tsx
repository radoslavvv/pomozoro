import "./App.module.scss";
import Logo from "./logo/Logo";

import styles from "./App.module.scss";
import Clock from "./clock/Clock";
import ModeSlider from "./modeSlider/ModeSlider";
import Settings from "./settings/Settings";

function App() {
	return (
		<div className={styles.app}>
			<Logo />
			<ModeSlider />
			<Clock />
			<Settings />
		</div>
	);
}

export default App;
