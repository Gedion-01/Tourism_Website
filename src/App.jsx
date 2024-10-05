import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home-page";
import AboutPage from "./pages/Aboutus-page";
import { Header } from "./components/Header/Header";
import { ContentWrapper } from "./components/ContenWrapper";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ContentWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </ContentWrapper>
    </>
  );
}

export default App;
