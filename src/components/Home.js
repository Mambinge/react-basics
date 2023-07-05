import { useLocation } from 'react-router-dom';

function Home() {

    const location = useLocation();

    return (
        <div className="Home">
            <h1>Hello {location.state.id} and welcome home</h1>
        </div>
    )
}

export default Home;