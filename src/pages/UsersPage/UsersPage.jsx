import { useOutletContext } from "react-router-dom";

import Cards from "/src/components/Cards/Cards.jsx"
import usersPageStyles from './UsersPage.module.scss'

function UsersPage(props) {
        const [renderMessages] = useOutletContext();

        /**
         * Emit messages 
         * 
         * @param {*} message 
         */
        function emitMessages(message) {
                renderMessages(message);
        };

        return (
                <>
                        <Cards
                                emitMessages={emitMessages}
                        />
                </>
        )
}

export default UsersPage