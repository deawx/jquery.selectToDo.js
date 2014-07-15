;(function ($){
	$.fn.selectToDo = function (options){
		var settings = $.extend({},{
			"checkBoxName"         : "check",
			"selectAllButtonId"    : "selectAll",
			"selectNoneButtonId"   : "selectNone",
			"selectInvertButtonId" : "selectInv",
			"actionButtonId"       : "actionButton",
			"onAction"             : $.noop()
		}, options);
		$("#"+settings.selectAllButtonId).bind("click",function(){//全选
			$("[name='"+settings.checkBoxName+"']").prop('checked', true);
		});
		$("#"+settings.selectNoneButtonId).bind("click",function(){//全不选
			$("[name='"+settings.checkBoxName+"']").prop('checked', false);
		});
		$("#"+settings.selectInvertButtonId).bind("click",function(){//反选
			$("[name='"+settings.checkBoxName+"']").each(function(){
				if(this.checked){
					$(this).prop('checked', false);
				}else{
					$(this).prop('checked', true);
				}
			});
		});
		$("#"+settings.actionButtonId).bind("click",function(){//动作按钮
			var checkVal=[];
			$("[name='"+settings.checkBoxName+"']").each(function(){
				if(this.checked){
					checkVal.push($(this).val());
				}
			});
			if(checkVal.length > 0)
			{
				// 引用回调函数
			    if (typeof settings.onAction == 'function') { // 确保类型为函数类型
			    	settings.onAction(checkVal.join(",")); // 执行回调函数
			    }
			}
		});
		
		return this;
	};
})(jQuery);