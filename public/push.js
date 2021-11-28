var push = require("web-push");

let vapidKeys = {
    publicKey: "BLcuWb1dUakQj2fU1NGkVN3EblwjNuImz-iRogjrQxiyYC6sWlsS4AgMY2LcYQviHfHj0_EPUTMv05G3ZClZS2E",
    privateKey: "TkfR_Fomc6-5-yPb_E9atxxwPfHt0IDkAO05MdD4kqY"
  };


push.setVapidDetails('mailto:theresa.head@ymedialabs.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:"https://fcm.googleapis.com/fcm/send/fSecxM4RvP4:APA91bHyI3I_jXgLbiZalqSatnHIbpxwwpzUQd35Ycd1-NJnw70djB6UGCGZLw3t5MlealynE4FI_vs9klmnBVRf2fRJBI19hQMWiMNjPi9OGzCOHfdQ8Lw0gBq4YeUkj3auUoecnhFT",
  expirationTime:null,
  keys: { p256dh:"BDkTwoHnvA3uC0oQ2Qev1hzXSoh2Xg8vPFHNO9EPISglPf6FJ4pWm7pFMGkmKZDnJs07CCQSztnsyf8O6QQ59T8",
  auth:"IxYe6rr_BewAmngCKUH6Ug"
  }
};

push.sendNotification(sub, 'this is a test message');
