import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <body className="site">
          <div>
            <nav className="site-nav flex-center">
              <h1 className="section-title">Unread</h1>
              <h1 className="section-title">Channels</h1>
              <h1 className="section-title">Direct Messages</h1>
            </nav>
          </div>
          <div>
            <main className="site-content">
              <section className="content-topic flex-center">
                <h1 className="section-title">Message Channel</h1>
              </section>
              <footer className="content-header flex-center">
                <h1 className="section-title">Message Input</h1>
              </footer>

            </main>
          </div>
        </body>
      </React.Fragment>
  );
}