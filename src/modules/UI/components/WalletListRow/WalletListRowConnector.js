// @flow
import { connect } from 'react-redux'

import type { Dispatch, State } from '../../../../types/reduxTypes.js'
import { getDisplayDenomination, getExchangeDenomination } from '../../../Settings/selectors.js'
import { calculateWalletFiatBalanceWithoutState } from '../../selectors.js'
import type { WalletListRowDispatchProps, WalletListRowOwnProps, WalletListRowStateProps } from './WalletListRow.ui.js'
import { WalletListRowComponent } from './WalletListRow.ui.js'

const mapStateToProps = (state: State, ownProps: WalletListRowOwnProps): WalletListRowStateProps => {
  const { settings } = state.ui
  const displayDenomination = getDisplayDenomination(state, ownProps.wallet.currencyCode)
  const exchangeDenomination = getExchangeDenomination(state, ownProps.wallet.currencyCode)
  const fiatBalance = calculateWalletFiatBalanceWithoutState(ownProps.wallet, ownProps.wallet.currencyCode, settings, state.exchangeRates)
  return {
    displayDenomination,
    exchangeDenomination,
    fiatBalance,
    settings
  }
}
const mapDispatchToProps = (dispatch: Dispatch): WalletListRowDispatchProps => {
  return {}
}

export const WalletListRowConnector = connect(mapStateToProps, mapDispatchToProps)(WalletListRowComponent)
