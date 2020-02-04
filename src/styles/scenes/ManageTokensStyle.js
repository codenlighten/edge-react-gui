// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../theme/variables/airbitz'
import { scale } from '../../util/scaling.js'

export const underlayColor = THEME.COLORS.PRIMARY_BUTTON_TOUCHED

export const styles = StyleSheet.create({
  addButton: {
    backgroundColor: THEME.COLORS.GRAY_2,
    borderRadius: 3,
    flex: 1,
    marginLeft: scale(2)
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(17.5)
  },
  buttonsArea: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: scale(52),
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingVertical: scale(4)
  },
  checkBox: {
    alignSelf: 'center'
  },
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    flex: 1,
    paddingBottom: scale(50),
    position: 'relative'
  },
  headerIcon: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    fontSize: scale(22)
  },
  headerRow: {
    flexDirection: 'row',
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
  /// //// start of token row styling ///////
  manageTokenRow: {
    borderBottomColor: THEME.COLORS.GRAY_3,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: scale(44),
    paddingLeft: scale(20),
    paddingRight: scale(20)
  },
  manageTokenRowInterior: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  metaTokenListArea: {
    borderTopColor: THEME.COLORS.GRAY_3,
    borderTopWidth: 1,
    flex: 1
  },
  metaTokenListWrap: {
    flex: 1
  },
  oneButton: {
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 3,
    flex: 1
  },
  rowLeftArea: {
    flexDirection: 'row'
  },
  rowRightArrow: {
    color: THEME.COLORS.GRAY_1,
    fontSize: scale(18)
  },
  saveButton: {
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 3,
    flex: 1,
    marginRight: scale(2)
  },
  tokenCheckboxArea: {
    alignSelf: 'center'
  },
  tokenList: {
    flex: 1
  },
  tokenNameArea: {
    alignSelf: 'center'
  },
  tokenNameText: {
    color: THEME.COLORS.GRAY_1,
    fontSize: scale(16)
  },
  touchableCheckboxInterior: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(8)
  }
  /// //// end of token row styling /////////
})
