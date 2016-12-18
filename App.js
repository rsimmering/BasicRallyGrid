Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
      this._loadData();
    },

    //Get data from Rally
    _loadData: function(){
      	var myStore = Ext.create('Rally.data.wsapi.Store', {
    		model: 'User Story',
    		autoLoad: true,
    		listeners: {
        		load: function(myStore, data, success) {
           			console.log('got data!', myStore,data,success);
				this._loadGrid(myStore);
           	        },
			scope:this
    		},
    		fetch: ['FormattedID','Name', 'ScheduleState']
	});
    },
     
    //Create and show grid
    _loadGrid: function(store) {
        var myGrid = Ext.create('Rally.ui.grid.Grid',{
	   store: store,
	   columnCfgs:['FormattedID','Name', 'ScheduleState'] 
        });
	this.add(myGrid);
	console.log('what is this?',this);
    }









});
