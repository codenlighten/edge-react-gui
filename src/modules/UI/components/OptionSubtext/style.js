// @flow

import { StyleSheet } from 'react-native'

import { THEME } from '../../../../theme/variables/airbitz'
import { scale } from '../../../../util/scaling.js'

export default StyleSheet.create({
  subHeaderSyntax: {
    color: THEME.COLORS.GRAY_1,
    fontSize: scale(14),
    textAlign: 'center'
  },
  subHeaderWalletName: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: scale(18),
    lineHeight: scale(26)
  }
})
