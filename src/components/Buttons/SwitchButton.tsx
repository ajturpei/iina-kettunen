import {Switch, SwitchContainer, SwitchText} from './ButtonStyles'

const SwitchButton = ({on, text}: {on?: 'true'; text?: string}) => {
  return (
    <SwitchContainer>
      <Switch />
      {text && <SwitchText>{text}</SwitchText>}
    </SwitchContainer>
  )
}

export default SwitchButton
