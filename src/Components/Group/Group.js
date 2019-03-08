import React from 'react';
import { Link } from 'react-router-dom';

const Group = props => {
    return (
        <div>
            <Link to = '/group/goodfriends'><button>Good Friends</button></Link>
            <Link to = '/group/greatfriends'><button>Great Friends</button></Link>
            <Link to = '/group/ultrafriends'><button>Ultra Friends</button></Link>
            <Link to = '/group/bestfriends'><button>Best Friends</button></Link>
        </div>
    )
}

export default Group;