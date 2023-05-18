//  stuck to bottom of page
// width 100% of page
// take styling from the homepage
// styled component
'use client';
import styled from "@emotion/styled"

export const BackgroundImage = styled('div')({
  position: 'fixed',
  zIndex: '-1',
  backgroundImage: 'url(/images/background.jpg)',
  backgroundSize: 'cover',
  backgroundColor: 'rgba(25, 25, 25, 0.8)',
  backgroundBlendMode: 'darken',
  backgroundRepeat: 'repeat'
})
