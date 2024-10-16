import './index.css'

const Header = () => (
    <nav className="nav-header">
        <div className="nav-content">
            <div className="nav-mobile-container">
                <h1 className="nav-mobile-logo-heading">AVATAR.AI</h1>
                <img 
                    src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1728972283/qkzh6nxfps4ep5xfyq80.png" 
                    alt="menu" 
                    className="nav-menu-logo" 
                />
            </div>
            <div className="nav-desktop-container">
                <div className="nav-desktop-content-container">
                    <h2 className="nav-desktop-logo-heading">AI.GEN</h2>
                    <ul className="nav-desktop-items-container">
                        <li className="nav-item">Features</li>
                        <li className="nav-item">Roadmap</li>
                        <li className="nav-item">Tokenomics</li>
                    </ul>
                </div>
                <div className="nav-desktop-buttons-container">
                    <button type="button" className="whitepaper-btn">Whitepaper</button>
                    <button type="button" className="get-started-btn">Get Started</button>
                </div>
            </div>
        </div>
    </nav>
)

export default Header