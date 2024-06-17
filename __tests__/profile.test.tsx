import { render, screen } from '@testing-library/react';
import ProfileField from '../app/profile/page';
import Profile from '../app/profile/page';

describe('Profile Component', () => {
  it('renders without crashing', async () => {
    const { container } = render(<ProfileField />);
    expect(await container).toBeTruthy();
  });
});

describe('Profile Component', () => {
  it('should render profile settings, upload button, and language select', () => {
    render(<Profile />);

    // Check if "Profile Settings" heading exists
    const heading = screen.getByText(/Profile Settings/i);
    expect(heading).toBeInTheDocument();

    // Check if the upload profile image button exists
    const uploadButton = screen.getByText(/Upload Profile Image/i);
    expect(uploadButton).toBeInTheDocument();

    // Check if the language select dropdown exists
    const languageSelect = screen.getByLabelText(/Language:/i);
    expect(languageSelect).toBeInTheDocument();
  });
});
