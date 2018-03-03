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