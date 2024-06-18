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

    const heading = screen.getByText(/Profile Settings/i);
    expect(heading).toBeInTheDocument();

    const uploadButton = screen.getByText(/Upload Profile Image/i);
    expect(uploadButton).toBeInTheDocument();

    const languageSelect = screen.getByLabelText(/Language:/i);
    expect(languageSelect).toBeInTheDocument();
  });
});
