import { render } from "@testing-library/react";
import ArtPiecePreview from ".";

test('renders ArtPiecePreview with image, title, and artist', () => {
    const dimensions = { width: 1920, height: 1280 }; 
    const { getByAltText, getByText } = render(
    <ArtPiecePreview 
        image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg" 
        name="Clay Bust Sculptures" 
        artist="dilara irem"
        dimensions={dimensions}
    />);
    
    const image = getByAltText('Clay Bust Sculptures');
    expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent('https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg'))),
  
    expect(getByText('Clay Bust Sculptures')).toBeInTheDocument(),
    expect(getByText('dilara irem')).toBeInTheDocument()
});
  