import { LightningElement, wire, api, track } from 'lwc';
import initRecords from '@salesforce/apex/LWCDataTableController.initRecords';

export default class LwcDataTable extends LightningElement {
  @api objectApiName = 'Contact';
  @track data;
  @track columns;

  @wire(initRecords, { ObjectName: '$objectApiName', fieldNamesStr: 'Name,Title,Email,Phone', Orderby: 'Id', OrderDir: 'ASC' })
    wiredContacts({data}) {
        if (data) {
            this.data = data.sobList;
          /*  console.log('-----------------');
            console.log(data.sobList);
            console.log(data.ldwList);*/
            this.columns = data.ldwList;
        }
    }

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        if(selectedRows.length > 0) {
            console.log('----------1214-------'+selectedRows[0].Id);

           const selectedEvent = new CustomEvent('selected', { detail: selectedRows[0].Id });
           // Dispatches the event.
           this.dispatchEvent(selectedEvent);
        }
        
        /*
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            selectedRows[i].checked= false;
           // alert("You selected: " + selectedRows[i].Id);
        }*/
    }
}