import './nav.css';


function Nav() {
  return (
    <div className='container'>
        <div className="nija">
            <h6 className='nija-head'>NIGERIA FUND</h6>
        </div>
        
        <nav>
            {/* I used a-tag here instead of Link because this a single page. No other page to navigate to. */}
            <div className='navbar'>
            <i class='bx bxs-up-arrow-alt'></i>
            <div className="navbar1">
            <hr />
                <ul>
                    <li><a href="#" className='active' >Overview</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">The Team</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </div>
            </div>
            
            <div className="navbar2">
            <hr />
                <ul>
                    <li><a href="#">Pledges</a></li>
                    <li><a href="#">Create account</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Nav;
