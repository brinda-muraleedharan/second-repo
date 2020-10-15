// cloning
//USing for loop and iterating
const nikiphone={
    phNo:7063995797,
    brand:'Mi A1', 
}
const brindaPhone={}
for(let key in nikiphone){
    brindaPhone[key]=nikiphone[key];
} 
const newObejetc={
    newProperty:1234
}
const bruPhone={phNo:9962237637};
Object.assign(bruPhone,nikiphone);

const chinnuPhone={...nikiphone};
