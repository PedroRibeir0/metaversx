
export default function Footer() {
  return (
    <footer>
        <div className="community">
            <h2>Join Our Community</h2>
            <div className="buttons">
                <button>
                    <img src="/images/discord-black-icon.svg" alt="discord-icon" />
                    <span>Join Discord</span>
                </button>
                <button>
                    <img src="/images/telegram-icon.svg" alt="telegram-icon" />
                    <span>Join Telegram</span>
                </button>
            </div>
        </div>
        <div className="meta-rights">
            <img src="/images/meta-logo.svg" alt="logo" />
            <span>&#169; Metaverx Co. All rights reserved</span> 
        </div>
        <ul className="footer-list">
            <li className="footer-opt">About</li>
            <li className="footer-opt">Units</li>
            <li className="footer-opt">Benefit</li>
            <li className="footer-opt">Whitepaper</li>
        </ul>/
        <ul className="social-icons">
            <li className="s-icon">
                <img src="/images/discord-icon.svg" alt="" />
            </li>
            <li className="s-icon">
                <img src="/images/twitter-icon.svg" alt="twitter-icon" />
            </li>
            <li className="s-icon">
                <img src="/images/instagram-icon.svg" alt="instagram-icon" />
            </li>
            <li className="s-icon">
                <img src="/images/email-icon.svg" alt="email-icon" />
            </li>
        </ul>
    </footer>
  )
}