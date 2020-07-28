import React, { forwardRef, Ref } from 'react'
import { Box as A11yBox, BoxProps as A11yProps } from 'reakit'
import { Box as ThemeAwareBox, BoxProps as ThemeAwareProps } from 'theme-ui'

type Props = A11yProps & ThemeAwareProps

function BaseBox({ as, ...props }: Props, ref: Ref<HTMLElement>) {
  return <A11yBox {...props} ref={ref} as={as ?? ThemeAwareBox} />
}

export const Box = forwardRef(BaseBox)
