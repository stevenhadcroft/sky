var URL = "http://safe-plains-5453.herokuapp.com/bill.json";

describe("Player", function() {
  
    var broker;
    var json;
	
    beforeEach(function() {
        broker = new BD.JsonBroker();
		//use mock JSON data
		broker.setJSON(MOCK_JSON);
		
	});

    it("getJSON should be truthy", function () {
        json = broker.getJSON();
        expect(json).toBeTruthy();
    })
	
    it("getStatementData 'total' should be a Number", function () { 
        var result = broker.getStatementData().total;
        expect(result).toBeTruthy();
    })
    
    it("getStatementData 'generated' should be truthy", function () { 
        var result = broker.getStatementData().generated;
        expect(result).toBeTruthy();
    })
    
    it("getStatementData 'due' should be truthy", function () { 
        var result = broker.getStatementData().due;
        expect(result).toBeTruthy();
    })
    
    it("getStatementData 'from' should be truthy", function () { 
        var result = broker.getStatementData().from;
        expect(result).toBeTruthy();
    })
    
    it("getStatementData 'to' should be truthy", function () { 
        var result = broker.getStatementData().to;
        expect(result).toBeTruthy();
    })
    
    it("getSubscriptionsData 'list' should be truthy", function () {		 
        var result = broker.getSubscriptionsData().list;
        expect(result).toBeTruthy();
    })
    	
    it("getCallChargesData 'list' should be truthy", function () {		 
        var result = broker.getCallChargesData().list;
        expect(result).toBeTruthy();
    })

    it("getSkyStoreData 'list' should be truthy", function () {		 
        var result = broker.getSkyStoreData().list;
        expect(result).toBeTruthy();
    })
	
    it("getSubscriptionsData 'total' should be a Number", function () { 
        var result = broker.getSubscriptionsData().total;
        expect(result).toEqual(jasmine.any(Number));
    })
    	
    it("getCallChargesData 'total' should be a Number", function () { 
        var result = broker.getCallChargesData().total;
        expect(result).toEqual(jasmine.any(Number));
    })
	
    it("getSkyStoreData 'total' should be a Number", function () {
        var result = broker.getSkyStoreData().total;
        expect(result).toEqual(jasmine.any(Number));
    })

});
