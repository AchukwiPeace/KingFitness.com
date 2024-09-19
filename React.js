import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Placeholder for Stripe public key
const stripePromise = loadStripe('your_stripe_public_key');

// Header Component
const Header = () => {
    return (
    <header>
        <Link to="/" className="Logo">Kings <span>Fitness</span></Link>
        <a href="#services"><i className="bx bxs-chevron-down"></i></a>
        <i className='bx bx-menu'></i>
        <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/plans">Pricing</Link></li>
        <li><Link to="/rating">Rating</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="top-btn">
        <Link to="/join" className="nav-btn">Join Us</Link>
        </div>
    </header>
    );
};

// Home Component
const Home = () => {
    return (
    <section className="Home" id="Home">
        <div className="Home-content" data-aos="zoom-in">
        <h3>Build Your</h3>
        <h1>Dream Physique</h1>
        <h3><span className="multiple-text">Bodybuilding</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit, laboriosam magni quia magnam nemo veritatis delectus?</p>
        <Link to="/join" className="btn">Join Us</Link>
        </div>
        <div className="Home-img" data-aos="zoom-in">
        <img src="./img/Home1.png" alt="Home1 image" />
        </div>
        <div className="scroll-down" data-aos="zoom-in-up">
        <a href="#services"><i className="bx bxs-chervron-down"></i></a>
        </div>
        <div className="nav-menu-btn">
        <i className="bx bx-menu"></i>
        </div>
    </section>
    );
};

// Login Component
    const Login = ({ onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your server to authenticate
    if (username === "Achukwi" && password === "Salvador") {
        onLogin(username, "achukwigeraldsalvador@gmail.com");
        onClose();
    } else {
        alert("Invalid credentials, please try again.");
    }
    };

    return (
    <div id="login" className="login">
        <div className="Login-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            />
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            />
            <button type="submit">Login</button>
        </form>
        </div>
    </div>
    );
};

// Services Component
const Services = () => {
    return (
    <section className="services" id="services">
        <h2 className="heading" data-aos="zoom-in-down">Our <span>Services</span></h2>
        <div className="services-content" data-aos="zoom-in-up">
        <div className="Row">
            <h4>Physical Fitness</h4>
            <img src="./img/Track.png" alt="Track image" />
        </div>
        {/* Add other service rows here */}
        </div>
    </section>
    );
};

// About Component
const About = () => {
    return (
    <section className="about" id="about">
        <div className="about-img" data-aos="zoom-in-down">
        <h4>About us </h4>
        <img src="./img/About.png" alt="About image" />
        </div>
        <div className="about-content" data-aos="zoom-in-up">
        <h2 className="heading">Why Choose Us?</h2>
        <p>Our Diverse membership base creates a friendly and supportive atmosphere...</p>
        <p>Help members gain a specific goal and encourage learners...</p>
        <button id="book-session-btn">Book A Free Session</button>
        </div>
    </section>
    );
};

