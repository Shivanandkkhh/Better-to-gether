
        // the code for filters starts from here
        var expanded=false;
        function showList(){

            var list=document.getElementById('checkboxes');
            if(!expanded){
                list.style.display="block";
                expanded=true;
            }
            else{
                list.style.display="none";
                expanded=false;
            }
        }

        function checkedFunction(){
        var checkedInputs = document.querySelectorAll("input:checked");
         var doc=document.getElementsByClassName('check-number')[0];
         doc.innerText=checkedInputs.length
        }

        // the code  form filter sneds from here