import { useState } from "react";
import "./birthdaydecor.css";
import { Search, ChevronDown, Phone, MessageCircle, Menu, User, Heart, Star } from "lucide-react";

export default function BirthdayDecor() {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="venuglam-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="VenueGlam Decor Logo" className="logo" />
        </div>

        <nav className="main-nav">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item has-dropdown">
              Services <ChevronDown size={16} />
            </li>
            <li className="nav-item">Deals</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-search">
            <Search size={20} />
          </button>

          <button className="btn-list-business">List your Venue</button>

          <button className="btn-user">
            <Menu size={16} />
            <User size={16} className="user-icon" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header">
          <h1>Find the Best Birthday Decor Services</h1>
          <p className="description">
            Browse top birthday decoration services in Lahore, Karachi, Islamabad, and Rawalpindi to make your events unforgettable!
          </p>
        </div>

        <div className="content-container">
          {/* Filters Section */}
          <aside className="filters">
            <div className="filter-header">
              <h2>FILTER</h2>
              <ChevronDown size={20} />
            </div>

            <div className="filter-section">
              <div className="filter-title">
                <h3>City</h3>
                <ChevronDown size={20} />
              </div>

              <div className="filter-options">
                {["Lahore", "Karachi", "Islamabad", "Rawalpindi"].map((city) => (
                  <label key={city} className="checkbox-label">
                    <input type="checkbox" name="city" value={city.toLowerCase()} />
                    {city}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-title">
                <h3>Budget (PKR)</h3>
                <ChevronDown size={20} />
              </div>

              <div className="filter-options">
                {["0 - 50,000", "50,001 - 100,000", "100,000+"].map((budget, index) => (
                  <label key={index} className="checkbox-label">
                    <input type="checkbox" name="budget" value={budget} />
                    {budget}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Section */}
          <div className="results-container">
            <div className="results-header">
              <div className="results-count">Showing 10 of 30 Results</div>

              <div className="results-actions">
                <div className="view-options">
                  <span>VIEW</span>
                  <button 
                    className={`view-btn ${viewMode === "list" ? "active" : ""}`} 
                    onClick={() => setViewMode("list")}
                  >
                    <div className="list-icon">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </button>

                  <button 
                    className={`view-btn ${viewMode === "grid" ? "active" : ""}`} 
                    onClick={() => setViewMode("grid")}
                  >
                    <div className="grid-icon">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </button>
                </div>

                <div className="sort-options">
                  <span>SORT BY:</span>
                  <span className="sort-value">POPULARITY</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <div className="results-list">
              {/* Birthday Decor Services */}
              {[
                {
                  name: "Elegant Decor and Events",
                  discount: "15% Off",
                  rating: "9.5",
                  reviews: "4.7 (40)",
                  location: "Gulberg, Lahore",
                  price: "Starting at PKR 30,000",
                  contact: "📞 Contact: 0303-4844244",
                  image: "/birthdaydecor1.jpg",
                  description:
                    "We offer theme-based birthday decorations with customized balloon setups, cake tables, and lighting.",
                },
                {
                  name: "Classical Decors",
                  rating: "4.8 (22)",
                  location: "Clifton, Karachi",
                  price: "Starting at PKR 40,000",
                  contact: "📞 Contact: 0303-4844244",
                  image: "/birthdaydecor2.jpg",
                  description:
                    "Affordable birthday party decor with backdrops, themed arrangements, and LED lighting.",
                },
              ].map((vendor, index) => (
                <div key={index} className="result-item">
                  <div className="result-image">
                    <img src={vendor.image} alt={vendor.name} className="vendor-image" />
                  </div>

                  <div className="result-details">
                    <div className="result-header">
                      <h2 className="vendor-name">{vendor.name}</h2>
                      {vendor.discount && <div className="discount-badge">{vendor.discount}</div>}
                    </div>

                    <div className="vendor-ratings">
                      <div className="rating-item">
                        <Heart className="heart-icon" fill="#e91e63" color="#e91e63" />
                        <span>{vendor.rating}</span>
                      </div>

                      <div className="rating-item">
                        <Star className="star-icon" fill="#ff9800" color="#ff9800" />
                        <span>{vendor.reviews}</span>
                      </div>
                    </div>

                    <div className="vendor-location">
                      <span>{vendor.location}</span>
                    </div>

                    <div className="vendor-description">
                      <p>{vendor.description}</p>
                    </div>

                    <div className="vendor-footer">
                      <div className="vendor-price">
                        <span>{vendor.price}</span>
                        <p className="vendor-contact">{vendor.contact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
