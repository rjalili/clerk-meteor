// Write your package code here!
Clerk = {
  clerkAPI_URL: "http://clerk.meteor.com/",

  // use http.call to a clerk service
  // uses the default clerk service
  // TODO: allow another clerk service to be used
  //
  store: function(data,cb) { //data to store and cb for the async call to the clerk service
    var key = null;
    var methodResult = null;
    // ajax call to clerk to put login authorization
    // get token 
    console.log("data to store:");
    console.log(data);
    var stub = "clerkStore";
    try {
      methodResult = Meteor.call(stub,data, function(error, result) {
        if ( cb ) {
          cb(error, result);
        }
        if ( error ) {
          console.log(error);
        }
        else {
          var key = result;
          if ( key ) {
          //console.log("got key" + key);
          Session.set("clerk_key",key);
          }
        }
      });  
    }
    catch (e) {
      console.log(e);
    }


//    console.log("tried to store ");
//    console.log(data);
    return key;
  },
  fetch: function(key,cb) {
    console.log("tried to fetch ");
    console.log(key);

    var result = Meteor.call("clerkFetch",key,
                             function (error, result) {
      if ( cb ) cb(error, result);
      if (!error) {
        console.log("setting fetched data");
        console.log(result);
        Session.set("clerk_fetched_data", result);
      }
    });
  }
}

if (Meteor.isClient) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
 /*
  Meteor.methods({
    clerkStore: function (data) {
      var result;
      try {
        result = Meteor.call("clerkStore",data);
      }
      catch(e) { console.log(e); }
      return result;
    },
    

    clerkFetch: function (key) {
      var result;
      try {
        result = Meteor.call("clerkFetch",key);
      }
      catch(e) {
        console.log(e);
      }
      return result;
    }
  }); 
  */
}
