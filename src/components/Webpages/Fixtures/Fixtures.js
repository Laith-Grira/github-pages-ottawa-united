import './Fixtures.css';

const Fixtures = () => {
    return ( 
        <div className="main-fixtures">
            <div className="premier-league">
                <h1>Canada Premier League</h1>
                <div className="match">
                    <div className="teams"></div>
                    <div className="match-info"></div>
                    <div className="stadium"></div>
                </div>
                <div className="match">
                    <div className="teams"></div>
                    <div className="match-info"></div>
                    <div className="stadium"></div>
                </div>
                <div className="match">
                    <div className="teams"></div>
                    <div className="match-info"></div>
                    <div className="stadium"></div>
                </div>
            </div>
            <div className="league-cup">
                <h1>League Cup</h1>
                <div className="match">
                    <div className="teams"></div>
                    <div className="match-info"></div>
                    <div className="stadium"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Fixtures;