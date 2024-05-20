class App {
  private appElement: HTMLElement;

  constructor() {
    this.appElement = document.getElementById('app') as HTMLElement;

    this.renderContent();
  }

  private renderContent(): void {
    const htmlContent = `
            <h1>E-commerce App</h1>
            <button id="registrationButton">Sign up</button>
            <button id="loginButton">Login</button>
        `;

    this.appElement.innerHTML = htmlContent;

    const registerButton = document.getElementById('registrationButton');
    if (registerButton) {
      registerButton.addEventListener('click', () => {
        window.location.href =
          'src/pages/registration-page/registration-page.html';
      });
    }

    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        window.location.href = 'src/pages/login-page/login-page.html';
      });
    }
  }
}

export default App;
