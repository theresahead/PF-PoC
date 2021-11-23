var push = require('web-push');

let vapidKeys = {
  publicKey: "BIx7cqPyH_T-nn1Xh7IwbilnMtIVeNUJfvRQX-LYlT1R9Sd-5L8oklmgbG4vIuvW0bQwtGQT5tfPJT3l3KjEs2w",
  privateKey: "_Gfmop9e2KWj7m2OIB8-1lxI8sYk3SYzZVEC2mMTz60"
};

push.setVapidDetails('mailto:theresa.head@ymedialabs.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'this is a test message');
