
import { useState } from 'react';

const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true); // State to toggle between Login and Signup

  return (
    <section id="auth" className="page-section" style={{ paddingTop: '150px' }}>
      <div className="form-container">
        {isLoginView ? (
          // LOGIN FORM
          <div>
            <h2>Login</h2>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input type="email" id="login-email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="password" required />
              </div>
              <button type="submit" className="submit-btn">Login</button>
              <p className="form-footer">
                Don't have an account? <a href="#" onClick={() => setIsLoginView(false)}>Sign Up</a>
              </p>
            </form>
          </div>
        ) : (
          // SIGNUP FORM
          <div>
            <h2>Sign Up</h2>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="signup-name">Full Name</label>
                <input type="text" id="signup-name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input type="email" id="signup-email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" name="password" required />
              </div>
              <button type="submit" className="submit-btn">Sign Up</button>
              <p className="form-footer">
                Already have an account? <a href="#" onClick={() => setIsLoginView(true)}>Login</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginPage;