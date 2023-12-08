const ContactCard = ({ contact, deleteContact, convert }) => {

    return (
        <tr>
            <td><img src={contact.pictureUrl} alt="profile pic" /></td>
            <td>{contact.name}</td>
            <td>{convert(contact.popularity)}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🌟' : ''}</td>
            <td><button onClick={() => deleteContact(contact.id)} className="btn-delete">Delete</button></td>



        </tr>
    );
}
export default ContactCard;