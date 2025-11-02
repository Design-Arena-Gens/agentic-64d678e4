import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zepay Group - AI-Powered IT Solutions</title>
        <meta name="description" content="Transform your business with AI-enabled IT solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="ad-poster">
          {/* Header Section */}
          <div className="header">
            <div className="logo-section">
              <div className="logo">Z</div>
              <h1 className="company-name">ZEPAY GROUP</h1>
            </div>
            <div className="tagline">AI-Powered IT Solutions</div>
          </div>

          {/* Main Content */}
          <div className="content">
            <h2 className="headline">Transform Your Business with Artificial Intelligence</h2>

            <p className="subheadline">
              Stop losing revenue to outdated systems. Our AI-enabled IT solutions automate workflows,
              reduce costs by 40%, and scale your operations instantly.
            </p>

            <div className="benefits">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-text">
                  <strong>10x Faster Operations</strong>
                  <span>AI automation that works 24/7</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-text">
                  <strong>Cut Costs by 40%</strong>
                  <span>Eliminate manual processes</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <div className="benefit-text">
                  <strong>Real-Time Insights</strong>
                  <span>Data-driven decisions instantly</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <div className="benefit-text">
                  <strong>Enterprise Security</strong>
                  <span>Bank-level AI protection</span>
                </div>
              </div>
            </div>

            <div className="services">
              <h3>Our AI Solutions Include:</h3>
              <ul>
                <li>Intelligent Process Automation</li>
                <li>Predictive Analytics & Business Intelligence</li>
                <li>AI-Powered Customer Support Systems</li>
                <li>Machine Learning Infrastructure</li>
                <li>Cloud Migration & Optimization</li>
              </ul>
            </div>

            <div className="social-proof">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Businesses Transformed</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">$50M+</div>
                <div className="stat-label">Saved for Clients</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <h3 className="cta-headline">Ready to Lead Your Industry with AI?</h3>
            <p className="cta-subtext">
              Book your FREE AI transformation consultation today. Limited spots available this month.
            </p>
            <button className="cta-button">
              GET YOUR FREE AI AUDIT NOW →
            </button>
            <div className="urgency">⏰ Only 7 consultation slots left this month!</div>
            <div className="contact-info">
              <span>📧 contact@zepaygroup.com</span>
              <span>📱 +1 (555) AI-ZEPAY</span>
              <span>🌐 www.zepaygroup.com</span>
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <p>Don't let your competitors outpace you. The AI revolution is here.</p>
            <p className="guarantee">💎 100% Money-Back Guarantee | No Long-Term Contracts</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .ad-poster {
          width: 100%;
          max-width: 1080px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .header {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 40px;
          text-align: center;
        }

        .logo-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .company-name {
          font-size: 42px;
          font-weight: 900;
          letter-spacing: 2px;
          margin: 0;
        }

        .tagline {
          font-size: 18px;
          opacity: 0.95;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .content {
          padding: 50px 40px;
        }

        .headline {
          font-size: 36px;
          font-weight: 900;
          color: #1a202c;
          margin-bottom: 20px;
          line-height: 1.2;
          text-align: center;
        }

        .subheadline {
          font-size: 20px;
          color: #4a5568;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 500;
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          background: linear-gradient(135deg, #f6f8fb 0%, #ffffff 100%);
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .benefit-icon {
          font-size: 32px;
          min-width: 40px;
        }

        .benefit-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .benefit-text strong {
          font-size: 18px;
          color: #1a202c;
        }

        .benefit-text span {
          font-size: 14px;
          color: #718096;
        }

        .services {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 30px;
          border-radius: 15px;
          color: white;
          margin-bottom: 40px;
        }

        .services h3 {
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .services ul {
          list-style: none;
          display: grid;
          gap: 12px;
        }

        .services li {
          font-size: 17px;
          padding-left: 30px;
          position: relative;
          font-weight: 500;
        }

        .services li:before {
          content: "✓";
          position: absolute;
          left: 0;
          font-weight: bold;
          font-size: 20px;
          color: #ffd700;
        }

        .social-proof {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
          padding: 30px;
          background: #f7fafc;
          border-radius: 15px;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 900;
          color: #667eea;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #4a5568;
          font-weight: 600;
        }

        .cta-section {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          padding: 50px 40px;
          text-align: center;
          color: white;
        }

        .cta-headline {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .cta-subtext {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .cta-button {
          background: white;
          color: #f5576c;
          border: none;
          padding: 20px 50px;
          font-size: 22px;
          font-weight: 900;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          letter-spacing: 1px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        .urgency {
          margin-top: 25px;
          font-size: 18px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 25px;
          border-radius: 25px;
          display: inline-block;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .contact-info {
          margin-top: 25px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          font-size: 15px;
          font-weight: 600;
        }

        .footer {
          background: #1a202c;
          color: white;
          padding: 30px;
          text-align: center;
        }

        .footer p {
          margin: 10px 0;
          font-size: 16px;
        }

        .guarantee {
          font-weight: 700;
          color: #ffd700;
        }

        @media (max-width: 768px) {
          .company-name {
            font-size: 28px;
          }

          .headline {
            font-size: 26px;
          }

          .subheadline {
            font-size: 16px;
          }

          .cta-button {
            font-size: 18px;
            padding: 18px 35px;
          }

          .content {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
}
