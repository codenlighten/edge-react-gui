// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../../../theme/variables/airbitz'
import { scale } from '../../../../util/scaling.js'

const styles = StyleSheet.create({
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(16)
  },
  view: {
    backgroundColor: THEME.COLORS.TRANSPARENT
  }
})

export default styles
