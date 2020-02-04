// @flow

import { StyleSheet } from 'react-native'

import { THEME } from '../../../../theme/variables/airbitz.js'

export const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 3
  },
  footer: {
    paddingTop: 10
  },
  icon: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    color: THEME.COLORS.SECONDARY,
    fontSize: 40,
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center'
  },
  passwordInput: {
    color: THEME.COLORS.GRAY_2
  }
})
