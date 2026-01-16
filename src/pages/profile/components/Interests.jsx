import { useState, useRef, useEffect } from "react";

export default function Interests() {
  const [sectors, setSectors] = useState([]);
  const [coins, setCoins] = useState(["Aurioux"]);
  const [geographicPreferences, setGeographicPreferences] = useState("");
  const [additionalCriteria, setAdditionalCriteria] = useState("");
  const [showSectorDropdown, setShowSectorDropdown] = useState(false);
  const [showCoinDropdown, setShowCoinDropdown] = useState(false);
  
  const sectorDropdownRef = useRef(null);
  const coinDropdownRef = useRef(null);

  const availableSectors = ["Technology", "Healthcare", "Finance", "Real Estate", "Energy", "Education"];
  const availableCoins = ["Aurioux", "Bitcoin", "Ethereum", "USDC"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectorDropdownRef.current && !sectorDropdownRef.current.contains(event.target)) {
        setShowSectorDropdown(false);
      }
      if (coinDropdownRef.current && !coinDropdownRef.current.contains(event.target)) {
        setShowCoinDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddSector = (sector) => {
    if (!sectors.includes(sector)) {
      setSectors([...sectors, sector]);
      setShowSectorDropdown(false);
    }
  };

  const handleRemoveSector = (sector) => {
    setSectors(sectors.filter((s) => s !== sector));
  };

  const handleAddCoin = (coin) => {
    if (!coins.includes(coin)) {
      setCoins([...coins, coin]);
      setShowCoinDropdown(false);
    }
  };

  const handleRemoveCoin = (coin) => {
    setCoins(coins.filter((c) => c !== coin));
  };

  const handleSavePreferences = () => {
    // Save logic here
    console.log("Saving preferences:", {
      sectors,
      coins,
      geographicPreferences,
      additionalCriteria,
    });
    // You can add API call here
  };

  return (
    <div className="interests-content">
      <div className="interests-container">
        {/* Header */}
        <div className="interests-header">
          <div className="interests-header-text">
            <h3 className="interests-title">Investment Interest</h3>
            <p className="interests-subtitle">Define your sector preferences and investment criteria</p>
          </div>
        </div>

        {/* Sectors of Interest */}
        <div className="interests-section-item">
          <label className="interests-section-label">Sectors of interest</label>
          <div className="interests-section-content">
            {sectors.length === 0 ? (
              <div className="interests-empty-state">No sectors selected</div>
            ) : (
              <div className="interests-tags-container">
                {sectors.map((sector) => (
                  <span key={sector} className="interests-tag">
                    {sector}
                    <button
                      className="interests-tag-remove"
                      onClick={() => handleRemoveSector(sector)}
                      aria-label={`Remove ${sector}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
            <div className="interests-add-button-wrapper" ref={sectorDropdownRef}>
              <button 
                className="interests-add-button"
                onClick={() => setShowSectorDropdown(!showSectorDropdown)}
              >
                + Add Sector
              </button>
              {showSectorDropdown && availableSectors.filter((sector) => !sectors.includes(sector)).length > 0 && (
                <div className="interests-dropdown">
                  {availableSectors
                    .filter((sector) => !sectors.includes(sector))
                    .map((sector) => (
                      <button
                        key={sector}
                        className="interests-dropdown-item"
                        onClick={() => handleAddSector(sector)}
                      >
                        {sector}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="interests-divider"></div>

        {/* Emireq Coins Interest */}
        <div className="interests-section-item">
          <label className="interests-section-label">Emireq Coins Interest</label>
          <div className="interests-section-content">
            {coins.length > 0 && (
              <div className="interests-tags-container">
                {coins.map((coin) => (
                  <span key={coin} className={`interests-tag ${coin === "Aurioux" ? "coin-tag-aurieux" : "coin-tag"}`}>
                    {coin}
                    <button
                      className="interests-tag-remove"
                      onClick={() => handleRemoveCoin(coin)}
                      aria-label={`Remove ${coin}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
            <div className="interests-add-button-wrapper" ref={coinDropdownRef}>
              <button 
                className="interests-add-button"
                onClick={() => setShowCoinDropdown(!showCoinDropdown)}
              >
                + Add Coin
              </button>
              {showCoinDropdown && availableCoins.filter((coin) => !coins.includes(coin)).length > 0 && (
                <div className="interests-dropdown">
                  {availableCoins
                    .filter((coin) => !coins.includes(coin))
                    .map((coin) => (
                      <button
                        key={coin}
                        className="interests-dropdown-item"
                        onClick={() => handleAddCoin(coin)}
                      >
                        {coin}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="interests-divider"></div>

        {/* Geographic Preferences */}
        <div className="interests-section-item">
          <label className="interests-section-label">Geographic Preferences</label>
          <textarea
            className="interests-textarea"
            value={geographicPreferences}
            onChange={(e) => setGeographicPreferences(e.target.value)}
            placeholder="Enter your geographic investment preferences..."
            rows="4"
          />
        </div>

        {/* Divider */}
        <div className="interests-divider"></div>

        {/* Additional Criteria */}
        <div className="interests-section-item">
          <label className="interests-section-label">Additional Criteria</label>
          <textarea
            className="interests-textarea"
            value={additionalCriteria}
            onChange={(e) => setAdditionalCriteria(e.target.value)}
            placeholder="Describe any additional criteria for your investments..."
            rows="4"
          />
        </div>

        {/* Save Button */}
        <div className="interests-save-wrapper">
          <button className="interests-save-button" onClick={handleSavePreferences}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3334 14V9.33329C11.3334 9.15648 11.2631 8.98691 11.1381 8.86189C11.0131 8.73686 10.8435 8.66663 10.6667 8.66663H5.33335C5.15654 8.66663 4.98697 8.73686 4.86195 8.86189C4.73693 8.98691 4.66669 9.15648 4.66669 9.33329V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66669 2V4.66667C4.66669 4.84348 4.73693 5.01305 4.86195 5.13807C4.98697 5.2631 5.15654 5.33333 5.33335 5.33333H10" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

