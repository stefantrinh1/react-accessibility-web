import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { AccessibilityWidget } from 'react-accessibility';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className='App'>
      <Layout>
        <PageContent />
      </Layout>
      <AccessibilityWidget />
    </div>
  );
}

export default App;
