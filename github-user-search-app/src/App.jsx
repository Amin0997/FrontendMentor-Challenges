import { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import EmptyMain from "./components/Main/MainEmpty"

function App() {
    const [userData, setUserData] = useState('');

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#F6F8FF] dark:bg-[#141D2F]">

            <Header userData={setUserData} />

            {userData ? <Main userData={userData} /> : <EmptyMain/>}

        </div>
    );
}

export default App;
