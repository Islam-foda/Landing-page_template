
export default function Feature() {
  return (
    <section>
      <div className="feature">
        <div className="image">
          <img src="./images/illustration-1.svg" alt="illustration-1" />
        </div>
        <div className="contents">
          <div className="content">
            <h1>All your files in one secure location, accessible anywhere</h1>
            <p>
              fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className="subscribe">
            <form action="" method="POST">
              <label htmlFor="email">
                <input
                  placeholder="Enter your email."
                  type="email"
                  id="email"
                  name="email"
                  required="true"
                />
              </label>
              <label htmlFor="submit">
                <button type="submit">Get Started</button>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-footer"></div>
    </section>
  );
}
