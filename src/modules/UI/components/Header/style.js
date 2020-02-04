// @flow

import { StyleSheet } from 'react-native'

import { TextAndIconButtonStyle } from '../../../../styles/indexStyles'
import THEME from '../../../../theme/variables/airbitz'

export default StyleSheet.create({
  backButton: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  backIconAndroid: {
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  backIconStyle: {
    color: THEME.COLORS.WHITE,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 3
  },
  default: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    color: THEME.COLORS.WHITE
  },
  headerNameContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  headerRoot: {
    zIndex: 1006
  },
  icon: {
    color: THEME.COLORS.WHITE,
    fontSize: 25
  },
  sideText: {
    color: THEME.COLORS.WHITE,
    fontSize: 18
  },
  sideTextWrap: {
    paddingBottom: 3,
    paddingHorizontal: 10,
    paddingTop: 3
  }
})

export const walletSelectorStyles = {
  ...TextAndIconButtonStyle,
  content: { position: 'relative', width: '80%' },
  centeredContent: { ...TextAndIconButtonStyle.centeredContent, position: 'relative', width: '80%' }
}
