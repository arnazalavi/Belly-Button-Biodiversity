//Step 1 ... populate the dropdown option for
// user to pick the test id
function init() {
  d3.json("data/samples.json").then(function(fileData) {
     console.log(fileData);
     var allData = fileData;
       console.log(fileData.names);
     var dropdowntestid = d3.select("#selDataset")
     // extract the ID's from the json file
     var dataNames = allData.names;
     
     //For each names in the dataNames Or json data
     // Create a structure and populate the data
     dataNames.forEach(function (names){
      dropdowntestid.append("option")
      .text(names)  // DataSet 1
      .property("value",names) ;//option value 
     } );
     demographic_info(940)
    })
  }

  //populate the Demographic Info
  // information is in metadata
  function demographic_info(inputSampleID) {
    d3.json("data/samples.json").then(function(fileData) {
      var allData = fileData;
      var metaData = allData.metadata;
      // Apply filter on json metadata
      console.log(metaData);
      console.log(inputSampleID);
    
        filteredData = metaData.filter(data => data.id == inputSampleID) 
    // index = 0 for id in the json metadata
    var inputSampleDemo = filteredData[0]

        var   demographic = d3.select("#sample-metadata");
        Object.entries(inputSampleDemo ).forEach(function([key, value]) {
          console.log(key, value);
          demographic.append("h6").text(`${key}:${value}`);
        });
      });
    }
  



  init() 

    //}).error(function(err) {
    //      console.log("failed: ", err);
     // });
    //}
    //}
    // Test Subject ID number is empty
    // Need to fill using the Json data
    //Json data = jsonData.names
    //var dropdowntestid = d3.select("selDataset")
    // Need actual code to take the data from Json and appened to the html
    //dropdown option
    // Second function to populate the names
    //TestIDs = jsonData.names
   // TestIDs.forEach(function (names){
   // dropdowntestid.append("option")
    //.text(names)  // DataSet 1
    //property("value",names) //option value 
    
    
    // ..... dropdowntestid ....property("value",name)   ..for each name
    // 
    //}

// Step 2 .... 
//Filter  the samples based on the user input
// filter data.samples.filter(x)  => x.id == (user selected Id)
// This would be my test data or suppose 

// dropDownotion.append("option")

// testdata.otu_ids --- index 1
// testdata.names --- index = 0
// testdata.sample_values --- index 2
//testdata.otu_lables --- index 3

//Question only one pick or more 
// Filter 2 on meta data

//data.metadata.filter(x)  => x.id == (user selected Id)
//Question index{0] .......} what to pick ?????
//id="selDataset"