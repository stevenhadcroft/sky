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
	
    /*
  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
  */
});
