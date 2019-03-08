import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div>
            <Link to = '/create'><button>Create</button></Link>
            <Link to = '/group'><button>View Groups</button></Link>
        </div>
    )
}

export default Home;