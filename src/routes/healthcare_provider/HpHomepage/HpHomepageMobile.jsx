import "./HpHomepage.css"
import { useState } from "react";

function HpHomepageMobile () {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="hProvidertHomepageContainer">
      <header className="hProviderheader">
          <h1 className="hProviderName">DR. Hui Chen</h1>
          <p className="hProviderId">HOSP: 3573-22</p>
      </header>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      
    </div>
  );
}

export default HpHomepageMobile;