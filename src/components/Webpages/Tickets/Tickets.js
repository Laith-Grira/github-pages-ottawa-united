import './Tickets.css';

// Import icons
import mastercard from '../../../assets/icons/mastercard.png';
import cvv from '../../../assets/icons/cvv.png';
import visa from '../../../assets/icons/visa.png';

const Tickets = () => {
    return ( 
        <div className="main-tickets mt-4 mb-5">
            <h1>Buy a Game Ticket</h1>
            <form action="#" method="post">
                <div className="ticket-info pt-5">
                    <div className="match-day">
                        <h3>Match Day</h3>
                        <select id="dietSelect" name="dietSelect" className="input-style" onChange={ e => console.log(e.target.value)}>
                            <option value="" disabled selected hidden>Select Here</option>
                            <option value="Lactose Free">Lactose Free</option>
                            <option value="Nuts Free">Nuts Free</option>
                            <option value="Both Restrictions">Both Restrictions</option>
                            <option value="Restrictions">Restrictions</option>
                        </select>
                    </div>
                    <div className="match-seat mt-5">
                        <h3>Seat</h3>
                        <select id="dietSelect" name="dietSelect" className="input-style" onChange={ e => console.log(e.target.value)}>
                            <option value="" disabled selected hidden>Select Here</option>
                            <option value="Lactose Free">Lactose Free</option>
                            <option value="Nuts Free">Nuts Free</option>
                            <option value="Both Restrictions">Both Restrictions</option>
                            <option value="Restrictions">Restrictions</option>
                        </select>
                    </div>
                    <div className="personal-info mt-5">
                        <h3>Personal Info</h3>
                        <input type="text" 
                                placeholder="Full Name" 
                                className="input-style mb-2" 
                                onChange={ e => console.log(e.target.value)}/>
                        <br />
                        <input type="text" 
                                placeholder="Email Address" 
                                className="input-style mb-2" 
                                onChange={ e => console.log(e.target.value)}/>
                        <br />
                    </div>
                    <div className="payment mt-5">
                        <h3>Payment</h3>
                        
                        <div className="credit-info">
                            <p><b>Credit Card:</b> <br />
                                <input placeholder="XXXX XXXX XXXX XXXX" 
                                                    type="text" id="debit" 
                                                    title="We ask for your credit card number in case of no-show, 20$ will be charged."/>
                                                    <img src={mastercard} alt="logo"/>
                                                    <img src={visa} alt="logo" />
                                                </p>
                            <div className="card-info">
                            <div><b>Expiry Date</b>: <br />
                                <input type="text" id="dateInputCredit" placeholder="MM/YYYY" /></div>
                            <div><b>CVV:</b> <br />
                                <input placeholder="XXX" type="text" id="code" /> <img src={cvv} alt="logo"/></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <button type="button" className="btn btn-secondary submit-info mb-5"><b>BUY</b></button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Tickets;