export default function Signin() {
  return (
    <section>
      <div className="signin">
        <div className="content">
          <h3>Get early access today</h3>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="subscribe">
          <form method="POST">
            <label htmlFor="email">
              <input
                placeholder="email@example.com"
                type="email"
                required="true"
              />
            </label>
            <label htmlFor="submit">
              <button id="submit" type="submit">
                Get Started For Free
              </button>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
