<div>
  <form>
    <div className="form-group">
      <div className="sign-text">
        <span>Create a new account</span>
      </div>
    </div>

    <div className="sign-body">
      <div className="form-group">
        <label id="firstNameLabel" htmlFor="firstName">
          First Name
        </label>
        <span>:</span>
        <div className="input-group input-group-lg rounded no-overflow">
          <input
            type="text"
            className="form-control"
            name="firstName"
            ref="firstName"
            onChange={this.onChange}
            required
          />
          <span className="input-group-addon">
            <i className="fa fa-user" />
          </span>
        </div>
        <div>{this.state.errors && this.state.errors.firstName}</div>
      </div>
      <div className="form-group">
        <label id="lastNameLabel" htmlFor="lastName">
          Last Name
        </label>
        <span>:</span>
        <div className="input-group input-group-lg rounded no-overflow">
          <input
            type="text"
            className="form-control"
            name="lastName"
            ref="lastName"
            onChange={this.onChange}
            required
          />
          <span className="input-group-addon">
            <i className="fa fa-user" />
          </span>
        </div>
        <div>{this.state.errors && this.state.errors.lastName}</div>
      </div>
      <div className="form-group">
        <label id="passwordLabel" htmlFor="password">
          Password
        </label>
        <span>:</span>
        <div className="input-group input-group-lg rounded no-overflow">
          <input
            type="password"
            className="form-control"
            name="password"
            ref="password"
            pattern=".{4,}"
            onChange={this.onChange}
            required
          />
          <span className="input-group-addon">
            <i className="fa fa-lock" />
          </span>
        </div>
        <div>{this.state.errors && this.state.errors.password}</div>
      </div>
      <div className="form-group">
        <label id="passwordConfirmLabel" htmlFor="passwordConfirm">
          Confirm Password
        </label>
        <span>:</span>
        <div className="input-group input-group-lg rounded no-overflow">
          <input
            type="password"
            className="form-control"
            name="passwordConfirm"
            ref="passwordConfirm"
            onChange={this.onChange}
            required
          />
          <span className="input-group-addon">
            <i className="fa fa-check" />
          </span>
        </div>
        <div>{this.state.errors.passwordConfirm}</div>
      </div>
      <div className="form-group">
        <label id="emailLabel" htmlFor="email">
          Email
        </label>
        <span>:</span>
        <div className="input-group input-group-lg rounded no-overflow">
          <input
            type="email"
            className="form-control"
            name="email"
            ref="email"
            onChange={this.onChange}
            required
          />
          <span className="input-group-addon">
            <i className="fa fa-envelope" />
          </span>
        </div>
        <div>{this.state.errors && this.state.errors.email}</div>
      </div>
    </div>
    <div className="sign-footer">
      <div className="form-group">
        <div className="callout callout-info no-margin">
          <p className="text-muted">
            To confirm and activate your new account, we will need to send an
            activation code to your e-mail.
          </p>
        </div>
      </div>
      <div className="form-group">
        <div className="ckbox ckbox-theme">
          <input id="term-of-service" value="1" type="checkbox" />
          <label for="term-of-service" className="rounded">
            I agree with <a href={null}>Terms Of Service</a>
          </label>
        </div>
        <div className="ckbox ckbox-theme">
          <input id="newsletter" value="1" type="checkbox" />
          <label for="newsletter" className="rounded">
            Send me newsletter
          </label>
        </div>
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-theme btn-lg btn-block no-margin rounded"
          onClick={this.onClickSignUp}
        >
          Sign Up
        </button>
      </div>
      <div className="form-group">
        {this.state.message === "Email already exists!" && (
          <div className="callout callout-warning no-margin">
            <p
              className="text-muted"
              style={{ paddingTop: 15, paddingLeft: 50 }}
            >
              {this.state.message}
            </p>
          </div>
        )}
        {this.state.message ===
          "User registered. Awaiting for IT-Admin approval." && (
          <div className="callout callout-info no-margin">
            <p className="text-muted">{this.state.message}</p>
          </div>
        )}
      </div>
    </div>
  </form>
  <p className="text-muted text-center sign-link">
    Already have an account?
    <a
    // href="/addpathway"
    >
      Sign in here
    </a>
  </p>
</div>;
