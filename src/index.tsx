import ReactDOM from 'react-dom/client';
import Users from './components/users';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );
root.render(<Users />);
