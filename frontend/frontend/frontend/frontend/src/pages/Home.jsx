import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing CSS for Home page
import Recommendations from './Recommendations';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Hello Readers</h1>
                <h2>Reading is more than just words on a page</h2>
                <h2>it's a journey of emotions, a sanctuary for the soul, <br /> and a window to countless worlds waiting to be explored.</h2><br /><br /><br />
                <center>
                    <Link to='Recommendations'>
                    <button>Explore</button>
                    </Link>
                </center>
            </div>
        </div>
    );
}

export default Home;
