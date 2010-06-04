jQuery.fn.textInputTip = function(overClass,divWidth) {
	return this.each(function(){
		var input = jQuery(this);
		if (input) {
      if(divWidth==null)
        divWidth='100%';
      input.wrap('<div style="width:'+divWidth+';position:relative;float:left" class="textInputTip"/>');
		  var title = input.attr('title');
		  var id = input.attr('id');      
		  var label=$('<label style="width:auto;display:inline" class="pre over" for="'+id+'">'+title+'</label>');
      input.after(label);
      input.width('100%');
			this.hide = function() {
			  label.css({ textIndent: -10000 })
			}
			
			this.show = function() {
			  if (input.val() == '') label.css({ textIndent: 0 })
			}

			// handlers
			input.focus(this.hide);
			input.blur(this.show);
		  label.addClass(overClass).click(function(){ input.focus() });
			
			if (input.val() != '') this.hide(); 
		}
	})
}
