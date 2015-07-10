// Namespace
this.BD = this.BD || {};

(function() {
	
	"use strict";
	
	function JsonBroker(){
        
        var url = "http://safe-plains-5453.herokuapp.com/bill.json";
        var json;
        
        this.loadJSON = function(callback){
            $.getJSON(url, function(data){
                json = data;
                callback(json);
            });
        }

		this.setJSON = function(data){
            json = data;
        }
		
		this.getJSON = function(){
            return json;
        }
		
        //-----------------------------------------------------------------
        this.getStatementData = function(){
            var found = find(json, "statement");
            return {
                generated:found.generated,
                due:found.due,
                from:found.period.from,
                to:found.period.to,
                total:json.total
            }
        }

		this.getSubscriptionsData = function(){
            return this.getData2("package");
        }
		
        this.getCallChargesData = function(){
            return this.getData1("callCharges");
        }

        this.getSkyStoreData = function(){
            return this.getData2("skyStore");
        }

        //-----------------------------------------------------------------
        //returns array 1 level deep
        this.getData1 = function(id){
            var list = [];
            var found = find(json, id);
            for (var a in found){
                for (var b in found[a]){
                    list.push(found[a][b]);
                }
            }
            return {list:list, total:found.total};
        }
            
        // returns array 2 levels deep
        // 'total' is excluded from array
        this.getData2 = function(id){
            var category_arr = [];
            var found = find(json, id);
            for (var categories in found){
                var items_arr = [];
                for (var items in found[categories]){
                    items_arr.push(found[categories][items]);
                }
                if (categories.toLowerCase() != "total"){
                    category_arr.push({title:categories, items_arr:items_arr});
                }
            }
            return {list:category_arr, total:found.total};
        }
        
        // find value of a key
        function find(hash, key){
            var found = {};
            function _find(hash, key){
                $.each(hash, function( index, value ) {
                    if (typeof value === 'object'){
                        if (index == key){
                            found = value;
                        } else {
                            if (index && value){
                                _find(this, key);
                            }
                        }
                    }
                });
            }
            _find(hash, key);
            return found;
        }
	};
	
	BD.JsonBroker = JsonBroker;
	
}());
