import DocsHeader from './components/DocsHeader';
import DocsContent from './components/DocsContent';
import DocsNav from './components/DocsNav';
import DocsMobile from './components/DocsMobile';

const App = () => {
  return (
    <>
      <DocsHeader></DocsHeader>
      <DocsNav></DocsNav>
      <DocsContent></DocsContent>
      <DocsMobile></DocsMobile>
    </>
  );
};

export default App;
