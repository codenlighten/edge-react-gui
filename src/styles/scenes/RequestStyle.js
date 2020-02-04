// @flow

import { StyleSheet } from 'react-native'

import { scale } from '../../util/scaling.js'

export const styles = StyleSheet.create({
  exchangeRateContainer: {
    alignItems: 'center',
    marginBottom: scale(10)
  },

  main: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start'
  },
  // The white background is a theme-independent part of the QR code:
  // eslint-disable-next-line react-native/no-color-literals
  qrContainer: {
    backgroundColor: 'white',
    borderRadius: scale(4),
    marginTop: scale(15),
    padding: scale(4)
  },

  shareButtonsContainer: {
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})
