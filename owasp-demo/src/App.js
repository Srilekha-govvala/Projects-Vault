import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function SecureLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //input validation
  const validInputs = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address.")
      return false;
    }
    if (password.length < 8) {
      setError("Password must be 8 characters long.")
      return false;
    }
    return true;
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("")
    if (!validInputs()) return;
    try {
      const res = await axios.get("http://localhost:5000/users", {
        params: { email, password },
      });

      const users = Array.isArray(res.data) ? res.data : [];
      if (users.length === 0) {
        setError("Invalid credentials. Please try again.");
        return;
      }

      const user = users[0];
      const token = user.token || `demo-token-${user.id || Date.now()}`;
      // Demo: store token in sessionStorage. Use HttpOnly cookie in production.
      sessionStorage.setItem("token", token);
      alert("Login successful!");
      setPassword("");
    }catch (err) {
      setError("Invalid credentials or network issue. Please try again.")
    }
  }
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-sm" style={{ width: 320 }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-3">Secure login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SecureLogin