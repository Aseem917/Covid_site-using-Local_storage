var report_date;
var prev_day;
var totalDoses;
var totalDosesInFul;
var totalIndFulVacc;

class Details{
    constructor(report_date,prev_day,totalDoses,totalDosesInFul,totalIndFulVacc)

    {
        this.report_date=report_date;
        this.prev_day=prev_day;
        this.totalDoses=totalDoses;
        this.totalDosesInFul=totalDosesInFul;
        this.totalIndFulVacc=totalIndFulVacc;
    }
}
$(document).ready( () => {
    $("#load").click(
        function(){ 
            alert("hi");
            $.ajax({
                type: "GET", 
                url: "dataFile/vaccine_doses.json", 
                dataType: "json", 
                success: function (data) {
                    alert("1");
                    report_date=
                    $.each(data,  (index, element)=> {
                        let info=new info(index,value.report_date,value.prev_day,value.totalDoses,value.totalDosesInFul,value.totalIndFulVacc);
                            

                        localStorage.setItem(value.report_date,JSON.stringify(info));
                    });
                alert("H2");
          
               // error: (e) => {alert(`${e.status} - ${e.statusText}`);}
        
            


                }

});

        });   

    });