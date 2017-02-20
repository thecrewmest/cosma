$(document).ready(function() {
    Main.init();
    UIModals.init();
    TableExport.init();
    FormElements.init();



     $('#to-date, #from-date').datepicker({
         format: "dd/mm/yyyy",
         todayBtn: "linked"
     });


});