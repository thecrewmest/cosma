$(document).ready(function() {
    Main.init();
    UIModals.init();
    FormElements.init();

     $('#to-date, #from-date').datepicker({
         format: "dd/mm/yyyy",
         todayBtn: "linked"
     });
});