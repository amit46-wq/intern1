import { useState } from 'react';
import './cards.css';

const PricingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPageViews, setSelectedPageViews] = useState(100000);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePageViewsChange = (event) => {
    setSelectedPageViews(Number(event.target.value));
  };

  const handleBillingToggle = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const getPrice = () => {
    let price = 0;
    if (selectedPageViews <= 10000) {
      price = 8;
    } else if (selectedPageViews <= 50000) {
      price = 12;
    } else if (selectedPageViews <= 100000) {
      price = 16;
    } else if (selectedPageViews <= 500000) {
      price = 24;
    } else if (selectedPageViews <= 1000000) {
      price = 36;
    }

    if (isYearlyBilling) {
      price = price * 0.75; 
    }

    return price;
  };

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="header">  
          <h3>Simple, traffic-based pricing</h3>  
          <p>Sign up for our 30-day trial. No credit card required.</p>  
        </div>  
        <button className="toggleButton" onClick={toggleDarkMode}>Dark Mode</button>  
        <div className="pricing-section">
          <div className="pricing-plan">
            <div className="planheader">
              <p className="pageview">{selectedPageViews.toLocaleString()} PAGEVIEWS</p>
              <p className="dollar">${getPrice().toFixed(2)} / month</p>
            </div>
            <div className="plan-features">
              <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </div>
            <div className="plan-slider">
              <input 
                type="range" 
                min="10000" 
                max="1000000" 
                step="10000" 
                value={selectedPageViews} 
                onChange={handlePageViewsChange} 
                className="slider"
              />
            </div>
            <div className="billing-toggle">
              <input type="checkbox" id="yearly-billing" checked={isYearlyBilling} onChange={handleBillingToggle} />
              <label htmlFor="yearly-billing">Yearly Billing (25% off)</label>
            </div>
            <button className="start-trial-btn">Start My Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;



