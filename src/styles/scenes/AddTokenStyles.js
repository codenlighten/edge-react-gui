// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../theme/variables/airbitz'
import { scale } from '../../util/scaling.js'

export const styles = StyleSheet.create({
  addButton: {
    backgroundColor: THEME.COLORS.GRAY_2,
    borderRadius: scale(3),
    flex: 1,
    marginRight: scale(2)
  },
  bottomPaddingForKeyboard: {
    height: scale(300)
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(18)
  },

  buttonsArea: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: scale(52),
    justifyContent: 'space-between',
    marginTop: scale(16),
    paddingVertical: scale(4)
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(20)
  },
  contractAddressArea: {
    height: scale(70)
  },

  currencyCodeArea: {
    height: scale(70)
  },
  decimalPlacesArea: {
    height: scale(70)
  },

  errorMessageArea: {
    alignItems: 'center',
    height: scale(16),
    justifyContent: 'center'
  },
  errorMessageText: {
    color: THEME.COLORS.ACCENT_RED
  },
  headerIcon: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    fontSize: scale(22)
  },
  headerRow: {
    flexDirection: 'row',
    height: scale(50),
    justifyContent: 'space-between',
    padding: scale(12)
  },
  headerText: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    color: THEME.COLORS.WHITE,
    fontSize: scale(18),
    marginLeft: scale(16)
  },
  icon: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    color: THEME.COLORS.WHITE,
    fontSize: scale(22)
  },
  instructionalArea: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(16)
  },
  instructionalText: {
    fontSize: scale(16),
    textAlign: 'center'
  },
  leftArea: {
    flexDirection: 'row'
  },
  nameArea: {
    height: scale(70)
  },
  saveButton: {
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 3,
    flex: 1,
    marginLeft: scale(2)
  }
})
