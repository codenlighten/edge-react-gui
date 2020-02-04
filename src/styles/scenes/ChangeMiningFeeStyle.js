// @flow

import { StyleSheet } from 'react-native'

import { THEME } from '../../theme/variables/airbitz.js'

export const styles = StyleSheet.create({
  content: {
    backgroundColor: THEME.COLORS.WHITE,
    flexGrow: 1,
    padding: THEME.rem(1.4)
  },

  // Custom fee area:
  customArea: {
    marginBottom: THEME.rem(1)
  },

  // Radio input:
  radio: {
    borderColor: THEME.COLORS.GRAY_2,
    borderRadius: THEME.rem(0.5),
    borderWidth: THEME.rem(1 / 16),
    height: THEME.rem(1),
    marginRight: THEME.rem(0.5),
    width: THEME.rem(1)
  },
  radioRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: THEME.rem(1)
  },
  selected: {
    backgroundColor: THEME.COLORS.ACCENT_BLUE,
    borderColor: THEME.COLORS.ACCENT_BLUE
  },

  // Warning box:
  warningBox: {
    alignItems: 'center',

    backgroundColor: THEME.COLORS.ACCENT_ORANGE,
    borderRadius: THEME.rem(0.5),

    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: THEME.rem(0.5)
  }
})
