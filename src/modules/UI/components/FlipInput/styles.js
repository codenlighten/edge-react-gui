// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../../../theme/variables/airbitz'
import { PLATFORM } from '../../../../theme/variables/platform.js'
import { scale } from '../../../../util/scaling.js'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: THEME.COLORS.BLUE_3,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: PLATFORM.platform === 'ios' ? scale(110) : scale(120),
    paddingVertical: scale(12),
    width: '90%'
  },
  flipButton: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    justifyContent: 'center',
    marginLeft: scale(13),
    marginRight: scale(9)
  },
  flipContainerBack: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  flipContainerBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flipContainerFront: {
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  flipContainerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: scale(8)
  },
  flipContainerHeaderIcon: {
    height: scale(22),
    marginLeft: scale(13),
    marginRight: scale(13),
    resizeMode: 'cover',
    width: scale(22)
  },
  flipContainerHeaderText: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(15)
  },
  flipContainerHeaderTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: THEME.COLORS.WHITE
  },
  flipContainerHeaderTextDropDown: {
    color: THEME.COLORS.WHITE,
    marginLeft: scale(3)
  },
  flipIcon: {
    color: THEME.COLORS.GRAY_3
  },
  rows: {
    flex: 1,
    flexDirection: 'column',
    marginRight: scale(23),
    backgroundColor: THEME.COLORS.TRANSPARENT
  }
})

export const top = StyleSheet.create({
  amount: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.SYMBOLS,
    fontSize: scale(15),
    padding: 0,
    textAlign: 'right'
  },
  amountContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  currencyCode: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(15),
    textAlign: 'left'
  },
  row: {
    alignItems: 'center',
    borderBottomColor: THEME.COLORS.OPAQUE_WHITE,
    borderBottomWidth: scale(1),
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: scale(8)
  },
  symbol: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.SYMBOLS,
    fontSize: scale(15),
    marginRight: scale(5),
    textAlign: 'right'
  }
})

export const bottom = StyleSheet.create({
  alert: {
    color: THEME.COLORS.WHITE,
    opacity: THEME.OPACITY.MID
  },
  amount: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.SYMBOLS,
    fontSize: scale(10),
    opacity: THEME.OPACITY.MID,
    padding: 0,
    textAlign: 'right'
  },
  amountContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  currencyCode: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(10),
    opacity: THEME.OPACITY.MID,
    textAlign: 'right'
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scale(8)
  },
  symbol: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.SYMBOLS,
    fontSize: scale(10),
    marginRight: scale(5),
    opacity: THEME.OPACITY.MID,
    textAlign: 'right'
  }
})
