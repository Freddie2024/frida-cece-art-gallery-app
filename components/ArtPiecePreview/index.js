import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  margin: 10px 0 0;
  text-align: center;
`;

const Artist = styled.p`
  margin: 0;
  color: #666;
  text-align: center;
`;

export default function ArtPiecePreview({ image, name, artist, slug }) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <ImageContainer>
        <StyledImage
          src={image}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
        />
      </ImageContainer>
      <Title>{name}</Title>
      <Artist>{artist}</Artist>
    </Link>
  );
}
