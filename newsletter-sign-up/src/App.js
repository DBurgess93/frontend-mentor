import './styles/App.scss'

const Signup = () => {
  return (
    <div>
      <div className="container">
        <div className="info">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <p>Email address</p>
          <form>
            <input type="text" placeholder="email@company.com" />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div>
          <h2>yo</h2>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
