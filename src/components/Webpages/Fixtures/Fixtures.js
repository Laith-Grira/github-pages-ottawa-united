import './Fixtures.css';

// Teams logos
import OUFC from '../../../assets/teams/ottawa-united-logo.gif';
import Halifax from '../../../assets/teams/halifax.png';
import Away from '../../../assets/icons/away.png';
import Home from '../../../assets/icons/stadium.png';

const Fixtures = () => {
    return ( 
        <div className="main-fixtures">
            <div className="premier-league">
                <h1>Canada Premier League</h1>
                <div className="match">
                    <div className="teams">
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={Halifax} alt="Halifax" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>Ottawa United vs Halifax <br />
                           Date: Auguest 27th, 2021 <br />
                           MatchDay: 13</p>
                    </div>
                    <div className="stadium">
                        <img src={Home} alt="home" className="team-pic" />
                    </div>
                </div>
                <div className="match">
                    <div className="teams">
                        <img src={Halifax} alt="Halifax" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>Ottawa United vs Halifax <br />
                           Date: Auguest 27th, 2021 <br />
                           MatchDay: 13</p>
                    </div>
                    <div className="stadium">
                        <img src={Away} alt="away" className="team-pic" />
                    </div>
                </div>
                <div className="match">
                    <div className="teams">
                        <img src={Halifax} alt="Halifax" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>Ottawa United vs Halifax <br />
                           Date: Auguest 27th, 2021 <br />
                           MatchDay: 13</p>
                    </div>
                    <div className="stadium">
                        <img src={Away} alt="away" className="team-pic" />
                    </div>
                </div>
            </div>
            <div className="league-cup">
                <h1>League Cup</h1>
                <div className="match">
                    <div className="teams">
                        <img src={OUFC} alt="Ottawa United" className="team-pic" />
                        <p className="vs-tag">VS</p>
                        <img src={Halifax} alt="Halifax" className="team-pic" />
                    </div>
                    <div className="match-info">
                        <p>Ottawa United vs Halifax <br />
                           Date: Auguest 27th, 2021 <br />
                           MatchDay: 13</p>
                    </div>
                    <div className="stadium">
                        <img src={Home} alt="home" className="team-pic" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Fixtures;