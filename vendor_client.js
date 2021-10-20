/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*/
define(['N/record'],
function(record)
{
function pageInit(context)
{
		var recID = context.currentRecord;
		
 		var cust = recID.setValue({fieldId : 'custentity_hold_payment',value:true});
  		var vend = recID.setValue({fieldId : 'custentityholdpayment12',value:true});
		
		log.debug('sadadad')
}

return {
pageInit: pageInit
 }
});

