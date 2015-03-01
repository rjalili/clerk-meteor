Clerk = {
  store: function(data) {
    
  },
  fetch: function() {
    var clerkBucket = HTTP.call("GET","http://clerk.meteor.com/data/"+token,{timeout:400});
    console.log(clerkBucket);
    var data = clerkPackage.data.bucket.data;
    return data;
  }
}
  
// Write your package code here!
if (Meteor.isClient) {
}  

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  }
}