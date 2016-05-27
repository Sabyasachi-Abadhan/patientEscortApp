module.exports = function(UserAccount) {
	UserAccount.settings.acls.length = 0;
	UserAccount.settings.acls = require('./user-account-acl.json');
	
};


 