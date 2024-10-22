import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodayForecast from './components/views/TodayForecast';
import TenDaysForecast from './components/views/TenDaysForecast.jsx';
// import DayDetails from './components/views/DayDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal, previsión de hoy */}
        <Route index element={<TodayForecast/>} />
        <Route path='/' element={<TodayForecast />} />
        {/* Ruta de previsión a 10 días */}
        <Route path="/10-days" element={<TenDaysForecast/>} />
        {/*         
        {/* Ruta para los detalles de un día específico */}
        {/* <Route path="/day/:dayId" component={DayDetails} /> */}
      </Routes>
    </Router>
  );
}

export default App;
