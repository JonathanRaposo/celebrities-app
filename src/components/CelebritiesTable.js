import ContactCard from "./ContactCard"

const CelebritiesTable = ({ celebrities, deleteContact, convert }) => {



    return (


        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                    <th>Action</th>
                </tr>

            </thead>

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


    );
}
export default CelebritiesTable;




