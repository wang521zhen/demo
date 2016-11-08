;(function($){
	$.fn.extend({
		"PaginBar":function(divId,number_of_items,show_per_page,ajax_page){
			//number_of_items-条目数
			//number_of_pages页数
			//show_per_page每页展示数
			//now_page当前所在页
			divId = $("#"+divId+"");
			var number_of_pages = Math.ceil(number_of_items/show_per_page);
			var current_link = 0;
			var navigation_html = '';
			navigation_html += '共<span id="number_of_items">'+number_of_items+'</span>条记录&nbsp;';
			navigation_html += '<a href="javascript:go_first();">首页</a>&nbsp;';
			navigation_html += '<a href="javascript:previous()">上一页</a>&nbsp;';
			navigation_html += '<a href="javascript:next()">下一页</a>&nbsp;';
			navigation_html += '<a href="javascript:go_last()">尾页</a>&nbsp;';
			navigation_html += '第<span class="num_box" style="color:red;font-weight:600">1</span>页&nbsp;';
			navigation_html += '共<span style="color:red;font-weight:600">'+number_of_pages+'</span>页&nbsp;';
			navigation_html += '<input type="text" class="page-input" id="page-input">';
			navigation_html += '<input type="button" class="page-btn" value="跳转">&nbsp;';
			navigation_html += '<span>每页条数:</span><input type="text" class="page-input" id="page-item" value="'+show_per_page+'">';
			previous = function(){
				current_link=parseInt($(".num_box").text());
				new_page = current_link-1;
				if(new_page>=1){
					go_to_page(new_page);
					current_link = current_link-1;
				}else {
					alert("已经是第一页了！");
				}
			},
			next =function(){
				current_link=parseInt($(".num_box").text());
				new_page = current_link+1;
				if(new_page<=number_of_pages){
					go_to_page(new_page);
					current_link = current_link+1;
				}else {
					alert("已经是最后一页了！");
				}
			},
			go_to_page = function(page_num){
				ajax_page(page_num ,$("#page-item").val());
				$(".num_box").text(page_num);
			},
			go_first = function(){
				go_to_page(1);
			},
			go_last = function(){
				go_to_page(number_of_pages);
			},
			button_input = function(obj){
				var will_num = obj.val();
				var max_page = number_of_pages;
				if(will_num>max_page){
					go_to_page(max_page);
					obj.val(max_page);
				}if(will_num<1) {
					go_to_page(1);
					obj.val(1);
				}
				else {
					go_to_page(will_num);
				}
			},
			button_item = function(obj){
				go_to_page(1);
			};
			divId.html(navigation_html);
			$(".page-btn").on("click",function(){
				button_input($("#page-input"));
			});
			$("#page-input").on({
				"keydown":function(e){
					var key = e.keyCode;
					if(key == 13) {
						e.preventDefault();
						button_input($(this));
					}
				},
				"click":function(){
					$(this).css({"border":"1px solid #8bade4"});
				},
				"blur":function(){
					$(this).css({"border":"1px solid #cccccc"});
				}
			});
			$("#page-item").on({
				"keydown":function(e){
					var key = e.keyCode;
					if(key == 13) {
						e.preventDefault();
						button_item($(this));
					}
				},
				"click":function(){
					$(this).css({"border":"1px solid #8bade4"});
				},
				"blur":function(){
					$(this).css({"border":"1px solid #cccccc"});
				}
			});
			
		} //主函数
	});//fn
}(jQuery));