// Review Component
const Review = () => {
    const reviews = [
    { name: 'John', image: './img/John1.png', rating: 2 },
    { name: 'Mark', image: './img/Mark2.png', rating: 3 },
    { name: 'Steve', image: './img/Steve1.png', rating: 5 },
    { name: 'James', image: './img/James1.png', rating: 4 },
    ];

    return (
    <section className="review" id="review">
        <div className="Review-box">
        <h2 className="heading" data-aos="zoom-in-down">Client <span>Review</span></h2>
        {reviews.map((review, index) => (
            <div className="wrapper" data-aos="zoom-in-up" key={index}>
            <div className="review-item">
                <img src={review.image} alt={`${review.name} image`} />
                <h2>{review.name}</h2>
                <div className="Rating">
                {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">&#9733;</span>
                ))}
                </div>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
};

// Calendar Component
    const Calendar = () => {
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSchedule = () => {
    setMessage(`Gym Session scheduled for ${date}. You will receive a notification.`);
    // Here you would typically send this information to your backend
    };

    return (
    <section className="calendar">
        <h2 className="heading">Schedule Your Gym Session</h2>
        <div className="calendar-content">
        <input 
            type="date" 
            id="calendar-date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
        />
        <button onClick={handleSchedule}>Schedule Session</button>
        </div>
        {message && <div id="calendar-message">{message}</div>}
    </section>
    );
};

// Reminder Component
    const Reminder = () => {
    const [reminderTime, setReminderTime] = useState(30);
    const [timerTime, setTimerTime] = useState(40);
    const [reminderMessage, setReminderMessage] = useState('');
    const [timerMessage, setTimerMessage] = useState('');

    const handleSetReminder = () => {
    setTimeout(() => {
        setReminderMessage('Time to get to the gym!');
    }, reminderTime * 60000);
    };

    const handleStartTimer = () => {
    setTimeout(() => {
        setTimerMessage("Time's Up");
    }, timerTime * 60000);
    };

    return (
    <section className="reminder">
        <h2 className="heading">Set Reminder</h2>
        <div className="reminder-content">
        <div className="reminder-item">
            <label htmlFor="reminder-time">Reminder Time (in minutes):</label>
            <input 
            type="number" 
            id="reminder-time" 
            min="1" 
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            />
            <button onClick={handleSetReminder}>Set Reminder</button>
        </div>
        <div className="reminder-item">
            <label htmlFor="timer-time">Timer (in minutes):</label>
            <input 
            type="number" 
            id="timer-time" 
            min="1" 
            value={timerTime}
            onChange={(e) => setTimerTime(e.target.value)}
            />
            <button onClick={handleStartTimer}>Start Timer</button>
        </div>
        </div>
        {reminderMessage && <div id="reminder-message">{reminderMessage}</div>}
        {timerMessage && <div id="timer-message">{timerMessage}</div>}
    </section>
    );
};

// Plans Component
const Plans = ({ onSelectPlan }) => {
  const plans = [
    { name: 'Basic', price: '15,000frs', features: ['Smart Workout Plan', 'At Home Workout', 'Dance Fitness', 'Barre Workouts', 'Life Coaching'] },
    { name: 'Pro', price: '25,000frs/Monthly', features: ['Circuit Training', 'Martial Arts Workouts', 'Yoga and Pilates', 'Calisthenics', 'Swimming Workouts'] },
    { name: 'Premium', price: '35,000frs/Monthly', features: ['CrossFit Workouts', 'Gym Membership', 'Personal Training', 'Nutrition Consultant', 'Private Gym Membership'] },
  ];

  return (
    <section className="plans" id="plans">
      <h2 className="heading">Our <span>Plans</span></h2>
      <div className="plans-content">
        {plans.map((plan, index) => (
          <div className="box" key={index}>
            <h3>{plan.name}</h3>
            <h2><span>{plan.price}</span></h2>
            <ul>
                {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
                ))}
            </ul>
            <button className="select-plan" onClick={() => onSelectPlan(plan.name, plan.price)}>Join Now</button>
            </div>
        ))}
        </div>
    </section>
    );
};

// Dashboard Component
const Dashboard = ({ user, selectedPlan }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [fitnessGoals, setFitnessGoals] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Information submitted!\n\nName: ${fullName}\nEmail: ${email}\nGoals: ${fitnessGoals}`);
    // Here you would typically send this information to your backend
    };

    return (
    <section id="dashboard" className="dashboard">
        <h2 className="heading">Your Dashboard</h2>
        <div className="dashboard-content">
        <div className="selected-plan">
            <h3>Your Selected Plan:</h3>
            <p id="selected-plan-name">Plan Name: <span id="plan-name">{selectedPlan.name}</span></p>
            <p id="selected-plan-price">Price: <span id="plan-price">{selectedPlan.price}</span></p>
        </div>
        <div className="user-info">
            <h3>User Information:</h3>
            <img id="salvador1.png" src="./img/salvador1.png" alt="salvador1 Image" style={{borderRadius: '50%', display: 'block', marginBottom: '10px'}} />
            <p id="user-name">Name: <span id="name">{user.name}</span></p>
            <p id="user-email">Email: <span id="email">{user.email}</span></p>
        </div>
        </div>
        <form id="user-details-form" onSubmit={handleSubmit}>
        <h3>Submit Your Information</h3>
        <label htmlFor="full-name">Full Name:</label>
        <input 
            type="text" 
            id="full-name" 
            name="full-name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required 
        />
        <label htmlFor="user-email-input">Email:</label>
        <input 
            type="email" 
            id="user-email-input" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
        />
        <label htmlFor="fitness-goals">Fitness Goals:</label>
        <textarea 
            id="fitness-goals" 
            name="fitness-goals" 
            rows="4" 
            value={fitnessGoals}
            onChange={(e) => setFitnessGoals(e.target.value)}
            required
        ></textarea>
        <button type="submit">Submit</button>
        </form>
    </section>
    );
};

// Footer Component
const Footer = () => {
    return (
    <footer className="footer">
        <div className="Social">
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
        <a href="#"><i className='bx bxl-whatsapp'></i></a>
        <a href="#"><i className='bx bxl-messenger'></i></a>
        <a href="#"><i className='bx bxl-snapchat'></i></a>
        <a href="#"><i className='bx bxl-skype'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-tiktok'></i></a>
        <a href="#"><i className='bx bxl-telegram'></i></a>
    </div>
    <p className="Copyright">
        &copy; Kings Fitness 2024 - All Rights Reserved
    </p>
    </footer>
);
};

// Main App Component
const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleLogin = (username, email) => {
    setUser({ name: username, email: email });
    };

    const handleSelectPlan = (name, price) => {
    setSelectedPlan({ name, price });
    };

    return (
    <Router>
        <div className="