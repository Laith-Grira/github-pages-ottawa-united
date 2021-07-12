import './Contact.css';

const Contact = () => {
    return ( 
        <div className="main-contact">
            <h1>Contact page</h1>
            <div className="quick-contact mt-5">
                <h4>Contact The Team managment</h4>
                <p>If you have any questions about our trials for the youth team, or want to be a member 
                    in our fanbase to become the ultimate fan, with many more, please fill out your
                    information and send us an email defining your enquiry. (We respond within 3 business days)
                </p>
                <form action="#" method="post">
                    <input type="text" placeholder="Full Name" className="mb-2"/><br />
                    <input type="text" placeholder="Email Address" className="mb-2"/><br />
                    <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Email message..."></textarea><br/>
                    <button type="button" class="btn btn-secondary send-email"><b>Send Email</b></button>
                </form>
            </div>
            <div className="quick-contact">
            <h4>Poste In Our Twitter Profile</h4>
                <p>Post a tweet in our official twitter account to share your opinions or send a feedback
                    to our team. (Please note that every tweet is being monitred by our admin).
                </p>
                <form action="#" method="post">
                    <input type="text" placeholder="@example" title="Insert your twitter id here." className="mb-2"/><br />
                    <textarea name="msg" id="msg" cols="30" rows="5" placeholder="Message..."></textarea><br/>
                    <button type="button" className="btn btn-secondary send-email"><b>Tweet</b></button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;