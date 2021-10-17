//Step 1 ... populate the dropdown option for
// user to pick the test id
//d3.json("data/samples.json").then(function(fileData) {
 // console.log(fileData);
 // var allData = fileData;
//}).error(function(err) {
    // console.log("failed: ", err);
   // });
//var plot_results = {};
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
      .property("value",names) ;//option value select id = value = ""
     } );
     extract_sampledata(940)
    })
  }

  //populate the Demographic Info
  // information is in metadata
  function extract_sampledata(inputSampleID) {
    d3.json("data/samples.json").then(function(fileData) {
      var allData = fileData;
      var metaData = allData.metadata;
      var samplesData = allData.samples;
      // Apply filter on json metadata
      console.log(metaData);
      console.log(inputSampleID);
      //console.log(samplesData);
    
      //Filter the
    filteredDemo = metaData.filter(data => data.id == inputSampleID) 
      // Filter the Sample data
     filteredSamples = samplesData.filter(data => data.id == inputSampleID)
    // index = 0 for id in the json metadata
    var inputDemo = filteredDemo[0]

    var inputSamples = filteredSamples[0]
    //console.log(inputSamples);
    

    // Get the sample data from filteredSamples
    var sample_values  = inputSamples.sample_values.slice(0,10).reverse();

    var sample_otu_ids = inputSamples.otu_ids.slice(0,10).reverse().map(d => `OTU ${d}`)
    //var sample_otu_ids = inputSamples.otu_ids.slice(0,10).reverse()

    //var sample_labels   =   inputSamples.otu_labels.slice(0,10).reverse().map(d => `OTU ${d}`)
    var sample_labels   =   inputSamples.otu_labels.slice(0,10)

    var sample_otu_ids_buuble = inputSamples.otu_ids


    // Values to plot the bar chart
    var plot_bar_chart = {
      values:sample_values,
      labels: sample_labels,
      ids: sample_otu_ids,
    };

    var plot_bubble_chart = {
      values:inputSamples.sample_values,
      labels:  inputSamples.otu_labels,
      ids: sample_otu_ids_buuble ,
    };
    //console.log(plot_results);
    // Extract demographic  data from the is in the meta data

        var   demographic = d3.select("#sample-metadata");
        demographic.html("");
        Object.entries(inputDemo ).forEach(function([key, value]) {
          console.log(key, value);
          demographic.append("h6").text(`${key}:${value}`);
        });

    buildBarChart(plot_bar_chart)
    buildBubbleChart(plot_bubble_chart)
      
  //  var trace = {
        //  x: sample_values,
       //   y: sample_otu_ids,
       //   type: "bar"
       // };
     //// 
   //     var data = [trace];
       // Plotly.newPlot("bar-plot", data)
     });
    
    }
function buildBarChart(sampleData){
console.log(sampleData);
    // Create  trace.
  var trace = {
    x: sampleData.values,
    y: sampleData.ids ,
    type: "bar",
    orientation:"h",
    mode:"makers",
    text:sampleData.sample_labels,
  };

  var barLayout = {
    title: "The top 10 OTUs found.",
    height:550,
    width:375
  //  margin:{
     // l: 100,
   //   r: 100,
   //   t: 100,
   //   b: 100
   // }
  };

  var data = [trace];
  console.log(trace);
  Plotly.newPlot("bar", data,barLayout)
  };

function buildBubbleChart(sampleData){
    console.log(sampleData);
        // Create  trace.

      
      var trace1 = {
        y: sampleData.values,
        x: sampleData.ids ,
        type: "bubble",
        mode:"markers",
        text:sampleData.sample_labels,
        marker: {
          size: sampleData.values,
          color:sampleData.ids
        }
      };
    
      var bubbleLayout = {
        title: "OTU IDs.",
        height:550,
        width:1200,
       margin:{t:0}
     
      };
      
    
      var bdata = [trace1];
      console.log(trace1);
      Plotly.newPlot("bubble", bdata,bubbleLayout)
      };

  init() 
  d3.select("#selDataset").on("change",SubjectID_Changed)

  function SubjectID_Changed() {
    var newSampleData = d3.select("#selDataset").node().value;
    extract_sampledata(newSampleData);

  }

  

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