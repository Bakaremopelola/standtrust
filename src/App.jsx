import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
