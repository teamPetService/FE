import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import LoginPage from '@pages/login/LoginPage';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Content from '@/layouts/Content';

const BaseLayout = () => {
    return (
        <BrowserRouter>
            <Header />
            <div style={{ marginTop: '96px' }}></div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default BaseLayout;
