import './HomePage.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/OttawaUnited.png';
import teamImage from '../../../assets/pictures/teamImage.jpg';

const HomePage = () => {
    return(
        <div className="main">
            <img src={Logo} alt="team logo" />
            <Link to="/news-title">
                <div className="news">
                    <div className="news-info">
                        <h3><b>Men's Team</b></h3>
                        <h1>The Team Is Ready For The New 2021/2022 Season</h1>
                    </div>
                    <div className="news-image">
                        <img src={teamImage} alt="team image" />
                    </div>
                </div>
            </Link>
            <h1>News Of Our Team</h1>
            <div className="news-feed">
                <div className="news1"></div>
                <div className="news2"></div>
                <div className="news3"></div>
            </div>
            <h1>Watch Our Team In Action</h1>
            <div className="videos">
                <div className="video1">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/pvZ9yVWpCHw`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="video2">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/nWw6K8VvLBw`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;