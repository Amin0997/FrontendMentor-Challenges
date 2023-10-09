import './styles/reset.css';
import './styles/common.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {

    const [theme, setTheme] = useState('darkTheme');

    const handleThemeChange = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
    };

    return (
        <div className={`wrapper ${theme}`}>

            <Header onThemeChange={handleThemeChange} />

            <Main />

        </div>
    );
}

export default App;
