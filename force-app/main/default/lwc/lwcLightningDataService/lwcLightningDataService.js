import { LightningElement, api, track } from 'lwc';

export default class LwcLightningDataService extends LightningElement {

  @track recordId;
  @track showLDS = false;
  @api objectApiName = 'Contact';

  contactSelected(event) {
    //console.log('---------------------------->>>> '+event.detail)
    const contactId = event.detail;
    this.recordId = contactId;
    this.showLDS = true;
    //this.selectedContact = this.contacts.data.find(contact => contact.Id === contactId);
  }

  handleSuccess(event) {
   // this.accountId = event.detail.id;
   alert('Record updated successfully.');
}
} 