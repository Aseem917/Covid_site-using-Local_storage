
var info=new Array();
var id;

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
    localStorage.clear();
    $("#load").click(
        function(){ 
            
            $.ajax({
                type: "GET", 
                url: "dataFile/vaccine_doses.json", 
                dataType: "json", 
                success: function(data){
                    localStorage.clear();
                  $.each(data,()=>  {
                      data.forEach((key,id) => {
                          let info={
                              ...key,
                              id:id+1
                          }
                            localStorage.setItem(key.report_date,JSON.stringify(info))
                      });               
                                
                  });
                  let detail=new Details();
                 alert("Information Loaded");
                  
                }
            });
        })

        $("#Display").click(
            function(){ 
              
            
              
                   var i=0;
                   
                  

                   while(i<localStorage.length){
                   
                  
                   $("#sectionList").append(`<div onclick="showRecord(${i})">${localStorage.key(i)}</div>`);
                    i++;
                }
               
            });
       
    
});
function showRecord(id){
    
 var thisItem=JSON.parse(localStorage.getItem(localStorage.key(id)));

    
 
  var a=thisItem.report_date;
  var b=thisItem.previous_day_doses_administered;
  var c=thisItem.total_doses_administered;
  var d=thisItem.total_doses_in_fully_vaccinated_individuals;
  var e=thisItem.total_individuals_fully_vaccinated;
    $("#p1").html("Report Date=>" + a);
    $("#p2").html("Previous day dose administrated=>" + b);
    $("#p3").html("Total dose administrated=>" + c);
    $("#p4").html("Total dose in fully vaccinated Individuals=>" + d);
    $("#p5").html("Total individuals fully vaccinated=>" + e);

    
    

}

                      
                