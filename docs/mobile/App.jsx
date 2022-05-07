import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import DocsRouter from './components/DocsRouter';
import DocsNav from './components/DocsNav';

const App = () => {
  const { pathname } = useLocation();

  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle(pathname.replace(/\//g, ''));
  }, [pathname]);

  return (
    <>
      <DocsNav title={title} />
      <DocsRouter></DocsRouter>
    </>
  );
};

export default App;
