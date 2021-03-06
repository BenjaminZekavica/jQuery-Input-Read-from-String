jQuery(document).ready(function() {


	// Read and write in input

	function job_manager_fields_read_and_copy_paste($) {

		/* Ausgabe des Vornamens */ 
		var ausleser = jQuery('span.vorname-string').html();
		jQuery('input#vorname').val(ausleser);


		/* Ausgabe des Nachnamens */ 
		var ausleser = jQuery('span.nachname-string').html();
		jQuery('input#nachname').val(ausleser);
	

		/* Ausgabe der E-Mail Adresse */ 
		var ausleser = jQuery('span.mail-string').html();
		jQuery('input#email').val(ausleser);
	
	}

	job_manager_fields_read_and_copy_paste(); 
		
});


/*  Ninja Forms Integration 
    This must be insert, to load jQuery function
*/ 

	jQuery(document).on( 'nfFormReady', function( e, layoutView ) {
		var ausleser = jQuery('.name strong').html();
		jQuery('input.mks-vorname').val(ausleser);
	}); 
	
	
	
/* Location DE - German String Translation */

jQuery(document).ready( function() {
		
			var customDatePickerStuff = Marionette.Object.extend( {
			initialize: function() {
				this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );	
			},

			// Edit Lables 
			modifyDatepicker: function( dateObject, fieldModel ) {
				
				 dateObject.pikaday._o.i18n = {
					previousMonth : 'vor',
					nextMonth     : 'zurück',
					months        : ['Januar','Februar','März','April','Mai','Juni','Juli','August','Septemper','Oktober','November','Dezember'],
					weekdays      : ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
					weekdaysShort : ['So','Mo','Di','Mi','Do','Fr','Sa']
				};
			}
	    });

		jQuery( document ).ready( function() {
			new customDatePickerStuff();
		} );
}); 