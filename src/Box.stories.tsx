import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import { Box } from './index'

export default {
  title: 'Box',
  decorators: [withA11y],
  component: Box,
}

export function Playground() {
  return (
    <Box
      px={5}
      py={5}
      bg="black"
      color="white"
      sx={{ fontFamily: 'sans-serif' }}
    >
      Box
    </Box>
  )
}

export function TheAsProp() {
  return (
    <Box>
      <Box
        px={3}
        py={2}
        sx={{ borderRadius: 10, maxWidth: 600, fontFamily: 'sans-serif' }}
        bg="#F4F8FE"
        color="#345EBD"
      >
        <h3>Note:</h3>
        <p>
          The Box by default, it renders a div element. When you pass the
          <b>{` 'as'`}</b> property to render another <b>HTMLElement</b> you
          will lose the <b>theme-ui</b> properties.
        </p>
      </Box>
      <br />
      <Box as="button" ref={React.createRef<HTMLButtonElement>()}>
        Box as Button
      </Box>
      <Box as="p" ref={React.createRef<HTMLParagraphElement>()}>
        Box as Paragraph
      </Box>
      <Box as="span" ref={React.createRef<HTMLSpanElement>()}>
        Box as Span
      </Box>
    </Box>
  )
}

export function Flex() {
  return (
    <Box sx={{ fontFamily: 'sans-serif' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        Justify Content - Center
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        Justify Content - End
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        Justify Content - Start
      </Box>
      <br />
      <Box
        sx={{
          borderStyle: 'solid',
          borderWidth: 1,
          display: 'flex',
          maxWidth: 400,
        }}
      >
        <Box sx={{ height: 50, display: 'flex', alignItems: 'flex-end' }}>
          Align Items - End
        </Box>
        <Box sx={{ height: 50, display: 'flex', alignItems: 'center' }}>
          Align Items - Center
        </Box>
        <Box sx={{ height: 50, display: 'flex', alignItems: 'flex-start' }}>
          Align Items - Start
        </Box>
      </Box>
    </Box>
  )
}
