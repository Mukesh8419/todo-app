import React from 'react';
import ContactCard from './ContactCard'
function ContactCardDetails(){
    return(
        <div className="contacts">
        <ContactCard
        contact={{name:"Fluffykins",imgUrl:"http://placekitten.com/400/200",phone:"(212) 555-2222",email:"fluffy@catnap.meow"}}
        />

                <ContactCard
        contact={{name:"Mr.Whiskerson",imgUrl:"http://placekitten.com/300/200",phone:"(212) 555-1111",email:"mr.whiskaz@catnap.meow"}}
        />

        <ContactCard
        contact={{name:"Destroyer",imgUrl:"http://placekitten.com/400/300",phone:"(212) 555-3333",email:"xyz@yahoo.com"}}
        />

        <ContactCard
        contact={{name:"Fleix",imgUrl:"http://placekitten.com/200/100",phone:"(212) 555-4444",email:"abc@gmail.com"}}
        />

        </div>
    )

    
}
export default ContactCardDetails;