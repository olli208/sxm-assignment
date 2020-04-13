
import styled from 'styled-components';
import PropTypes from 'prop-types';


const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};
	width: ${({ isFullWidth }) => isFullWidth && '100%'};
	flex-direction: ${({ direction }) => direction && direction};
`

FlexWrapper.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  isFullWidth: PropTypes.bool,
  direction: PropTypes.string
}

FlexWrapper.defaultProps = {
  justifyContent: 'flex-start'
}

export default FlexWrapper