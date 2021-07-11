import './TeamPage.css';
import Neuer from '../../../assets/teamPictures/neuer.png';
import Sven from '../../../assets/teamPictures/sven.png';
import Sule from '../../../assets/teamPictures/sule.png';
import Pavard from '../../../assets/teamPictures/pavard.png';
import Chris from '../../../assets/teamPictures/chris.png';
import Davis from '../../../assets/teamPictures/davies.png';
import Lucas from '../../../assets/teamPictures/lucas.png';
import Kimmich from '../../../assets/teamPictures/kimmich.png';
import Leon from '../../../assets/teamPictures/leon.png';
import Michael from '../../../assets/teamPictures/michael.png';
import Marc from '../../../assets/teamPictures/marc.png';
import Tolisso from '../../../assets/teamPictures/tolisso.png';
import Fein from '../../../assets/teamPictures/fein.png';
import Gnabry from '../../../assets/teamPictures/gnabry.png';
import Lewa from '../../../assets/teamPictures/lewa.png';
import Muller from '../../../assets/teamPictures/muller.png';

const TeamPage = () => {
    return ( 
        <div className="team-main">
            <h1 className="team-title">Team Squad</h1>
            <div className="team">
                <div className="goalkeepers">
                    <h1>Goalkeepers</h1>
                    <div className="players">
                        <div className="player">
                            <div className="player-pic">
                                <img src={Neuer} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">1</div>
                                <div className="player-name">Manuel Neuer</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Sven} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">26</div>
                                <div className="player-name">Sven Ulreich</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="defenders">
                    <h1>Defenders</h1>
                    <div className="players">
                        <div className="player">
                            <div className="player-pic">
                                <img src={Sule} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">4</div>
                                <div className="player-name">Niklas Sule</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Pavard} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">5</div>
                                <div className="player-name">Ben Pavard</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Chris} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">15</div>
                                <div className="player-name">Chris Richards</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Davis} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">19</div>
                                <div className="player-name">Alpho Davies</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Lucas} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">21</div>
                                <div className="player-name">Lucas Hern</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="midfielders">
                    <h1>Midfeilders</h1>
                    <div className="players">
                        <div className="player">
                            <div className="player-pic">
                                <img src={Kimmich} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">6</div>
                                <div className="player-name">Josh Kimmich</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Leon} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">8</div>
                                <div className="player-name">Leon Goretzka</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Michael} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">17</div>
                                <div className="player-name">Michael Cuisance</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Marc} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">22</div>
                                <div className="player-name">Marc Roca</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Tolisso} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">24</div>
                                <div className="player-name">Core Tolisso</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Fein} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">30</div>
                                <div className="player-name">Adrian Fein</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attackers">
                    <h1>Attackers</h1>
                    <div className="players">
                        <div className="player">
                            <div className="player-pic">
                                <img src={Gnabry} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">7</div>
                                <div className="player-name">Serge Gnabry</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Lewa} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">9</div>
                                <div className="player-name">Lewandowski</div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="player-pic">
                                <img src={Muller} alt="neuer" />
                            </div>
                            <div className="player-info">
                                <div className="player-num">25</div>
                                <div className="player-name">Thomas Muller</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TeamPage;