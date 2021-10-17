import './App.scss';
import AboutScreen from './screens/HomeScreen/Components/AboutScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import HeaderComponent from './screens/HomeScreen/Components/HeaderComponent/HeaderComponent';

function App() {
  return (
        <HomeScreen >
          <HeaderComponent />
          <AboutScreen  />
        </HomeScreen>
  );
}

export default App;
