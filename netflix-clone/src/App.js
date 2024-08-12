
import './App.css';

import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import RowList from './component/Rows/RowList/RowList';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <RowList/>
      <Footer />
    </div>
  );
}

export default App;
