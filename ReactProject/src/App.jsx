import Dashboard from './pages/dashboard';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Nopage from './pages/nopage';
import Home from './pages/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Dashboard/>}>
        <Route index element = {<Home/>}/>
        <Route path ="blogs" element = {<Blogs/>}/>
        <Route path ="contact" element = { <Contact 
      initialMessage="Selamat datang di halaman kontak!" 
      contactName="John Doe" 
    />}/>
        <Route path ="*" element = {<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;