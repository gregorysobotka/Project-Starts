(function($){

	var onePage = Backbone.Model.extend({

	});

	var onePageCollection = Backbone.Collection.extend({
		model : onePage
	});

	var onePageView = Backbone.View.extend({
	
		initialize : function(targetDiv) {

			if(targetDiv){
				_.bindAll(this, 'render');
				this.render(targetDiv);
			} else {
				console.log('please initialize module with target element');
			}

		},

		render : function(targetDiv) {

			var src = $('#initial-template').html(),
			template = Handlebars.compile(src);

			// initialize default template on page
			$(targetDiv).append(template);

		}

	});

	if($('body').data('page')){

		var pageName = $('body').data('page');
		
		//initialize module - not terribly ideal as it wont scale - only good for a handful of pages
		switch (pageName) {

			case 'home':
				appView = new onePageView('#main-app');
				break;
			case 'interrior':
				appView = new onePageView('#main-app');
				break;
		}

	}

})(jQuery);


