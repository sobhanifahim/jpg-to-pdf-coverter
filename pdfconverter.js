var vis=document.getElementById("show");
var pdf=document.getElementById("pdf");
var text=document.getElementById("txt");
var  download=document.getElementById("download");
vis.style.visibility="hidden"
download.style.visibility="hidden"
    function preview(){
        pdf.style.overflowY="auto";
        vis.style.visibility="visible";
        download.style.visibility="visible";
        text.remove();
        var file=document.getElementById("file").files;
        if(file.length>0){
            var reader=new FileReader();
            reader.onload=function(event){
              document.getElementById("show").setAttribute("src",event.target.result);
            };
            reader.readAsDataURL(file[0]);
        }
    }
    function generatePDF(){
        const element=document.getElementById("show");
        var opt = {
               margin :      [0.5,0.1,0.5,0],
               filename:     'ImagePDF.pdf',
               image:        { type: 'jpeg', quality: .95 },
               html2canvas:  { scale: 2, },
               jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
               };
                  html2pdf().from(element).set(opt).save();
    }
