import Header from "./header/Header";
import Clock from "./clock/Clock";
import ClockModeSlider from "./clockModeSlider/ClockModeSlider";
import SettingsModal from "./settingsModal/SettingsModal";

import styles from "./App.module.scss";
import Footer from "./footer/Footer";

function App() {
	return (
		<div className={styles.app}>
			<Header />

			<ClockModeSlider />
			<Clock />

			<SettingsModal />

			<Footer />
		</div>
	);
}

export default App;
