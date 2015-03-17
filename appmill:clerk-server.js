// On the server
Meteor.methods({
  clerkStore: function (data) {
    // Check argument types
    check(data, Object);
/*
    if ( check for error ) {
      throw new Meteor.Error("error string",
        "error description");
    }
*/
    // ... do stuff ...
    try {
      result = HTTP.post(Clerk.clerkAPI_URL, {timeout: 1000, data: data});
    }
    catch (e) {
      throw new Meteor.Error("clerk-store","Failed to store to clerk");
    }
    //console.log("called clerk");
    var key = result.data.key;
    console.log(key);
    return key;
  },

  clerkFetch: function (key) {
    // Check argument types
    check(key, String);
    var clerkBucket = {};
    var httpResult;
    try  {
      var url = Clerk.clerkAPI_URL+"?key="+key;
      //console.log("url " + url );
      httpResult = HTTP.call("GET",url,{timeout:1000});
    }
    catch (e) {
      throw new Meteor.Error("clerk-fetch","Failed to fetch from clerk");
    }
/*
, function(error, result) {
      if ( cb ) cb(error, result);

      var clerkBucket = result;
      console.log(clerkBucket);
    });
    */
    clerkData = httpResult.data;
    //clerkData = clerkData.result; // reply is {"result": clerkData}
    return clerkData;
  }
});