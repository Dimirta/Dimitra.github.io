//That is for making selections by the Json files
$.getJSON( "./../Json/columns.json", function( columns ) {
    columns.forEach(columnName => {
        //don't get dublicated filters ToDo:: change it
        if(columnName !== "description" && columnName !== "date" && columnName !== "weather"){     
            var path = "./../Json/" + columnName + ".json";
            $.getJSON( path, function( obj ) {
                var list = [];
                obj.forEach(element => {
                    list.push(element);
                });
                makeSelection(columnName, list);
            });
        }
    });
});

function makeSelection(input, optionList){

    var myDiv = document.getElementById("autoGenerated");
    var newLabel = document.createElement("label");
    var newSelection = document.createElement("select");
    
    newLabel.textContent = input;
    newSelection.id = input + "Selection";
    
    myDiv.appendChild(newLabel);
    myDiv.appendChild(newSelection);

    optionList.forEach(opt => {
        var option = document.createElement("option");
        option.text = opt;
        option.value = opt;
        newSelection.appendChild(option);
    });
}