import React from 'react'
// import PropTypes from 'prop-types'

export default props => {
    let classes = 'button '
    classes +=  props.operation ? 'operation' : ''
    classes +=  props.double ? 'operation' : ''
    classes +=  props.triplo ? 'operation' : ''

    return (
        <button 
            onClick={ e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
