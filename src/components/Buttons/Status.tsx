import {color} from 'src/theme'
import {StatusContainer, StatusText} from './StatusStyles'

const getValues = (text: string) => {
  if (text === 'inProduction') {
    return {
      label: 'In production',
      color: color.black,
      background: color.buttonGreen,
    }
  }
  if (text === 'madeToOrder') {
    return {label: 'Made to order', color: color.buttonGreen}
  }
  return {label: 'Available for production'}
}

const Status = ({text}: {text?: string}) => {
  if (!text) {
    return null
  }
  const {label, background, color} = getValues(text) || {}
  return (
    <StatusContainer $background={background} $color={color}>
      <StatusText $color={color}>{label}</StatusText>
    </StatusContainer>
  )
}

export default Status
