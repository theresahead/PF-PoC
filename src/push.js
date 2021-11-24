var push = require("web-push");

let vapidKeys = {
    publicKey: "BLcuWb1dUakQj2fU1NGkVN3EblwjNuImz-iRogjrQxiyYC6sWlsS4AgMY2LcYQviHfHj0_EPUTMv05G3ZClZS2E",
    privateKey: "TkfR_Fomc6-5-yPb_E9atxxwPfHt0IDkAO05MdD4kqY"
  };


push.setVapidDetails('mailto:theresa.head@ymedialabs.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'this is a test message');
