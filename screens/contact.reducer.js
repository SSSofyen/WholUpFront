export default function(contactList = [], action) {
  if(action.type === 'addcontact') {
           var contactListCopy = [...contactList]

          contactListCopy.push(action.nameContact, action.firstNameContact, action.emailContact, action.companyNameContact)

          return contactListCopy
;
  } else {
      return contactList;
  }
}
