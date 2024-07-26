import React from 'react';
import  { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';


// import { ClipLoader } from 'react-spinners';

const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const AboutPage = lazy(() => import('./components/AboutPage/AboutPage'));
const BlogPage = lazy(() => import('./components/Blog/BlogPage'));
// const ContactPage = lazy(() => import('./components/ContactPage/ContactPage'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogPage />} />
          {/* <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}
