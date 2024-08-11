import './index.css'

const Footer =() => {
    return(
        <>
        <div className="footer-container">
            <div className="footer-top-section">
        <div >
            <h4 className="be-the-fist">BE THE FIST TO KANOW</h4>
            <p className="discription-mobil">Transactions will be completed in Euros and a currency reference is avalible on hover.</p>
            <p className="discription">Sing up for updates from metta muse.</p>
            
            <input type = "text" placeholder="Enter you e-mail.."  className="input-el"/>
            <button className="button">SUBSCRIBE</button>
            <hr className="horizonta1"/>
        </div>
        <div className="fist-half">
            <h3 className="constct">CONTACT US</h3>
            <h3 className="call">CALL US</h3>
            <p className="num">+44 221 133 5360 </p>
            <hr className="horizonta1"/>
            <p className="contact-discription">customercare@mettamuse.com</p>
            <h1 className="be-the-fist">CURRENCY</h1>
            <div className="usd-usd-img">
            <img src = "https://i.postimg.cc/GpWzmcH9/Screenshot-2024-08-11-190023.png" className="usd-img" />
            <p className="contact-discription-usd"> USD</p>
            </div>
            <p className="contact-discription">Transactions will be completed in Euros and a currency reference is avalible on hover.</p>
            
        </div>
        </div>
        <hr/>
        <div className="footer-second-section">
        <div>
        <h1 className="metta-mobil">metta muse</h1>
        <hr className="horizonta1"/>
        <p className="metta-muse-section-discription">About Us</p>
        <p className="metta-muse-section-discription">Strories</p>
        <p className="metta-muse-section-discription">Artisans</p>
        <p className="metta-muse-section-discription">Boutiques</p>
        <p className="metta-muse-section-discription">Contact Us</p>
        <p className="metta-muse-section-discription">Eu Compliances Docs</p>
        </div>
        <div>
        <h1 className="metta-muse-section-quick">QUICK LINKS</h1>
        <hr className="horizonta1"/>
        <p className="metta-muse-section-discription">Order & Shipping</p>
        <p className="metta-muse-section-discription">Join/Login as a Seller</p>
        <p className="metta-muse-section-discription">Payment & Pricing</p>
        <p className="metta-muse-section-discription">Return & Refunds</p>
        <p className="metta-muse-section-discription">FAQs</p>
        <p className="metta-muse-section-discription">Privacy Policy</p>
        <p className="metta-muse-section-discription">Terms & Conditions</p>
        </div>
        <div className="paymet-socialmedia">
        <div>
        <h1 className="metta-muse-section-follow"> FOLLOW US</h1>
        <hr className="horizonta1"/>
        <img src = "https://i.postimg.cc/7LLy0VBz/Screenshot-2024-08-11-192812.png" alt="inst-linkdn" className= "inst-linkdn-img"/>
        </div>
        <div>
        <h1 className="metta-muse-section-muse">metta muse ACCEPTS</h1>
        <img src = "https://i.postimg.cc/ydDkKGG6/Screenshot-2024-08-11-192924.png" alt="paymets" className= "paymets-img" />
        </div>
        </div>
        </div>
        <p className="copyrigth">Copyright 2023 mettamuse. All rights reserved</p>
        </div>

        
        </>
    )
}

export default Footer