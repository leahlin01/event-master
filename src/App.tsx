import './App.css'
import { Link, BrowserRouter } from 'react-router-dom';
import useUserStore from '../store/user'; // Import the user Zustand store
import { useEffect } from 'react';


function App() {
  const { isRegistered, register, unregister, initialize: initializeUserStore } = useUserStore(); // Access the user store

  useEffect(() => {
    initializeUserStore();
  }, [initializeUserStore]);
  
  return (
    <BrowserRouter>
      {/* Homepage Section */}
      <header>
        <h1>Welcome to Our Event Website</h1>
        <p>Discover and register for exciting events happening near you!</p>
        <nav>
          <ul>
          <li><Link to="/events">Event Listings</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      {/* User Registration Section */}
      {!isRegistered && (
      <section id="user-registration">
        <h2>Register for an Event</h2>
        <button onClick={register}>Register</button>
      </section>
      )}
      {/* End of User Registration Section */}
      {/* End of Homepage Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need support, please reach out to us:</p>
        <p>Email: support@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </BrowserRouter>
  )
}

export default App
