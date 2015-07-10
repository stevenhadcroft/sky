var URL = "http://safe-plains-5453.herokuapp.com/bill.json";

describe("Player", function() {
  
    var broker;
    var json;
	
    beforeEach(function() {
        broker = new BD.JsonBroker();
		//use mock JSON data
		broker.setJSON(MOCK_JSON);
		
	});

    it("JSON should be truthy", function () {
        json = broker.getJSON();
        expect(json).toBeTruthy();
    })
	
    it("statement 'total' should be a Number", function () { 
        var result = broker.getStatementData().total;
        expect(result).toBeTruthy();
    })
    
    it("statement 'generated' should be a truthy", function () { 
        var result = broker.getStatementData().generated;
        expect(result).toBeTruthy();
    })
    
    it("statement 'due' should be a truthy", function () { 
        var result = broker.getStatementData().due;
        expect(result).toBeTruthy();
    })
    
    it("statement 'from' should be a truthy", function () { 
        var result = broker.getStatementData().from;
        expect(result).toBeTruthy();
    })
    
    it("statement 'to' should be a truthy", function () { 
        var result = broker.getStatementData().to;
        expect(result).toBeTruthy();
    })
    
    it("subscriptions 'list' should be truthy", function () {		 
        var result = broker.getSubscriptionsData().list;
        expect(result).toBeTruthy();
    })
    	
    it("callCharges 'list' should be truthy", function () {		 
        var result = broker.getCallChargesData().list;
        expect(result).toBeTruthy();
    })

    it("skyStore 'list' should be truthy", function () {		 
        var result = broker.getSkyStoreData().list;
        expect(result).toBeTruthy();
    })
	
    it("subscriptionsTotal 'total' should be a Number", function () { 
        var result = broker.getSubscriptionsData().total;
        expect(result).toEqual(jasmine.any(Number));
    })
    	
    it("callCharges 'total' should be a Number", function () { 
        var result = broker.getCallChargesData().total;
        expect(result).toEqual(jasmine.any(Number));
    })
	
    it("skyStore 'total' should be a Number", function () {
        var result = broker.getSkyStoreData().total;
        expect(result).toEqual(jasmine.any(Number));
    })

});
