// main-page.ts

document.addEventListener('DOMContentLoaded', () => {
  const mainPageElement = document.getElementById('mainPage');

  if (mainPageElement) {
    const header = document.createElement('h1');
    header.textContent = 'Authorized content';
    mainPageElement.appendChild(header);

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Log out';
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('authToken');
      window.location.href = '/';
    });
    mainPageElement.appendChild(logoutButton);
  }
});
