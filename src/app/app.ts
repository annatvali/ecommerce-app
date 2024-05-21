// import { ctpClient } from "../api/api-client";

class App {
  private appElement: HTMLElement;
  private clientId: string;
  private clientSecret: string;
  private authUrl: string;

  constructor() {
    this.appElement = document.getElementById('app') as HTMLElement;
    this.renderContent();
    this.clientId = 'J3MmPF5dnCOvDIVW87gmE0rj';
    this.clientSecret = 'eqvBX45b6qFK6COENtqxnmZQED7dNduF';
    this.authUrl =
      'https://auth.europe-west1.gcp.commercetools.com/oauth/token';
  }

  private renderContent(): void {
    const htmlContent = `
            <h1>E-commerce App</h1>
            <button id="registrationButton">Sign up</button>
            <button id="loginButton">Sign in</button>
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
        const authToken = localStorage.getItem('authToken');
        console.log('here is');
        if (authToken) {
          window.location.href = 'src/pages/main-page/main-page.html';
        } else {
          window.location.href = 'src/pages/login-page/login-page.html';
        }
      });
    }
  }

  private async getAccessToken(): Promise<string> {
    const response = await fetch(this.authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    return data.access_token;
  }

  public async login(): Promise<void> {
    try {
      const token = await this.getAccessToken();
      localStorage.setItem('anonimousToken', token);
      console.log('Access token saved to localStorage:', token);
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
}

export default App;
