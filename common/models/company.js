module.exports = function(Company) {
var mysql = require('mysql');
var connectionInfos = require('../../server/datasources.json');

Company.allCompaniesContact = function(id, cb) {

	// console.log(file);	

	var connection = mysql.createConnection(connectionInfos.mysqlInUse);

	var queryString = "SELECT * FROM company cp \
					LEFT JOIN company_contact cpc \
					ON cp.id = cpc.company_id";

	connection.query(queryString, function(err, response) {
		if(err) {
			console.log(err)
			queryResponse = err;
		} else {
			// console.log(response);
			queryResponse = response;
			
			// var finalArray = [];
			// var intermArray = [];
			// var intermObj = {};
			// for(i=0; i<response.length; i++) {
			// 	var intermArray = [];
			// 	var intermObj = {};
			// 	intermArray['company_id'] = response[i].company_id;
			// 	intermArray['featured_home'] = response[i].featured_home;
			// 	intermArray['name'] = response[i].name;
			// 	intermArray['slug'] = response[i].slug;
			// 	intermArray['thumb'] = response[i].thumb;
			// 	intermObj.email = response[i].email;
			// 		intermObj.cel_phone = response[i].cel_phone;
			// 		intermObj.fix_phone = response[i].fix_phone;
			// 	intermArray['contact'] = intermObj;
			// 	finalArray.push(intermArray);
			// }
			// queryResponse = finalArray;
			connection.end();
			cb(null, queryResponse);
		}
	})
}

Company.remoteMethod(
	'allCompaniesContact', {
		description: 'Retrieves all insurances with its infos',
		accepts: {
			arg: 'id',
			type: 'string'
		},
		http: {
			path: '/contact/:id',
			verb: 'GET'
		},
		returns: {
			arg: 'data',
			type: 'any'
		}
	});

};