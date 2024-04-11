import "../styles/reset.css";
import "../styles/styles.css";

export default function Footer() {
    return (
        <div>
            <div className="division-line" />
            <div className="footer">
                <div className="footer-social">
                    <a href="https://www.facebook.com/cyberlogitecvietnam" title="facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                    </a>
                    <a
                    href="https://www.youtube.com/@cyberlogitecvietnam3023"
                    title="youtube"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                    </a>
                </div>
                <div className="footer-link">
                    <a href="#ContactUs" title="contactUs">
                    CONTACT US
                    </a>
                    <a href="#JoinUs" title="joinUs">
                    JOIN US
                    </a>
                </div>
            </div>
        </div>
    );
}
