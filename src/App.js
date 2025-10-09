import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Hero from './components/1_Hero';
import Portfolio from './components/2_Portfolio';
import Solution from './components/3_Solution';
import CI from './components/4_CI';
import Contact from './components/5_Contact';
import Footer from './components/layouts/Footer';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <CI />
      <Contact />
    </>
  );
}

function CIPage() {
  return (
    <>
      <CI />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/ci" element={<CIPage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
