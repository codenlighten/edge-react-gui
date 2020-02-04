// @flow

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { exchangeMax } from '../../actions/indexActions'
import { showHelpModal } from '../../components/modals/HelpModal.js'
import * as Constants from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import { type DispatchProps, type StateProps, MenuDropDown } from '../../modules/UI/components/MenuDropDown/MenuDropDown.ui.js'
import * as Styles from '../../styles/indexStyles'
import THEME from '../../theme/variables/airbitz'
import type { Dispatch, State } from '../../types/reduxTypes.js'

export const dropDownStyle = {
  ...Styles.MenuDropDownStyleHeader,
  icon: { ...Styles.MenuDropDownStyle.icon, color: THEME.COLORS.WHITE }
}
export const mapStateToProps = (state: State): StateProps => {
  const data = [
    {
      label: s.strings.dropdown_exchange_max_amount,
      key: s.strings.dropdown_exchange_max_amount,
      value: {
        title: Constants.EXCHANGE_MAX_AMOUNT_VALUE
      }
    },
    {
      label: s.strings.string_help,
      key: s.strings.string_help,
      value: {
        title: Constants.HELP_VALUE
      }
    }
  ]
  return {
    style: dropDownStyle,
    data
  }
}

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelect: (value: Object) => {
    switch (value.title) {
      case Constants.HELP_VALUE:
        showHelpModal()
        break
      case Constants.EXCHANGE_MAX_AMOUNT_VALUE:
        dispatch(exchangeMax())
        break
      case Constants.CHANGE_MINING_FEE_VALUE:
        Actions[Constants.CHANGE_MINING_FEE_EXCHANGE]({ sourceWallet: value.sourceWallet })
        break
    }
  }
  // nextScreen: () => dispatch(actions.nextScreen())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDropDown)
