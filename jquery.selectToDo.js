;(function ($){
	$.fn.selectToDo = function (options){
		var settings = $.extend({},{
			"selectAllButton"    : $("#selectAll"),
			"selectNoneButton"   : $("#selectNone"),
			"selectInvertButton" : $("#selectInv"),
		}, options);
		
		var element = this;
		
		$(settings.selectAllButton).bind("click",function(){//全选
			element.prop('checked', true);
		});
		$(settings.selectNoneButton).bind("click",function(){//全不选
			element.prop('checked', false);
		});
		$(settings.selectInvertButton).bind("click",function(){//反选
			element.each(function(){
				if(this.checked){
					$(this).prop('checked', false);
				}else{
					$(this).prop('checked', true);
				}
			});
		});
		
		this.result = function(){
			var checkVal=[];
			element.each(function(){
				if(this.checked){
					checkVal.push($(this).val());
				}
			});
			if(checkVal.length > 0)
			{
				// 引用回调函数
			    return checkVal.join(",");
			}else{
				return null;
			}
		};
		
		return this;
	};
})(jQuery);