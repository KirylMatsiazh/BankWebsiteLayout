import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/welcome-page/welcome-page.js'; 
import StrengthsPage from './components/strengths-page/strengths-page.js';
import PartnersPage from './components/partners/partners-page';
import HistoryPage from './components/history-page/history-page';
import BankServices from './components/bank-services/bank-services';
import Statistics from './components/statistics/statistics';
import NewsSubscription from './components/news-subscription/news-subscribtion';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <WelcomePage/>
      <StrengthsPage/>
      <PartnersPage/>
      <HistoryPage/>
      <BankServices/>
      <Statistics/>
      <NewsSubscription/>
      <Footer/>
    </div>
  );
}

export default App;
