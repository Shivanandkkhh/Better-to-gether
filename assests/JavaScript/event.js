
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
    