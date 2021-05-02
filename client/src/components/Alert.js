import PropTypes from 'prop-types'

export const Alert = ({ message }) => {
    return (
        <div className='alert alert-info alert-dismissible fade show' role='alert'>
            {message}
            <button
                type='button'
                className='close'
                data-dismiss='alert'
                aria-label='Close'
            >
            </button>
        </div>
    )
}

Alert.propTypes = {
    message: PropTypes.string.isRequired
}
