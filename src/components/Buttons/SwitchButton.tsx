import {Switch, SwitchContainer, SwitchText} from './ButtonStyles'

const SwitchButton = ({on, text}: {on: boolean; text?: string}) => {
  return (
    <SwitchContainer>
      <Switch $on={on} />
      {text && <SwitchText>{text}</SwitchText>}
    </SwitchContainer>
  )
}

export default SwitchButton
