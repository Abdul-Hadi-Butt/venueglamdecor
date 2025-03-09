import { useState } from "react";
import "./anniversary.css";
import { Search, ChevronDown, Phone, MessageCircle, Menu, User, Heart, Star } from "lucide-react";

export default function AnniversaryDecor() {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="venuglam-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.jpg" alt="VenueGlam Decor Logo" className="logo" />
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
          <h1>Find the Best Anniversary Decor Services</h1>
          <p className="description">
            Browse top anniversary decoration services in Lahore, Karachi, Islamabad, and Rawalpindi to make your events unforgettable!
          </p>
        </div>

        <div className="content-container">
          {/* Filters Section */}
          <aside className="filters">
            <div className="filter-header">
              <h2>FILTER</h2>
              <ChevronDown size={20} />
            </div>

            {/* City Filter */}
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

            {/* Budget Filter */}
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

            {/* Rating Filter */}
            <div className="filter-section">
              <div className="filter-title">
                <h3>Rating</h3>
                <ChevronDown size={20} />
              </div>

              <div className="filter-options">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="checkbox-label">
                    <input type="checkbox" name="rating" value={rating} />
                    {Array(rating)
                      .fill(<Star fill="#ff9800" color="#ff9800" size={16} />)
                      .map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    {rating} Star
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Section */}
          <div className="results-container">
            <div className="results-header">
              <div className="results-count">Showing 2 of 2 Results</div>

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
                  name: "Aesthetic  Events",
                  discount: "20% Off",
                  rating: "9.5",
                  reviews: "5.0 (40)",
                  location: "Gulberg, Lahore",
                  price: "Starting at PKR 20,000",
                  contact: "📞 Contact: 0303-4844244",
                  image: "/anniversarydecor1.jpg",
                  description:
                    "We offer theme-based Anniversary decorations with customized balloon setups, cake tables, and lighting.",
                },
                {
                  name: "Orignal Decors",
                  rating: "4.8 (22)",
                  location: "Clifton, Karachi",
                  price: "Starting at PKR 30,000",
                  contact: "📞 Contact: 0303-4844244",
                  image: "/anniversarydecor2.jpg",
                  description:
                    "Affordable Anniversary event decor with backdrops, themed arrangements, and LED lighting.",
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
