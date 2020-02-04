// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../../../theme/variables/airbitz'

const styles = StyleSheet.create({
  alert: {
    color: THEME.COLORS.ACCENT_RED
  },
  container: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_4,
    borderColor: THEME.COLORS.SECONDARY,
    borderRadius: 4,
    borderWidth: 0.5,
    paddingTop: 10
  },
  text: {
    color: THEME.COLORS.WHITE,
    margin: 10
  },
  view: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    flex: 1,
    justifyContent: 'center'
  }
})

export default styles
