import Thead from './Thead'
import ContactCard from './ContactCard';
import ButtonRandom from './ButtonRandom';
import ButtonSortByPopularity from './ButtonSortByPopularity';
import ButtonSortByName from './ButtonSortByName';

const ContactList = ({
    celebrities,
    AddRandomContact,
    sortByName,
    sortByPopularity,
    deleteContact,
    convert }) => {


    return (
        <div>

            <h1>Iron Contacts</h1>
            <ButtonRandom AddRandomContact={AddRandomContact} />
            <ButtonSortByPopularity sortByPopularity={sortByPopularity} />
            <ButtonSortByName sortByName={sortByName} />

            <table>
                <Thead />

                <tbody>
                    {celebrities.map((contact) => {
                        return <ContactCard
                            key={contact.id}
                            contact={contact}
                            deleteContact={deleteContact}
                            convert={convert}
                        />
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ContactList;