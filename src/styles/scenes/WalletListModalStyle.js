// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../theme/variables/airbitz'
import { PLATFORM } from '../../theme/variables/platform.js'

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: THEME.COLORS.WHITE,
    bottom: PLATFORM.deviceHeight / 10,
    maxHeight: PLATFORM.deviceHeight * 0.8
  },
  exitIconWrap: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center'
  },
  headerRowWrap: {
    backgroundColor: THEME.COLORS.GRAY_3,
    borderBottomColor: THEME.COLORS.GRAY_1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  headerText: {
    color: THEME.COLORS.GRAY_1,
    fontSize: 20
  },
  headerTextWrap: {
    alignItems: 'flex-start',
    flex: 5,
    justifyContent: 'center'
  },

  individualRowText: {
    fontSize: 16
  },
  individualRowWrap: {
    alignContent: 'flex-start',
    borderColor: THEME.COLORS.GRAY_1,
    borderTopWidth: 0,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20
  }
})

export default styles
