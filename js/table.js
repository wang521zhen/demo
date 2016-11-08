;(function($){  
    $.fn.extend({
    	"Table":function(divId,id,row,col,headList,content){
		$(divId).html("");
		col = col != null&&col != ''?col:(headList!=null?headList.length:0);
		row = row != null&&row != ''?row:(content!=null?content.length:0);
        // var row = 16;
        var table = $("<table id="+id+">"),
        // 设置表头
        setHead = function(table_thead){
        	var tr = $("<tr>");		
			$(tr).appendTo(table_thead);
        	for(var n = 0;n<col;n++){
				var th = $("<th>"+headList[n]+"</th>");
				$(th).appendTo(tr);
			}
        	table_thead.appendTo(table);
		},
		// 设置内容
		setContent = function(table_tbody){
			table_tbody.appendTo(table);
			if(row == null||row == 0){
				var tr = $("<tr>");		
				$(tr).appendTo(table_tbody);
				$("<td colspan='"+col+"'>"+"无记录"+"</td>").appendTo(tr);
			}else {
				for(var y=0;y<row;y++){
					var tr = $("<tr>");		
					$(tr).appendTo(table_tbody);
					for(var x=0;x<col;x++){
						$("<td>"+""+"</td>").appendTo(tr);
					}					
				}
				$.each(content, function(i ,item) {
					$.each(item, function(j ,con) {
						$("#"+id+" tr:eq("+i+") td:eq("+j+")").text(con);
					});
				});
			}
		};

		table.appendTo($(divId));
		
		setHead($("<thead>"));
		setContent($("<tbody>"));
		// 样式
		//$("."+table_class+" th:eq(0),#bank th:eq(0)").css({"width":"50px","text-align":"center"});
		//$("#"+id+" tr td:last-child()").css({"width":"50px","margin":"0 auto","vertical-align": "middle"})
		//$("."+table_class+" tr td:first-child()").css({"background":"linear-gradient(to bottom, #f9f9f9 , #f1f1f1)","text-align":"center"})
		
    }//table结束  
	});//fn结束
}(jQuery));
  