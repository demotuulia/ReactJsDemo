/**
 * A common messagebox
 */

import PropTypes from 'prop-types';
import messagesStyles from './Messages.module.css'


function Messages(props) {

        function boxStyle() {
                if (props.messages.status == 'error') {
                        return messagesStyles.errorBox
                }
                return messagesStyles.succesBox
        }

        return (
                <>
                        <ul className={boxStyle()} >
                                {
                                        props.messages.messages.map((message, index) =>
                                        (
                                                <li key={index}>
                                                        {message}
                                                </li>
                                        )
                                        )
                                }
                        </ul>
                </>
        )
}

Messages.propTypes = {
        /**
         * messages
         * object in format:
         *    { 
         *        status: string,       OK or ERROR 
         *        messages: []          string array of messages
         *    }
         */
        messages: PropTypes.object

};
export default Messages